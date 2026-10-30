// Selectorul de ediții, comun tuturor anilor. Fiecare pagină de an îl include cu
// <script src="../years.js" data-year="YYYY"></script> chiar înainte de </body>.
// La o ediție nouă: adaugă anul PRIMUL în listă și mută redirect-ul din /index.html.
(function () {
  const YEARS = [
    { year: "2026", place: "Theodora Golf Club" },
    { year: "2025", place: "Timișoara" },
  ];

  const current = document.currentScript?.dataset.year;
  const host = document.querySelector("main") || document.body;
  if (!host) return;

  // Local (file://) nu există index implicit pe folder, deci cerem explicit index.html
  const suffix = location.protocol === "file:" ? "index.html" : "";

  const style = document.createElement("style");
  style.textContent = `
    .year-switch {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0.75rem;
    }
    .year-switch nav {
      display: inline-flex;
      gap: 0.25rem;
      padding: 0.25rem;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(12px);
    }
    .year-switch a {
      padding: 0.3rem 0.85rem;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent, #1c7c46);
      text-decoration: none;
      transition: background 140ms ease;
    }
    .year-switch a:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    .year-switch a[aria-current="page"] {
      background: var(--accent, #1c7c46);
      color: #ffffff;
    }
  `;
  document.head.appendChild(style);

  const wrap = document.createElement("div");
  wrap.className = "year-switch";
  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Ediții Team Building");

  YEARS.forEach(({ year, place }) => {
    const a = document.createElement("a");
    a.href = `../${year}/${suffix}`;
    a.textContent = year;
    a.title = `Team Building ${year} · ${place}`;
    if (year === current) a.setAttribute("aria-current", "page");
    nav.appendChild(a);
  });

  wrap.appendChild(nav);
  host.prepend(wrap);
})();
