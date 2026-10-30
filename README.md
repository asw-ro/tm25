# Team Building ASiS · teambuilding.asis.ro

Site static (HTML/CSS/JS, fără build), publicat prin GitHub Pages pe `teambuilding.asis.ro`. Fiecare ediție anuală are propriul folder, păstrat neschimbat după eveniment. Intrarea pe site trimite automat la ultima ediție, iar din orice pagină se poate trece la alt an din selectorul din colțul de sus.

## Ediții

| An | Locație | Pagina |
|---|---|---|
| 2026 | Theodora Golf Club, lângă Alba Iulia · 2–4 octombrie | [`2026/`](./2026/index.html) |
| 2025 | Timișoara, Hotel Serenity · 17–19 octombrie | [`2025/`](./2025/index.html) |

## Structura

```
.
├── index.html         # Redirect către ultima ediție (+ meta OG pentru partajare)
├── years.js           # Lista edițiilor și selectorul de an, comun tuturor paginilor
├── 2026/
│   ├── index.html     # Pagina ediției (HTML + CSS + JS inline)
│   └── assets/        # favicon, manifest, social card, invitație .ics
├── 2025/
│   ├── index.html
│   └── assets/
├── prezentari/        # Prezentările ediției 2026 (rămân aici: URL-urile sunt în slide-uri și coduri QR)
├── program.md         # Ciorna programului 2026
└── CNAME
```

## Ediție nouă (ex. 2027)

1. Copiază folderul ultimului an în `2027/` și actualizează conținutul din `2027/index.html` și `2027/assets/` (titluri, date, URL-uri `og:*` către `/2027/`, social card, `.ics`).
2. În [`years.js`](./years.js), adaugă `{ year: "2027", place: "…" }` **primul** în listă. Selectorul apare automat în toate paginile.
3. În [`index.html`](./index.html) de la rădăcină, înlocuiește `2026` cu `2027` (redirect, canonical, favicon, meta OG).
4. Prezentările noii ediții merg în `2027/prezentari/`.
5. Lasă folderele anilor anteriori neatinse.

## Local

Deschide `index.html` (sau direct `2026/index.html`) în browser. Pentru URL-uri identice cu cele de pe site, pornește un server în rădăcina repo-ului, de ex. `python -m http.server`.
