# Repository Guidelines

## Project Structure & Module Organization

This repository is a static landing page for Kaev & Co. The main page lives in `index.html`, all styling is in `style.css`, and visual assets are stored under `images/`. The `CNAME` file configures the custom domain for static hosting. There is no JavaScript bundle, build system, or package manifest.

## Build, Test, and Development Commands

No dependency installation is required. Open `index.html` directly in a browser for a quick check, or serve the folder locally:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. For a lightweight markup sanity check, run:

```sh
npx html-validate index.html
```

Use browser developer tools to verify responsive layout, image loading, links, and console errors.

## Coding Style & Naming Conventions

Use 4-space indentation in HTML and CSS to match the existing files. Keep semantic section structure in `index.html`, with section IDs matching navigation anchors such as `#why-us`, `#services`, and `#our-work`. Use lowercase, hyphenated class names, for example `.service-card` or `.footer-content`.

Keep CSS grouped by page section. Avoid inline styles for new work; move new rules into `style.css`. Preserve existing brand colors, typography, and image-driven visual style unless the change is explicitly a redesign.

## Testing Guidelines

There is no automated test suite yet. Manually test changes in desktop and mobile viewport sizes. Confirm that navigation anchors scroll correctly, WhatsApp CTA links open in a new tab, images resolve from `images/`, and the page does not overflow horizontally. When adding scripts or a build step, include a matching test command here.

## Commit & Pull Request Guidelines

Recent commits use short summaries such as `Update index.html` and `add active class to navbar`. Follow that style: keep the subject concise and describe the changed area. Examples: `Update service cards` or `Fix mobile header spacing`.

Pull requests should include a brief description, visual or content changes, screenshots for layout changes, and manual testing performed. Link related issues when available and call out changes to `CNAME` or external links.

## Security & Configuration Tips

Do not commit private credentials, analytics secrets, or unpublished client assets. Check external links before release, especially `wa.me` CTAs and font imports. Keep filenames referenced by HTML and CSS exactly matched, including spaces and capitalization, because static hosting is case-sensitive.
