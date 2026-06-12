/* =========================================================
   FX ENGINE — Motion (Framer Motion vanilla) + Lenis
   1. Lenis butter-smooth scrolling (+ anchor rides)
   2. FadeIn       — [data-fade] viewport entrances
   3. Magnet       — magnetic hover ([data-magnet])
   4. Marquee      — scroll-driven dual rows
   5. AnimatedText — char-by-char scroll reveal (About)
   6. Card stack   — sticky projects scale on scroll
   7. Nav slider   — gradient pill glides between active/hovered links
   Every dependency is guarded — page still works if one fails.
   ========================================================= */
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const M = window.Motion || null; // { animate, scroll, inView, ... }

  /* ---------- 1. Lenis smooth scroll ---------- */
  const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
  let lenis = null;
  if (window.Lenis && !reduced) {
    lenis = new Lenis({
      lerp: 0.085,          // exponential smoothing — continuous, never "steppy"
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.6,
    });
    (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })(0);
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -20, duration: 1.4, easing: easeOutExpo });
      else target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- Nav sliding indicator ----------
     A single gradient pill that glides to the hovered link, and snaps to the
     active section's link when you're not hovering. Geometry is cached (only
     re-measured on resize / font load) so scroll never triggers a layout read. */
  (function () {
    const ul = document.getElementById("navLinks");
    const ind = document.getElementById("navIndicator");
    if (!ul || !ind) return;
    const links = [...ul.querySelectorAll(".nav-link")];
    const isDesktop = () => window.matchMedia("(min-width: 901px)").matches;
    const geo = new Map();
    const measure = () => links.forEach((l) =>
      geo.set(l, { x: l.offsetLeft, y: l.offsetTop, w: l.offsetWidth, h: l.offsetHeight }));
    const activeLink = () => links.find((l) => l.classList.contains("active"));

    function moveTo(link, show = true) {
      if (!link || !isDesktop()) { ind.style.opacity = "0"; return; }
      const g = geo.get(link);
      if (!g) return;
      ind.style.width = g.w + "px";
      ind.style.height = g.h + "px";
      ind.style.transform = `translate(${g.x}px, ${g.y}px)`;
      ind.style.opacity = show ? "1" : "0";
    }
    const settle = () => { if (!ul.matches(":hover")) moveTo(activeLink()); };

    links.forEach((l) => l.addEventListener("mouseenter", () => moveTo(l)));
    ul.addEventListener("mouseleave", settle);
    if (lenis) lenis.on("scroll", settle);
    else window.addEventListener("scroll", settle, { passive: true });
    window.addEventListener("resize", () => { measure(); settle(); });

    measure(); settle();
    // re-measure once webfonts settle (label widths shift)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); settle(); });
    setTimeout(() => { measure(); settle(); }, 400);
  })();

  /* ---------- 2. FadeIn — [data-fade] ---------- */
  if (M && !reduced) {
    document.querySelectorAll("[data-fade]").forEach((el) => {
      const dx = parseFloat(el.dataset.x || "0");
      const dy = el.dataset.y !== undefined ? parseFloat(el.dataset.y) : 30;
      const delay = parseFloat(el.dataset.delay || "0");
      const duration = parseFloat(el.dataset.duration || "0.7");
      el.style.opacity = "0";
      el.style.transform = `translate(${dx}px, ${dy}px)`;
      const stop = M.inView(el, () => {
        M.animate(el,
          { opacity: 1, transform: "translate(0px, 0px)" },
          { duration, delay, ease: [0.25, 0.1, 0.25, 1] });
        stop();
      }, { margin: "50px" });
    });
  }

  /* ---------- 3. Magnet — [data-magnet] ---------- */
  if (!reduced && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll("[data-magnet]").forEach((el) => {
      const PADDING = 150, STRENGTH = 3;
      el.style.willChange = "transform";
      let active = false;
      window.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const within =
          e.clientX > r.left - PADDING && e.clientX < r.right + PADDING &&
          e.clientY > r.top - PADDING && e.clientY < r.bottom + PADDING;
        if (within) {
          if (!active) { active = true; el.style.transition = "transform 0.3s ease-out"; }
          el.style.transform =
            `translate3d(${(e.clientX - cx) / STRENGTH}px, ${(e.clientY - cy) / STRENGTH}px, 0)`;
        } else if (active) {
          active = false;
          el.style.transition = "transform 0.6s ease-in-out";
          el.style.transform = "translate3d(0, 0, 0)";
        }
      }, { passive: true });
    });
  }

  /* ---------- 4. Marquee — scroll-driven dual rows ---------- */
  (function () {
    const sec = document.getElementById("marquee");
    const r1 = document.getElementById("marqueeRow1");
    const r2 = document.getElementById("marqueeRow2");
    if (!sec || !r1 || !r2) return;
    r1.style.willChange = "transform";
    r2.style.willChange = "transform";
    // cache the layout read so we never force a reflow on every scroll frame
    let secTop = sec.offsetTop;
    const vh = () => window.innerHeight;
    function update(y) {
      const offset = ((y != null ? y : window.scrollY) - secTop + vh()) * 0.3 - 200;
      // translate3d keeps both rows on their own compositor layer (GPU)
      r1.style.transform = `translate3d(${offset}px,0,0)`;
      r2.style.transform = `translate3d(${-offset}px,0,0)`;
    }
    window.addEventListener("resize", () => { secTop = sec.offsetTop; update(); }, { passive: true });
    if (reduced) { update(); return; }
    // ride Lenis's frame (smoothed scrollY) when available — no extra reflow
    if (lenis) lenis.on("scroll", ({ scroll }) => update(scroll));
    else window.addEventListener("scroll", () => update(), { passive: true });
    update();
  })();

  /* ---------- 5. AnimatedText — char-by-char scroll reveal ---------- */
  (function () {
    const p = document.getElementById("aboutReveal");
    if (!p) return;
    const text = p.textContent;
    p.textContent = "";
    const chars = [];
    for (const ch of text) {
      const s = document.createElement("span");
      s.className = "char";
      s.textContent = ch;
      s.style.opacity = reduced ? "1" : "0.2";
      p.appendChild(s);
      chars.push(s);
    }
    if (reduced || !M) { chars.forEach((c) => (c.style.opacity = "1")); return; }
    const N = chars.length;
    let lastHead = -1;
    M.scroll((progress) => {
      const head = progress * N * 1.15;
      if (Math.abs(head - lastHead) < 0.2) return; // nothing visibly changed
      // only touch the chars whose opacity actually moves this frame
      const lo = Math.max(0, Math.floor(Math.min(head, lastHead < 0 ? 0 : lastHead)) - 1);
      const hi = Math.min(N, Math.ceil(Math.max(head, lastHead)) + 1);
      for (let i = lo; i < hi; i++) {
        const o = Math.max(0, Math.min(1, head - i));
        chars[i].style.opacity = String(0.2 + 0.8 * o);
      }
      lastHead = head;
    }, { target: p, offset: ["start 0.8", "end 0.2"] });
  })();

  /* ---------- 6. Hero tubes background (threejs-components) ----------
     Neon tubes that follow the cursor; clicking empty hero space
     shuffles the palette. Self-contained ESM bundle (ships its own
     Three.js) loaded lazily so the page never blocks on it. */
  (function () {
    const canvas = document.getElementById("tubesCanvas");
    if (!canvas || reduced) return;
    import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js")
      .then((m) => {
        const TubesCursor = m.default;
        const app = TubesCursor(canvas, {
          tubes: {
            colors: ["#B600A8", "#7621B0", "#BE4C00"],
            lights: {
              intensity: 200,
              colors: ["#FF5AE0", "#A86CE0", "#FF8A3C", "#D7E2EA"],
            },
          },
        });
        const hero = document.getElementById("hero");
        if (!hero) return;
        hero.addEventListener("click", (e) => {
          if (e.target.closest("a, button, input")) return; // keep links/CTAs working
          const rand = (n) => Array.from({ length: n }, () =>
            "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0"));
          try {
            app.tubes.setColors(rand(3));
            app.tubes.setLightsColors(rand(4));
          } catch (err) { /* library API changed — ignore */ }
        });

        /* Pause the WebGL render loop once the hero scrolls out of view, so the
           GPU isn't fighting the scroll right where About comes in.
           IMPORTANT: resume with the library's OWN animation loop (captured via
           getAnimationLoop) — not a stand-in render() — otherwise the time-based
           tube motion comes back frozen. Skipped entirely if that API is missing,
           so we never pause something we can't faithfully resume. */
        const renderer = app.three && app.three.renderer;
        if (renderer && typeof renderer.setAnimationLoop === "function"
            && typeof renderer.getAnimationLoop === "function") {
          let savedLoop = renderer.getAnimationLoop() || null;
          let running = true;
          const io = new IntersectionObserver(([entry]) => {
            const visible = entry.isIntersecting;
            if (visible === running) return;
            running = visible;
            canvas.style.visibility = visible ? "" : "hidden";
            if (visible) {
              // restore the real loop (the library may have swapped it on a
              // visibilitychange while we were paused — restoring ours is safe)
              if (savedLoop) renderer.setAnimationLoop(savedLoop);
            } else {
              const cur = renderer.getAnimationLoop();
              if (cur) savedLoop = cur;            // keep the freshest real loop
              renderer.setAnimationLoop(null);
            }
          }, { threshold: 0 });
          io.observe(hero);
        }
      })
      .catch((err) => console.warn("Tubes background unavailable:", err));
  })();

  /* ---------- 7. Contact form → Web3Forms (delivers to my inbox) ---------- */
  (function () {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const MAILTO = "rohitkumarmanne1@gmail.com";
    const statusEl = document.getElementById("cfStatus");
    const btn = form.querySelector(".contact-btn");
    const setStatus = (msg, kind) => {
      if (statusEl) { statusEl.textContent = msg; statusEl.className = "cf-status" + (kind ? " " + kind : ""); }
    };
    const val = (id) => (document.getElementById(id) || { value: "" }).value.trim();
    const mailtoFallback = (name, email, msg) => {
      const subject = encodeURIComponent(`Portfolio contact — ${name || "someone"}`);
      const body = encodeURIComponent(`${msg}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:${MAILTO}?subject=${subject}&body=${body}`;
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = val("cfName"), email = val("cfEmail"), msg = val("cfMsg");
      if (!name || !email || !msg) { setStatus("Please fill in name, email and message.", "error"); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus("That email doesn't look right.", "error"); return; }

      const keyInput = form.querySelector('input[name="access_key"]');
      const key = keyInput ? keyInput.value.trim() : "";
      // not configured yet (placeholder) → graceful mailto so the form still works
      if (!key || key.indexOf("YOUR_") === 0) {
        setStatus("Opening your mail app…", "");
        mailtoFallback(name, email, msg);
        return;
      }

      const prev = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      setStatus("Sending your message…", "");
      try {
        // Send as FormData (not JSON): multipart/form-data is CORS-safelisted, so
        // the browser sends NO preflight — Web3Forms 403s the OPTIONS preflight that
        // a JSON Content-Type would trigger. Only the safelisted Accept header is set.
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });
        const data = await res.json();
        if (data.success) {
          setStatus("Message sent ✓ — thanks, I'll get back to you soon!", "success");
          form.reset();
        } else {
          setStatus("Couldn't send that — opening your mail app instead…", "error");
          mailtoFallback(name, email, msg);
        }
      } catch (err) {
        setStatus("Network hiccup — opening your mail app instead…", "error");
        mailtoFallback(name, email, msg);
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = prev; }
      }
    });
  })();

  /* ---------- 8. Projects — sticky stack scale ---------- */
  (function () {
    const stack = document.getElementById("projectsGrid");
    if (!stack || !M || reduced) return;
    // cards are injected by script.js before fx.js runs
    const cards = [...stack.querySelectorAll(".stack-card")];
    const total = cards.length;
    if (!total) return;
    cards.forEach((card, i) => {
      card.style.top = `calc(96px + ${i * 28}px)`;
      card.style.transformOrigin = "top center";
      card.style.willChange = "transform";
    });
    M.scroll((progress) => {
      cards.forEach((card, i) => {
        const start = i / total;
        const local = Math.max(0, Math.min(1, (progress - start) / (1 - start || 1)));
        const target = 1 - (total - 1 - i) * 0.03;
        const s = 1 - local * (1 - target);
        card.style.transform = `scale(${s})`;
      });
    }, { target: stack, offset: ["start start", "end end"] });
  })();
})();
