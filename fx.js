/* =========================================================
   FX ENGINE — Motion (Framer Motion vanilla) + Lenis
   1. Lenis butter-smooth scrolling (+ anchor rides)
   2. FadeIn       — [data-fade] viewport entrances
   3. Magnet       — magnetic hover ([data-magnet])
   4. Marquee      — scroll-driven dual rows
   5. AnimatedText — char-by-char scroll reveal (About)
   6. Card stack   — sticky projects scale on scroll
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
    function update() {
      const top = sec.offsetTop;
      const offset = (window.scrollY - top + window.innerHeight) * 0.3;
      r1.style.transform = `translateX(${offset - 200}px)`;
      r2.style.transform = `translateX(${-(offset - 200)}px)`;
    }
    if (reduced) { update(); return; }
    // ride Lenis's animation frame when available — perfectly in sync with the smoothed scroll
    if (lenis) lenis.on("scroll", update);
    else window.addEventListener("scroll", update, { passive: true });
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
      })
      .catch((err) => console.warn("Tubes background unavailable:", err));
  })();

  /* ---------- 7. Contact form → opens visitor's mail app pre-filled ---------- */
  (function () {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = (id) => (document.getElementById(id) || { value: "" }).value.trim();
      const name = val("cfName"), email = val("cfEmail"), msg = val("cfMsg");
      const subject = encodeURIComponent(`Portfolio contact — ${name}`);
      const body = encodeURIComponent(`${msg}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:rohitkumarmanne1@gmail.com?subject=${subject}&body=${body}`;
      const btn = form.querySelector(".contact-btn");
      if (btn) {
        const prev = btn.textContent;
        btn.textContent = "Opening your mail app…";
        setTimeout(() => { btn.textContent = prev; }, 2600);
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
