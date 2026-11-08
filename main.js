/* ============================================================
   Shorya Jain — portfolio
   Edit the DATA section below to update content.
   ============================================================ */

const GITHUB_USER = "shorjain";
const EMAIL = "shorjain@gmail.com";

const SKILLS = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "HTML / CSS", "SQL"] },
  { group: "AI & Agents", items: ["LLM agents", "Tool use", "RAG", "Grounding & citations", "Prompt engineering"] },
  { group: "ML & Data", items: ["PyTorch", "Pandas", "NumPy", "SciPy", "Matplotlib", "Sentiment analysis", "Audio feature extraction", "Time-series forecasting"] },
  { group: "AI Platforms & APIs", items: ["Snowflake Cortex AI", "Google Gemini API", "Grok / xAI", "Polymarket API", "Kalshi API"] },
  { group: "Web & Cloud", items: ["React", "Vite", "FastAPI", "MongoDB", "Cloudflare Workers", "Render", "Git / GitHub"] },
  { group: "Math", items: ["Statistics", "Probability", "Data Structures", "Linear Algebra", "Data Analysis"] },
  { group: "People", items: ["Public Speaking", "Technical Communication", "Leadership", "Project Lead", "Teaching"] },
];

const PROJECTS = [
  {
    id: "cryptoshi",
    title: "Cryptoshi",
    meta: "OCT 2026 / MLH · SHIPYARD BUILDATHON",
    kind: "RAG · Award winner",
    tag: "Crypto trading signals from prediction markets and the crowd",
    hook: "Won Best Use of Snowflake Cortex AI at the Tech@NYU Buildathon, built and deployed by two people during the event.",
    desc: [
      "Combined Bitcoin and Ethereum forecasts from Polymarket and Kalshi into one trading view.",
      "Used Snowflake Cortex AI to analyze sentiment in posts on X, to read what the public thinks.",
      "Built a retrieval-augmented generation (RAG) chatbot that answers questions with cited sources.",
    ],
    metrics: [
      { k: "Award", v: "Best Use of Snowflake Cortex AI", s: "Tech@NYU Shipyard Buildathon" },
      { k: "Markets", v: "Polymarket · Kalshi" },
      { k: "Chatbot", v: "RAG + citations" },
      { k: "Team", v: "2 people" },
    ],
    tags: ["Snowflake Cortex AI", "RAG", "Python", "Prediction markets"],
    links: [],
  },  {
    id: "receipts",
    title: "receipts",
    meta: "2026 / AUTHOR",
    kind: "LLM agent · Sports markets",
    tag: "Why the NFL line moved, and which insider called it first",
    hook: "Watches betting markets every minute. When the odds jump, it finds the reporter post that most likely caused it and explains the move in plain English.",
    desc: [
      "Tracks win odds, spreads and totals from Kalshi, Polymarket and sportsbooks, and flags moves seen on two markets at once as confirmed.",
      "Scores ~70 NFL reporters by checking every claim they make against official stats after the game.",
      "Every explanation passes a grounding check: each cause must cite a post published before the move, or it says “no clear cause”.",
    ],
    metrics: [
      { k: "Markets", v: "Kalshi · Polymarket", s: "plus sportsbooks" },
      { k: "Reporters", v: "~70 tracked" },
      { k: "Polling", v: "Every minute" },
      { k: "Grounding", v: "Cite or abstain" },
    ],
    tags: ["Python", "LLMs", "Grok x_search", "nflverse"],
    links: [{ label: "Source", href: "https://github.com/shorjain/receipts" }],
  },  {
    id: "foreseeer",
    title: "Foreseeer",
    meta: "JUL 2026 / AUTHOR",
    kind: "Forecasting · Live site",
    tag: "Demand forecasting for local retailers, right in the browser",
    hook: "Drop in a CSV of sales history and get a forecast with trend, seasonality and a confidence range in about two seconds. Nothing gets uploaded.",
    desc: [
      "Three forecasting methods: Holt’s trend (the default), exponential smoothing and moving average, with a 90% confidence band.",
      "A Gemini-powered “Ask Shorya” chatbot, with the API key kept safe behind a Cloudflare Worker.",
      "Plain HTML, CSS and vanilla JavaScript. No framework, no build step.",
    ],
    demo: true,
    metrics: [
      { k: "Methods", v: "Holt · ES · MA" },
      { k: "Confidence", v: "90% band", s: "on every predicted day" },
      { k: "Runtime", v: "100% in-browser" },
      { k: "Chatbot", v: "Gemini + Workers" },
    ],
    tags: ["HTML", "JavaScript", "Cloudflare Workers", "Gemini API"],
    links: [
      { label: "Visit foreseeer.com", href: "https://www.foreseeer.com" },
      { label: "Source", href: "https://github.com/shorjain/foreseeer" },
    ],
  },  {
    id: "surroundsound",
    title: "SurroundSound",
    meta: "2026 / BUILDER · TECH@NYU TECH TREKS",
    kind: "Audio ML · Web app",
    tag: "A room full of phones, synced into one surround sound system",
    hook: "Every phone in the room becomes a speaker. The app works out where each one is, then plays the right channel on each.",
    desc: [
      "Measures the distances between phones to build a shared map of the room.",
      "Uses ML to fine-tune the audio each device records, so calibration and room mapping are more accurate.",
      "Built with React, FastAPI, PyTorch and MongoDB, deployed on Render.",
    ],
    metrics: [
      { k: "Frontend", v: "React + Vite" },
      { k: "Backend", v: "FastAPI" },
      { k: "ML", v: "PyTorch", s: "cleans up per-device calibration audio" },
      { k: "Deploy", v: "Render" },
    ],
    tags: ["JavaScript", "Python", "PyTorch", "MongoDB"],
    links: [{ label: "Source", href: "https://github.com/shorjain/surroundsoundtechtreks" }],
    status: "In progress",
  },



];

