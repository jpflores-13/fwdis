# from where does it STEM? — fwdis.org

Storytelling for the next generation of scientists.

A podcast hosted by **JP Flores** capturing stories of resilience and scientific journeys from diverse, underrepresented scientists — getting down to the roots to ask: *from where does it STEM?*

**Live site:** https://fwdis.org  
**Listen:** [Spotify](https://podcasters.spotify.com/pod/show/fromwheredoesitstem) · [Apple Podcasts](https://podcasts.apple.com/us/podcast/from-where-does-it-stem/id1528193343)  
**Host:** [jpflores.rbind.io](https://jpflores.rbind.io)

---

## Tech

Static single-page site — no build step. HTML + CSS + React (loaded via CDN) + Babel in-browser. Deployed on Netlify.

- `index.html` — the whole app
- `episodes.js` — all episode data (the only file you'll edit regularly)
- `styles.css` — brand design system entry point (imports from `tokens/`)
- `_ds_bundle.js` — pre-bundled design system components (TerminalWindow, EpisodeCard, Button, Badge, Avatar, Input)
- `assets/` — cover art and logo
- `tokens/` — CSS custom properties for colors, typography, spacing, and fonts

---

## Adding a new episode

Open `episodes.js` and add an object to the **top** of the `EPISODES` array (episodes are displayed newest first):

```js
{
  number: 61,
  slug: "ep61-guest-name",
  title: "Short Theme Title",
  guest: "Guest Name",
  topic: "Faculty",           // display label — see categories below
  categories: ["faculty"],    // used for filtering
  blurb: "One or two sentences describing the episode.",
  date: "2025-06-01",
  spotifyEmbed: "https://open.spotify.com/embed/episode/SPOTIFY_ID?utm_source=generator&theme=0",
},
```

To get the Spotify embed URL: open the episode in Spotify → Share → Embed → copy the `src` value from the iframe code.

### Available categories

`faculty` · `graduate-student` · `postdoc` · `undergraduates` · `science-communication` · `science-policy` · `science-writing` · `government-scientist` · `industry` · `data-science` · `medical-doctor` · `historian` · `community-college` · `patient-advocate`

---

## Local preview

No install needed — just open `index.html` in a browser. If fonts or the bundle don't load due to CORS, run a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## Deploying

The site auto-deploys on Netlify when you push to `main`. Just commit your changes and push — nothing else to do.

---

## Design system

The visual identity lives in the brand kit (`From Where Does It STEM — Design System`). Colors, typography, and spacing are all CSS custom properties — never hard-code hex values. Core palette:

| Token | Value | Use |
|---|---|---|
| `--marigold` | `#FBA850` | page background, primary accent |
| `--ink` | `#0F0E0C` | text, borders, buttons |
| `--cream` | `#FBEFD8` | card and grid backgrounds |
| `--font-marker` | Permanent Marker | display headings |
| `--font-mono` | Space Mono | labels, badges, nav |
| `--font-body` | Atkinson Hyperlegible | body text |
