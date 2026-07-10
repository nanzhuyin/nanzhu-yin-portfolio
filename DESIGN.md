# Cinematic Intelligence — Design Contract

## 1. Intent

This portfolio presents YIN Nanzhu as a research engineer working across AI-assisted smart-contract security, LLM agents, RAG systems, data intelligence, and Web3. The experience should feel like a precise technology documentary: calm, evidence-led, editorial, and in motion.

The system must preserve the real content, three locales, dark/light themes, static export, GitHub Pages base path, CV download, project filters and disclosure, links, and reduced-motion support.

## 2. Open Design sources and synthesis

Three installed Open Design systems were compared:

1. **After Hours Editorial** — kept: title-card hierarchy, chapter metadata, restrained grain, staged reveals. Rejected: magenta, cursor glow, fashion styling, timed slide wipes.
2. **Field Notes Editorial** — kept: paper-like light theme, serif/sans hierarchy, honest unknown states, readable data storytelling. Rejected: pastel card collection and dashboard views.
3. **Swiss Creative Mode** — kept as the structural base: high-contrast typography, disciplined grid, theme parity, strong labels, keyboard-safe interactions. Rejected: multicolour palette cycling, hard brutalist shadows, presentation controls.

The resulting system is original to this project. It uses Swiss precision as the frame, an editorial research log as the content model, and cinematic chapter pacing as the motion language.

## 3. Colour

All colours are semantic CSS variables in `app/globals.css`.

### Dark — projection room

- Canvas: warm off-black `#10100f`
- Raised surface: `#181816`
- Secondary surface: `#20201d`
- Primary text: warm white `#f0ede4`
- Muted text: mineral grey `#aaa69d`
- Hairline: warm white at 14%
- Accent: restrained terracotta `#cf704d`

### Light — archival paper

- Canvas: ivory paper `#efebe1`
- Raised surface: `#f8f5ed`
- Secondary surface: `#e7e1d5`
- Primary text: carbon `#1d1d1a`
- Muted text: `#68655f`
- Hairline: carbon at 16%
- Accent: deep oxide `#a4472f`

There is one accent hue. Status is expressed through wording, weight, borders, and density rather than additional semantic colours. No neon, glass, large blue-purple gradients, or glow shadows.

## 4. Typography

- Display: local editorial serif stack — Iowan Old Style, Baskerville, Songti SC / STSong, serif.
- Body: Avenir Next, PingFang SC, Noto Sans CJK, system sans.
- Technical metadata: SFMono, Cascadia Code, JetBrains Mono, Menlo.
- Display scale: `clamp(4.5rem, 11vw, 10rem)`, compact leading, slight negative tracking.
- Section titles: `clamp(2.4rem, 5vw, 5.5rem)`.
- Body: 16–18px, 1.75–1.9 leading, maximum readable measure about 66 characters.
- Metadata: 10–12px, positive tracking, tabular figures.
- Chinese and English headings use balanced wrapping; paragraphs use pretty wrapping.

## 5. Grid and spacing

- Container: `min(100% - responsive gutters, 88rem)`.
- Desktop: 12-column implied grid. Hero uses 7/5; editorial splits use 4/8; project layouts use feature span plus supporting cards.
- Gutters: 16px at 320–430, 24px at tablet, 40px desktop.
- Section rhythm: 96–176px, varied by narrative role rather than identical bands.
- Base spacing unit: 4px. Primary rhythm: 8, 12, 16, 24, 32, 48, 64, 96, 144.
- Radii: 0–4px for labels and controls; 8px for major frames. Avoid pill shapes except compact segmented controls.

## 6. Components

- **Header:** slim fixed masthead, edition mark, current-section indicator, grouped locale/theme controls.
- **Hero:** opening title card with identity, current research, actions, and a research ledger; no portrait-template composition.
- **SectionHeader:** chapter number + eyebrow in the grid, oversized editorial title, optional description.
- **Panel:** quiet warm surface and single hairline. Elevation is rare and tinted.
- **ProjectCard:** cinematic “research still” layout. The first project is featured; supporting cards and compact records vary composition while preserving the same metadata grammar.
- **PublicationItem:** numbered citation row, not a generic card.
- **TimelineItem:** date rail, institution/company, role, evidence list.
- **Tag:** square technical label with low visual weight.
- **Buttons:** primary accent, secondary quiet surface, tertiary editorial link. Minimum 44px target.
- **Footer:** final frame with identity, navigation return, source note, and copyright.

## 7. Motion

Motion tokens live in `lib/motion.ts`.

- Fast interaction: 180ms
- Standard reveal: 420ms
- Hero / scene reveal: 680ms
- Easing: `[0.22, 1, 0.36, 1]`
- Reveal distance: 16–24px
- Stagger: 50–80ms

Content reveals once when it enters the viewport. Titles use a short mask/translate reveal; cards use opacity plus small vertical movement; hover uses at most 2–4px translation. Expand/collapse uses opacity and height-safe layout animation. No perpetual decorative movement when reduced motion is requested. `prefers-reduced-motion` disables smooth scrolling, repeated SVG animation, and nonessential transforms.

## 8. Responsive rules

- 320–430: the Hero becomes a compact opening sequence; primary CTA is prominent; metadata stacks; project records use one column; mobile controls retain 44px targets.
- 768–1024: two-column content only where line length remains readable; navigation may collapse before it becomes crowded.
- 1280–1440: full editorial grid.
- 1920+: content remains capped at 88rem with deliberate outer negative space.
- No horizontal scrolling. Long paper titles and URLs use safe wrapping. Fixed elements must not obscure anchor targets.

## 9. Accessibility and anti-patterns

- WCAG AA-oriented contrast, semantic landmarks, ordered headings, skip link, visible focus, labelled icon controls, correct `lang`, `aria-current`, `aria-expanded` + `aria-controls`, and meaningful external-link indication.
- Do not invent metrics, roles, links, publications, awards, or imagery.
- Do not add stock photos, movie stills, WebGL, particles, cursor tracking, autoplay video, oversized font downloads, or server-only behaviour.
- Do not use cyan neon, cyberpunk styling, glassmorphism, equal-card grids for every section, or repeated `fadeInUp` on every element.

## 10. Narrative order

1. Opening frame / identity
2. Current research focus
3. Selected projects and research evidence
4. Publications and submissions
5. Professional field work
6. Academic journey
7. Profile interlude
8. Technical capabilities
9. Contact / closing frame

Each chapter should change composition while retaining the same type, line, spacing, and metadata system.