const EXPERIENCE = [
  {
    org: "Tech@NYU", role: "Tech Treks Builder", where: "New York, NY", when: "SEP 2026 – PRESENT",
    points: [
      "Building a web app that syncs a room of phones into one surround sound system by measuring the distances between them.",
      "Using ML to fine-tune the audio recorded on each device so calibration and room mapping are more accurate.",
      "Built with React, FastAPI, PyTorch and MongoDB, deployed on Render.",
    ],
  },
  {
    org: "JEI Learning Center", role: "Educational Instructor", where: "Somerset, NJ", when: "MAY 2025 – AUG 2026",
    points: [
      "Taught math to students ages 5–15, adapting explanations across a wide range of skill levels.",
      "Tracked individual performance to find learning gaps and adjust pacing, leading to measurable gains in scores and confidence.",
      "Supported special education students one-on-one with structured routines that kept them engaged.",
    ],
  },
  {
    org: "Johnson & Johnson", role: "Intern, Technical Awareness Program", where: "Raritan, NJ", when: "SEP 2023 – DEC 2023",
    points: [
      "Selected for an onsite team program at J&J studying patient challenges.",
      "Built a digital app concept with the team and presented it to J&J executives.",
    ],
  },
];

/* ============================================================
   RENDER
   ============================================================ */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pad2 = (n) => String(n).padStart(2, "0");

$("#skills").innerHTML = SKILLS.map((g) => `
  <div class="skill-group reveal">
    <h4 class="mono">${esc(g.group)}</h4>
    <div class="chips">${g.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
  </div>`).join("");

$("#projIndex").innerHTML = PROJECTS.map((p, i) => `
  <li class="reveal"><a href="#work-${p.id}" data-idx="${i}" data-cursor="View">
    <span class="n mono">${pad2(i + 1)} / ${pad2(PROJECTS.length)}</span>
    <span class="t serif">${esc(p.title)}</span>
    <span class="k mono">${esc(p.kind)}</span>
  </a></li>`).join("");

