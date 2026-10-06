# Café Lindenhof (Astro-Theme-Nachbau) — agent notes

Zweck/Tier: `docs/sdd/tier.md` (LEARNING, Lite — Selbsst-Check, kein PR-Zwang).
Design-Grundlage: `docs/sdd/design.md` (extracted Brief, APPROVED 2026-10-06) + Abschnitt 10 Implementation record.

## Stack
Astro 7 + Tailwind 4 (Vite-Plugin) + `@lucide/astro` + `simple-icons` + Fontsource (Meddon, Open Sans). Keine React-Inseln, kein Backend — Formulare sind Demo-only.

## Befehle
- `npm run dev` (läuft oft schon auf `:4321`, Log `/tmp/opencode/005-dev.log`)
- `npm run check` (astro check) und `npm run build` müssen grün sein, bevor etwas als fertig gilt.

## Regeln in diesem Repo
- Design-Tokens/Regeln: `src/styles/global.css` (`@theme`, `--accent` pro Seite via `body[data-accent]`).
- Eigene CSS-Komponenten MÜSSEN in `@layer components { }` liegen (Sonst schlagen sie Tailwind-Utilities, z. B. `max-w-[820px]`). Umgekehrt: Regeln in `@layer` verlieren gegen unlayered Rules — Korrekturen an `.eyebrow`/`.h-display` (in `global.css` unlayered) in die Scoped-`<style>` des Komponents setzen, nicht in `menu.css`/`components.css` (sonst greifen sie nie, z. B. Newsletter-Weiß).
- Lucide-Props sind `strokeWidth` → in Astro als `stroke-width`. Brand-Icons (Facebook/Instagram/X/Youtube) fehlen in Lucide → `simple-icons` (`icon.path`).
- Dateien ≤300, Komponenten ≤200 Zeilen (`chrome.css`/`components.css` in `menu.css`/`motion.css` gesplittet).
- Fotos = Unsplash-Platzhalter aus `src/lib/images.ts` (`photo(i, w)`), Marken „Café Lindenhof" erfunden — nirgends als Kundenprojekt verkaufen. Lizenz: Unsplash License (frei, keine Attributionspflicht, nicht weiterverkaufen/kein Konkurrenzprodukt); Herkunft aus dem Bergblick-Projekt, nicht pro Datei geprüft.
