# Mojitos Bar 🍹

Animated cocktail bar website with **GSAP scroll storytelling** — built with React, TypeScript, Vite and Tailwind CSS.

**🔴 Live demo:** [mojitos-bar.vercel.app](https://mojitos-bar.vercel.app)

## ✨ What it does

A single-page experience where the story unfolds as you scroll: pinned sections, scroll-driven timelines, parallax imagery and text reveals that guide the visitor through the bar's cocktails and atmosphere.

## 🧠 Technical decisions

- **GSAP + ScrollTrigger for the narrative:** scroll-linked timelines with pinned sections keep the animation in sync with user intent instead of playing on a fixed clock. Timelines are scoped per section so they stay independent and easy to tune.
- **Cleanup on unmount:** ScrollTrigger instances are killed when components unmount to avoid memory leaks and ghost triggers — a common pitfall with GSAP in React.
- **Vite over CRA/Next:** this is a pure client-side animation showcase with no server data, so Vite gives instant HMR while iterating on timing-sensitive animations.
- **Content as data:** cocktails and section copy live in `constants/`, keeping animation logic separate from content and making the site easy to extend.
- **Responsive motion:** animations adapt via GSAP's `matchMedia` so the experience stays smooth on mobile instead of just shrinking the desktop version.

## 🛠️ Stack

React · TypeScript · Vite · Tailwind CSS · GSAP (ScrollTrigger)

## 🚀 Run locally

```bash
git clone https://github.com/JairoGlez43/Mojitos-Bar.git
cd Mojitos-Bar
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## 🗺️ Roadmap

- [ ] Component tests with Vitest + React Testing Library
- [ ] Reduced-motion support via `prefers-reduced-motion`

## 👤 Author

**Jairo González** — Frontend Developer (React · Next.js · TypeScript)

[Portfolio](https://jairo-dev-portafolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/jairo-gonz%C3%A1lez-dev) · jairo.front.dev@gmail.com
