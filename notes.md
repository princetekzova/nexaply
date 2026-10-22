# Nexaply Enterprises website

Version 0.3 · October 2026

## Files
- index.html — the page
- css/style.css — styles (colour tokens at the top; light and dark themes)
- js/main.js — truckload estimator, copy buttons, enquiry form to WhatsApp
- assets/logo-mark.svg, favicon.svg — layered-ply logo mark
- assets/hero-loading.svg — hero illustration

## Before going live
1. Replace phone numbers: search for `+91 9XXXX XXXXX` (display) and `919XXXXXXXXX` (WhatsApp links, 3 places in index.html and 1 in js/main.js).
2. Replace emails sales@nexaply.in / accounts@nexaply.in once the domain mailboxes exist.
3. Have Thomas confirm the price table (section #prices), the estimator mid-prices in js/main.js (`mid` object) and the freight table (#delivery).
4. Optional: add GSTIN to the About note once issued.

## Hosting
Upload the whole folder to any static host (Hostinger, GoDaddy, Netlify, Cloudflare Pages, GitHub Pages). No build step, no server code.
Point nexaply.in at the host; the site is a single page with anchors (#products, #prices, …).

## Editing prices
Price table: index.html, section id="prices". Estimator: js/main.js, `mid` = mid-point ₹/sq ft per grade and thickness.

## v0.8 – product pages (Oct 2026)
- New folder products/: index.html (all products + grade comparison) and one page per product:
  mr-plywood, bwr-plywood, marine-plywood, block-board, flush-doors, shuttering-plywood,
  commercial-packing-plywood, rubberwood-boards. Each has specs, sizes, thickness/truckload table,
  uses, loading checks, FAQ, quote buttons and links to other products.
- Photos in assets/photos/ are freely licensed Wikimedia Commons images (CC0 / CC BY / CC BY-SA);
  each shows its credit under the photo, and credits.html lists author, licence and source.
  Keep the credits if photos are reused. Replace with your own mill/stock photos when available.
- Pages are generated from ../gen_products.py + ../photos.json (edit data there, re-run).
- Home page product cards now have photos and "Full specifications" links; footer links to product pages.
