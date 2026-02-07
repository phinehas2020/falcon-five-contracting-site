# Napkin

## Corrections
| Date | Source | What Went Wrong | What To Do Instead |
|------|--------|----------------|-------------------|

## User Preferences
- Design must be impeccable, non-generic, no "AI slop"
- Client is a 35yo braggadocious contractor — personality should come through in design
- Over-the-top wow factor required
- Use skills from .claude/skills when helpful but don't get stuck

## Patterns That Work
- Dark theme (near-black #0a0a0a) with warm gold accent (#d4a853) — distinctive for a contractor site
- Full-bleed sections with per-section containers (max-w-7xl) instead of global layout container
- Bebas Neue + DM Sans font pairing — industrial display + clean body
- Stacked service lists with numbered items instead of uniform card grids
- `gap-px bg-rule` grid pattern for editorial-style cell layouts
- Marquee scrolling strip for city names using CSS translateX animation
- Gold square dots (size-1.5 bg-gold) as custom list markers
- `border-rule` (white/8%) for subtle section separation on dark backgrounds
- Personality-driven copy that's confident without being cringe

## Patterns That Don't Work
- Rounded white cards on slate-50 backgrounds = AI slop
- Uniform grids of identical cards = generic
- Purple-to-blue gradients = overused AI pattern
- Generic "Why choose us" icon+title+desc cards
- SEO-scaffold copy visible to users ("topical authority hub", "intent-focused landing page")
- Source Sans 3 body font = too generic for premium feel

## Domain Notes
- Next.js 16 + React 19 + Tailwind v4 (PostCSS, inline theme)
- Business: Falcon Five Contracting — emergency plumbing & AC repair, Waco TX area
- Layout `<main>` has NO container — each page/section manages its own max-w-7xl
- Custom Tailwind theme colors via @theme inline: gold, gold-dim, gold-bright, surface, surface-raised, surface-overlay, rule
- Fonts: Bebas Neue (--font-heading / font-display) + DM Sans (--font-body / font-sans)
- OG image updated to match dark+gold theme
- All 34 routes build cleanly with zero TS errors
