# BUILD LOG — solraybob.com

**Date:** 2026-03-23
**Status:** LIVE

---

## Deployment

- **Vercel URL:** https://solraybob-website-qknidk8vp-solraybobs-projects.vercel.app
- **GitHub repo:** https://github.com/solraybob/solraybob-website
- **Branch:** main
- **Framework:** Next.js 14 (App Router, static export)
- **Build:** clean, 0 errors, 0 warnings

---

## What was built

A full Next.js 14 + TypeScript + Tailwind site. Eight sections:

| Section | Component | Notes |
|---|---|---|
| Nav | `Nav.tsx` | Fixed, logo + wordmark + mobile menu. Client component. |
| Hero | `Hero.tsx` | Full-height, Cormorant Garamond headline, two CTAs |
| The Solar Canon | `Canon.tsx` | 4 book cards with amber Read buttons |
| Three Pillars | `Pillars.tsx` | Light, Body, Discipline — three columns |
| Agent Bobby teaser | `Bobby.tsx` | Email capture form. Client component. |
| Tattoo Removal | `TattooRemoval.tsx` | The Great Removal, links to @solraybob on X |
| Solray AI cross-sell | `SolrayAI.tsx` | Dark section, links to solray.ai |
| Footer | `Footer.tsx` | Logo, X / Instagram / Solray AI links |

---

## Font setup

Fonts loaded via `next/font/google` (self-hosted at build time, no external requests):

- **Cormorant Garamond** — weights 300, 400, 500, 600, 700, italic variants. CSS var: `--font-cormorant`
- **Inter** — weights 300, 400, 500, 600. CSS var: `--font-inter`

Tailwind's `font-serif` and `font-sans` consume these via CSS variables. Same fonts and weights as solray.ai for brand consistency.

---

## Color palette

| Name | Hex |
|---|---|
| Cream background | `#faf6f0` |
| Warm cream | `#fff8f0` |
| Amber sun | `#e8821a` |
| Deep gold | `#c9681a` |
| Dark brown text | `#1a1008` |
| Mid brown text | `#7a6a5a` |
| Border | `#e8d5b8` |

---

## Technical decisions

- All hover states done in pure CSS classes (`.btn-amber`, `.nav-link`, etc.) — no `onMouseEnter` event handlers in RSCs.
- `"use client"` only where truly needed: `Nav.tsx` (mobile menu state), `Bobby.tsx` (email form state).
- Logo served from `/public/solraybob-logo.jpg`, rendered via `next/image`.
- No external UI libraries. No em dashes anywhere.

---

## Next steps

- Point `solraybob.com` domain to Vercel (DNS CNAME to `cname.vercel-dns.com`)
- Add Vercel domain alias once DNS is configured
- Wire up email capture (Bobby waitlist) to a real provider (Resend, ConvertKit, etc.)
- Expand Canon section with all 14 books from Notion
- Add Clothing and Tools sections
