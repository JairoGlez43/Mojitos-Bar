# Haze 🍹

Animated cocktail bar website with **GSAP scroll storytelling** — built with React, TypeScript, Vite and Tailwind CSS.

**🔴 Live demo:** [mojitos-bar.vercel.app](https://mojitos-bar.vercel.app)

## ✨ What it does

A single-page experience where the story unfolds as you scroll: pinned sections, scroll-driven timelines, parallax imagery and text reveals that guide the visitor through the bar's cocktails and atmosphere.

Six sections, top to bottom:

| Section | What happens |
| --- | --- |
| **Hero** | Character-by-character title reveal, parallax leaves, and a scroll-scrubbed video — scroll position drives `video.currentTime`. |
| **Cocktails** | Scroll-scrubbed parallax on the framing leaves over the cocktail and mocktail lists. |
| **About** | Word-by-word heading reveal, then a staggered fade-in of the two image grids. |
| **Art** | Pinned section where copy fades out and a CSS-masked image expands to reveal the closing statement. |
| **Menu** | Interactive cocktail slider — tab list plus prev/next arrows, with the drink and its recipe animating on every change. |
| **Contact** | Footer with address, hours, socials and the closing colophon. |

## 🧠 Technical decisions

- **GSAP + ScrollTrigger for the narrative:** scroll-linked timelines with pinned sections keep the animation in sync with user intent instead of playing on a fixed clock. Timelines are scoped per section so they stay independent and easy to tune.
- **`useGSAP` for lifecycle safety:** every animation is created inside `useGSAP`, which reverts its tweens and kills the ScrollTriggers created in its scope on unmount — the usual GSAP-in-React memory-leak and ghost-trigger pitfall.
- **Vite over CRA/Next:** this is a pure client-side animation showcase with no server data, so Vite gives instant HMR while iterating on timing-sensitive animations.
- **Content as data:** cocktails, section copy, opening hours and store info live in `constants/`, keeping animation logic separate from content and making the site easy to extend.
- **Breakpoint-aware motion:** `react-responsive`'s `useMediaQuery` feeds different ScrollTrigger `start`/`end` values on mobile, so the pinned Hero and Art sections get their own timing instead of just shrinking the desktop version.
- **Styling in one place:** Tailwind v4 `@theme` tokens and `@utility` definitions live in `src/index.css`, with each section's rules nested under its own `#id` — component files stay markup + animation only.

## 🛠️ Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · GSAP (ScrollTrigger, SplitText) · react-responsive

## 🚀 Run locally

```bash
git clone https://github.com/JairoGlez43/Mojitos-Bar.git
cd Mojitos-Bar
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

Other scripts: `pnpm build` (typecheck + production build), `pnpm preview`, `pnpm lint`.

## 🗺️ Roadmap

- [ ] Component tests with Vitest + React Testing Library
- [ ] Reduced-motion support via `prefers-reduced-motion`
- [ ] Real social links and a working reservation form

## 👤 Author

**Jairo González** — Frontend Developer (React · Next.js · TypeScript)

[Portfolio](https://jairo-dev-portafolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/jairo-gonz%C3%A1lez-dev) · jairo.front.dev@gmail.com