$("#projects").innerHTML = PROJECTS.map((p, i) => `
  <article class="project" id="work-${p.id}">
    <div class="p-left reveal">
      <div class="p-num mono">${pad2(i + 1)}</div>
      <div class="p-meta mono">${esc(p.meta)}</div>
      <h3 class="p-title serif">${esc(p.title)}</h3>
      <p class="p-tag">${esc(p.tag)}</p>
    </div>
    <div class="p-right">
      <p class="p-hook reveal">${esc(p.hook)}</p>
      ${p.demo ? demoMarkup() : ""}
      <ul class="p-desc reveal">${p.desc.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
      <div class="metrics reveal">${p.metrics.map((m) => `
        <div class="metric"><div class="mono">${esc(m.k)}</div><div class="v">${esc(m.v)}</div>${m.s ? `<div class="s">${esc(m.s)}</div>` : ""}</div>`).join("")}
      </div>
      <div class="tags mono reveal">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="p-links mono reveal">
        ${p.links.map((l) => `<a class="link-arrow" href="${l.href}" target="_blank" rel="noopener" data-cursor="Open">${esc(l.label)} ↗</a>`).join("")}
        ${p.status ? `<span class="status">${esc(p.status)}</span>` : ""}
      </div>
    </div>
  </article>`).join("");

$("#timeline").innerHTML = EXPERIENCE.map((j) => `
  <div class="job reveal">
    <div><div class="job-when mono">${esc(j.when)}</div><div class="job-where mono">${esc(j.where)}</div></div>
    <div>
      <h3 class="serif">${esc(j.org)}</h3>
      <div class="role mono">${esc(j.role)}</div>
      <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    </div>
  </div>`).join("");

function demoMarkup() {
  return `
  <div class="demo reveal" id="demo">
    <div class="demo-head mono"><span><b>LIVE</b> · HOLT’S TREND FORECAST</span><span>DRAG ON THE CHART TO EDIT SALES</span></div>
    <canvas id="demoCanvas" data-cursor="Drag"></canvas>
    <div class="demo-ctrl mono">
      <label>α level <input type="range" id="alpha" min="0.05" max="0.95" step="0.05" value="0.4" /></label>
      <label>β trend <input type="range" id="beta" min="0.05" max="0.95" step="0.05" value="0.2" /></label>
      <button type="button" id="regen" data-cursor="New">New data</button>
      <span class="demo-out" id="demoOut"></span>
    </div>
  </div>`;
}

/* ============================================================
   INTERACTIONS
   ============================================================ */
const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

// --- theme ---
(() => {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) root.dataset.theme = saved;
  $("#themeToggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    window.dispatchEvent(new Event("themechange"));
  });
})();

// --- clock (New York time) ---
(() => {
  const el = $("#clock");
  const fmt = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "America/New_York" });
  const tick = () => (el.textContent = fmt.format(new Date()));
  tick(); setInterval(tick, 1000);
})();

// --- hero title word reveal ---
requestAnimationFrame(() => {
  $$("#heroTitle .w").forEach((w, i) => (w.style.transitionDelay = `${0.15 + i * 0.07}s`));
  setTimeout(() => $("#heroTitle").classList.add("go"), 50);
});

