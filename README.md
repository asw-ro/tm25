# Teambuilding 2025 · Timișoara

Acest repository conține o pagină statică HTML/CSS/JS creată pentru prezentarea programului Team Building-ului ASW din Timișoara, 17-19 octombrie 2025. Design-ul este inspirat de identitatea vizuală Microsoft Copilot, cu accent pe tehnologie, colaborare și experiențe comune.

## Ce include

- **Programul complet** pentru vineri-duminică, cu timeline elegant și clar.
- **Secțiune dedicată prezentărilor tehnice**, inclusiv indicator dinamic pentru actualizări.
- **Informații logistice** (locație, gazdă, persoană de contact) cu link-uri către Google Maps și site-urile oficiale.
- **Elemente moderne de branding**: favicon, manifest PWA, card social pentru distribuire pe rețele, gradient Copilot.
- **Countdown dinamic** în JavaScript, care arată câte zile mai sunt până la eveniment.

## Cum se folosește

1. Deschide fișierul [`index.html`](./index.html) într-un browser modern.
2. Pentru distribuirea online, publică folderul pe un server HTTP sau prin GitHub Pages.
3. Dacă actualizezi datele (program, prezentări, locații), modifică direct conținutul HTML.
4. Poți ajusta paleta de culori și branding-ul din secțiunea `<style>` pentru a reflecta alte teme.

## Utilizare internă

Acest proiect poate fi folosit ca **template pentru viitoare teambuilding-uri** sau alte evenimente interne Soft Net Consulting / Alfa Software. Structura modulară și stilurile moderne permit adaptări rapide: schimbă datele, imaginile și culorile pentru noul context și păstrează experiența coerentă pentru echipă.

## Structura principală

```
.
├── index.html   # Pagina principală (HTML + CSS + JS inline)
├── assets/
│   ├── favicon.svg          # Iconiță browser / PWA
│   ├── site.webmanifest     # Manifest pentru instalare pe dispozitive mobile
│   └── social-card.svg      # Card social pentru partajare
└── README.md                # Acest fișier
```
