# Cursor Animation Portfolio

A one-page portfolio that starts empty. A swarm of robot cursors builds it live: each one flies to a block, drags out a blue wireframe, then the text types in and the content pops in, section by section as you scroll.

**This is not a browser extension.** The cursors are part of the website's own code, so it works in any browser, phones included, with nothing to install.

## Run

```bash
npm install
npm run dev        # http://localhost:3210/?agents=on
```

## Record a reel

1. Open `http://localhost:3210/?agents=on` in Chrome, full screen (F11), 100% zoom.
2. Start recording, then click **Tour** in the bottom dock (or press `T`).
3. The page reloads empty, the bots build the hero, then it scrolls by itself while each section gets built. Wheel, arrow keys or Esc stop it.

Keys: `T` tour · `A` agents on/off · `P` pause.

If your system has reduced motion turned on, the site shows everything instantly. Add `?agents=on` to the URL or use the Tour button.

## How the build animation works

Everything lives in [`components/Builder.tsx`](components/Builder.tsx): one `requestAnimationFrame` loop plus an `IntersectionObserver` queue.

- Any element with `data-build` stays hidden until a bot builds it.
- `type` types its text in, `pop` scales it in, `wipe` reveals it left to right.
- Nested blocks wait for their parent. At most 6 bots work at once, in reading order.

## Make it yours

- Text: `lib/content.ts`
- Photo: replace `public/jai-bw.png` with your own transparent PNG. `scripts/portrait2.py` cuts out a photo with rembg.

## Deploy

Push to GitHub and import the repo into Vercel. No environment variables needed.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · lucide-react