// --- reveal on scroll ---
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 0.06}s`; io.observe(el); });

// --- counters ---
const countIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    countIO.unobserve(e.target);
    const to = +e.target.dataset.to, t0 = performance.now(), dur = 1600;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), ease = 1 - Math.pow(1 - k, 3);
      e.target.textContent = Math.round(to * ease);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}, { threshold: 0.6 });
$$(".count").forEach((c) => countIO.observe(c));

// --- custom cursor ---
if (fine) {
  const dot = $(".cursor-dot"), ring = $(".cursor-ring"), label = $(".cursor-label");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`; });
  (function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) => {
    const t = e.target.closest("[data-cursor], a, button");
    if (t) { ring.classList.add("active"); label.textContent = t.dataset.cursor || ""; }
  });
  document.addEventListener("mouseout", (e) => {
    const t = e.target.closest("[data-cursor], a, button");
    if (t && !t.contains(e.relatedTarget)) ring.classList.remove("active");
  });
  document.addEventListener("mouseleave", () => { dot.style.opacity = ring.style.opacity = 0; });
  document.addEventListener("mouseenter", () => { dot.style.opacity = ring.style.opacity = ""; });

  // magnetic buttons
  $$(".magnetic").forEach((m) => {
    m.addEventListener("mousemove", (e) => {
      const r = m.getBoundingClientRect();
      m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    m.addEventListener("mouseleave", () => { m.style.transition = "transform .5s cubic-bezier(.2,.7,.1,1)"; m.style.transform = ""; setTimeout(() => (m.style.transition = ""), 500); });
  });

  // index hover preview card
  const prev = $("#indexPreview");
  let px = 0, py = 0, tx = 0, ty = 0;
  $$("#projIndex a").forEach((a) => {
    a.addEventListener("mouseenter", () => {
      const p = PROJECTS[+a.dataset.idx];
      prev.innerHTML = `${esc(p.meta)}<b>${esc(p.title)}</b><p>${esc(p.tag)}</p>`;
      prev.classList.add("show");
    });
    a.addEventListener("mouseleave", () => prev.classList.remove("show"));
  });
  addEventListener("mousemove", (e) => { tx = e.clientX + 170; ty = e.clientY; });
  (function follow() {
    px += (tx - px) * 0.12; py += (ty - py) * 0.12;
    prev.style.left = px + "px"; prev.style.top = py + "px";
    requestAnimationFrame(follow);
  })();
}

// --- scroll progress, section tracker, keyboard nav ---
(() => {
  const sections = $$("[data-section]");
  const bar = $(".progress span"), tracker = $(".tracker");
  $("#trk-total").textContent = pad2(sections.length - 1);
  let current = 0;
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    const mid = innerHeight * 0.4;
    let idx = 0;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= mid) idx = i; });
    if (idx !== current) {
      current = idx;
      $("#trk-num").textContent = pad2(idx);
      $("#trk-name").textContent = sections[idx].dataset.section;
    }
    $("#trk-bar").style.width = `${(idx / (sections.length - 1)) * 100}%`;
    tracker.classList.toggle("show", scrollY > innerHeight * 0.6);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea") || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (k !== "j" && k !== "k") return;
    const next = Math.max(0, Math.min(sections.length - 1, current + (k === "j" ? 1 : -1)));
    sections[next].scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  });
})();

// --- contact form: opens the visitor's email app with the message filled in ---
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const subject = `Portfolio message from ${f.get("name")}`;
  const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const btn = e.target.querySelector("button");
  btn.textContent = "OPENING YOUR EMAIL APP…";
  setTimeout(() => (btn.textContent = "SEND MESSAGE →"), 3000);
});

/* ============================================================
   LIVE FORECAST DEMO (Holt's linear trend, like Foreseeer)
   ============================================================ */
