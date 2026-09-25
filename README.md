Markdown
# Apeiron Solutions - Corporate Website

A world-class, premium, mobile-first corporate web experience for Apeiron Solutions. Designed with an editorial, architectural, and minimal layout representing physical brand execution. Built strictly with HTML5, CSS3, and Vanilla JavaScript.

## Technology Used
- Semantic HTML5
- CSS3 (Custom Variables, CSS Grid, Flexbox, clamp(), mobile-first media queries)
- Vanilla JavaScript (IntersectionObserver for scroll reveals, accessible DOM manipulation)
- **Zero Frameworks** (No React, Bootstrap, Tailwind, GSAP, etc.)

## File Structure
apeiron-solutions/
├── index.html
├── about.html
├── services.html
├── methodology.html
├── work.html
├── contact.html
├── privacy.html
├── terms.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── navigation.js
│   └── animations.js
├── assets/
│   ├── images/
│   ├── logo/
│   └── icons/
└── README.md


## How to Run
1. Unzip the project folder.
2. Open `index.html` directly in any modern web browser.
3. No build tools, node_modules, or server setup required for the frontend.

## Customization Guide
- **Colors:** Edit the CSS variables in `:root` inside `css/style.css` (e.g., `--accent`, `--bg`).
- **Typography:** Change `--font-base` in `style.css`. Responsive scaling uses `clamp()` automatically.
- **Images:** Replace placeholder `.webp` files in `assets/images/` keeping identical file names, or update image paths in the HTML directly. Ensure new images are optimized for web (WebP/AVIF recommended).
- **Backend Connection:** Open `js/main.js` and locate the form validation logic. Connect your fetch POST request endpoint where indicated by the comment `// Demo success state - connect to real endpoint here`.

## Performance & Accessibility
- Native lazy loading applied to below-the-fold images.
- ARIA attributes included for screen reader accessibility (especially mobile menu).
- Uses `@media (prefers-reduced-motion: reduce)` for accessible transitions.