(() => {
  const cv = $("#demoCanvas");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const N = 28, H = 10;
  let data = [];
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

  function gen() {
    const base = 40 + Math.random() * 20, slope = (Math.random() - 0.3) * 1.2;
    data = Array.from({ length: N }, (_, i) => {
      const weekend = i % 7 === 5 || i % 7 === 6 ? 12 : 0;
      return Math.max(5, base + slope * i + weekend + (Math.random() - 0.5) * 14);
    });
  }
  function holt(a, b) {
    let L = data[0], T = data[1] - data[0];
    const resid = [];
    for (let i = 1; i < data.length; i++) {
      const f = L + T;
      resid.push(data[i] - f);
      const pL = L;
      L = a * data[i] + (1 - a) * (L + T);
      T = b * (L - pL) + (1 - b) * T;
    }
    const sd = Math.sqrt(resid.reduce((s, r) => s + r * r, 0) / resid.length);
    return Array.from({ length: H }, (_, h) => ({ y: L + T * (h + 1), band: 1.645 * sd * Math.sqrt(1 + h * 0.15) }));
  }
  let W, Hh, dpr;
  function size() {
    dpr = Math.min(2, devicePixelRatio || 1);
    W = cv.clientWidth; Hh = cv.clientHeight;
    cv.width = W * dpr; cv.height = Hh * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  const padL = 8, padR = 8, padT = 14, padB = 18;
  let scaleMax = 120;
  const X = (i) => padL + (i / (N + H - 1)) * (W - padL - padR);
  const Y = (v) => padT + (1 - v / scaleMax) * (Hh - padT - padB);
  const V = (y) => Math.max(0, Math.min(scaleMax, (1 - (y - padT) / (Hh - padT - padB)) * scaleMax));

  function draw() {
    const a = +$("#alpha").value, b = +$("#beta").value;
    const fc = holt(a, b);
    const fg = css("--fg"), muted = css("--muted"), accent = css("--accent"), line = css("--line");
    ctx.clearRect(0, 0, W, Hh);
    // grid
    ctx.strokeStyle = line; ctx.lineWidth = 1;
    for (let g = 0; g <= 4; g++) { const y = padT + g * (Hh - padT - padB) / 4; ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke(); }
    // divider
    ctx.setLineDash([3, 4]); ctx.strokeStyle = muted;
    ctx.beginPath(); ctx.moveTo(X(N - 0.5), padT); ctx.lineTo(X(N - 0.5), Hh - padB); ctx.stroke(); ctx.setLineDash([]);
    // band
    ctx.fillStyle = accent; ctx.globalAlpha = 0.16; ctx.beginPath();
    ctx.moveTo(X(N - 1), Y(data[N - 1]));
    fc.forEach((p, h) => ctx.lineTo(X(N + h), Y(p.y + p.band)));
    for (let h = H - 1; h >= 0; h--) ctx.lineTo(X(N + h), Y(Math.max(0, fc[h].y - fc[h].band)));
    ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1;
    // history bars
    data.forEach((v, i) => {
      ctx.fillStyle = drag === i ? accent : fg; ctx.globalAlpha = drag === i ? 1 : 0.55;
      const bw = Math.max(3, (W - padL - padR) / (N + H) * 0.55);
      ctx.fillRect(X(i) - bw / 2, Y(v), bw, Y(0) - Y(v));
    });
    ctx.globalAlpha = 1;
    // forecast line
    ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.beginPath();
    ctx.moveTo(X(N - 1), Y(data[N - 1]));
    fc.forEach((p, h) => ctx.lineTo(X(N + h), Y(p.y)));
    ctx.stroke();
    fc.forEach((p, h) => { ctx.fillStyle = accent; ctx.beginPath(); ctx.arc(X(N + h), Y(p.y), 2.5, 0, 7); ctx.fill(); });
    // labels
    ctx.fillStyle = muted; ctx.font = "10px Geist Mono, monospace";
    ctx.fillText("PAST 4 WEEKS", padL, Hh - 4);
    ctx.fillText("NEXT 10 DAYS", X(N) , Hh - 4);
    const total = fc.reduce((s, p) => s + p.y, 0);
    $("#demoOut").textContent = `next 10 days ≈ ${Math.round(total)} units`;
  }

  let drag = -1;
  const idxAt = (x) => Math.round(((x - padL) / (W - padL - padR)) * (N + H - 1));
  const pt = (e) => { const r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  cv.addEventListener("pointerdown", (e) => { const p = pt(e); const i = idxAt(p.x); if (i >= 0 && i < N) { drag = i; cv.setPointerCapture(e.pointerId); data[i] = V(p.y); draw(); } });
  cv.addEventListener("pointermove", (e) => { if (drag < 0) return; const p = pt(e); const i = idxAt(p.x); if (i >= 0 && i < N) drag = i; data[drag] = V(p.y); draw(); });
  addEventListener("pointerup", () => { if (drag >= 0) { drag = -1; draw(); } });
  $("#alpha").addEventListener("input", draw);
  $("#beta").addEventListener("input", draw);
  $("#regen").addEventListener("click", () => { gen(); draw(); });
  addEventListener("resize", () => { size(); draw(); });
  addEventListener("themechange", draw);
  gen(); size(); draw();
})();

/* ============================================================
   GITHUB PULSE (public data, fetched live)
   ============================================================ */
(async () => {
  // repos
  try {
    const r = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=12`);
    if (!r.ok) throw 0;
    const repos = (await r.json()).filter((x) => !x.fork && x.size > 10 && x.name.toLowerCase() !== "shoryajain.com");
    $("#pRepos").textContent = repos.length;
    $("#repos").innerHTML = repos.slice(0, 6).map((x) => `
      <li><a href="${x.html_url}" target="_blank" rel="noopener" data-cursor="Open">
        <b>${esc(x.name)}</b>
        <p>${esc(x.description || "No description yet.")}</p>
        <span class="mono">${esc(x.language || "—")} · pushed ${new Date(x.pushed_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
      </a></li>`).join("");
  } catch (e) {
    $("#repos").innerHTML = `<li class="mono" style="color:var(--muted)">Couldn’t reach GitHub right now. <a class="link-arrow" href="https://github.com/${GITHUB_USER}">See repos on GitHub ↗</a></li>`;
  }

  // contribution heatmap
  const hm = $("#heatmap"), tip = $("#heatTip");
  try {
    const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`);
    if (!r.ok) throw 0;
    const j = await r.json();
    const days = j.contributions || [];
    const total = days.reduce((s, d) => s + d.count, 0);
    // streaks
    let longest = 0, run = 0;
    days.forEach((d) => { run = d.count > 0 ? run + 1 : 0; longest = Math.max(longest, run); });
    let cur = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].count > 0) cur++;
      else if (i === days.length - 1) continue; // today may not have commits yet
      else break;
    }
    $("#pTotal").textContent = total.toLocaleString();
    $("#pStreak").textContent = cur + "d";
    $("#pLongest").textContent = longest + "d";
    // pad so first column starts on Sunday
    const first = days.length ? new Date(days[0].date + "T00:00:00").getDay() : 0;
    hm.innerHTML = "<i style='visibility:hidden'></i>".repeat(first) +
      days.map((d) => `<i data-l="${d.level}" data-c="${d.count}" data-d="${d.date}"></i>`).join("");
    hm.addEventListener("mouseover", (e) => {
      const c = e.target.closest("i[data-d]"); if (!c) return;
      const date = new Date(c.dataset.d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      tip.textContent = `${c.dataset.c} contribution${c.dataset.c === "1" ? "" : "s"} · ${date}`;
      const rc = c.getBoundingClientRect();
      tip.style.left = rc.left + rc.width / 2 + "px"; tip.style.top = rc.top + "px"; tip.style.opacity = 1;
    });
    hm.addEventListener("mouseleave", () => (tip.style.opacity = 0));
    // animate cells in
    if (!reduced) {
      const cells = $$("i[data-d]", hm);
      cells.forEach((c) => (c.style.opacity = 0));
      new IntersectionObserver((en, o) => {
        if (!en[0].isIntersecting) return; o.disconnect();
        cells.forEach((c, i) => setTimeout(() => (c.style.opacity = 1), Math.floor(i / 7) * 14));
      }, { threshold: 0.2 }).observe(hm);
    }
  } catch (e) {
    hm.outerHTML = `<p class="mono" style="color:var(--muted)">Contribution graph unavailable right now.</p>`;
  }
})();

/* ============================================================
   CLEAN URLS — in-page links scroll smoothly but never add
   "#section" to the address bar, so it always reads shoryajain.com
   ============================================================ */
(() => {
  const clean = () => history.replaceState(null, "", location.pathname + location.search);
  const go = (id, smooth) => {
    const behavior = smooth && !reduced ? "smooth" : "auto";
    const t = id && id !== "top" ? document.getElementById(id) : null;
    if (t) t.scrollIntoView({ behavior });
    else window.scrollTo({ top: 0, behavior });
  };
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    go(a.getAttribute("href").slice(1), true);
    clean();
  });
  // Old links like shoryajain.com/#work-foreseeer still land in the right place, then tidy the URL.
  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1));
    clean();
    addEventListener("load", () => go(id, false));
  }
})();
