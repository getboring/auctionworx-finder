# Magnolia Pearl Trade Recipe Pack
**Customization Score: 72/100** | **Difficulty: Moderate**

## Overview
Magnolia Pearl Trade is a fashion-focused AuctionWorx site featuring a distinctive boho/vintage aesthetic. Their customizations include custom typography, a warm cream color palette with pink accents, and enhanced product presentation suitable for clothing and accessories.

## What's Included

| File | Description | Difficulty |
|------|-------------|------------|
| `01-boho-color-theme.css` | Warm cream/pink color palette | Easy |
| `02-custom-fonts.css` | Vintage typography with Google Fonts | Moderate |
| `03-product-cards.css` | Fashion-style product cards with badges | Moderate |
| `04-navigation-mega-menu.css` | Multi-column category navigation | Moderate |
| `05-newsletter-popup.js` | First-visit email signup modal | Moderate |
| `06-wishlist-hearts.js` | Heart icons for watchlist | Easy |
| `07-currency-converter.js` | Multi-currency price display | Moderate |

## Quick Start (All-in-One)

Copy and paste this into **CMS > Content > Header Scripts**:

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Playfair+Display:wght@400;700;900&family=Caveat:wght@400;700&display=swap" rel="stylesheet">

<style>
/* === MAGNOLIA PEARL BOHO THEME === */

/* Color Palette */
:root {
    --mp-accent: #e838bf;
    --mp-accent-dark: #d42bad;
    --mp-cream: #fbf7f3;
    --mp-text: #594E4B;
    --mp-text-muted: #92807f;
    --mp-border: #e7e7e7;
}

/* Typography */
body {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 16px;
    line-height: 1.7;
    color: var(--mp-text);
    background-color: var(--mp-cream);
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 700;
}

/* Header */
.header-splash {
    background-color: var(--mp-cream) !important;
    border-bottom: 1px solid var(--mp-border);
}

.navbar-default .navbar-nav > li > a {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 600;
    color: var(--mp-text) !important;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.navbar-default .navbar-nav > li > a:hover {
    color: var(--mp-accent) !important;
}

/* Buttons */
.btn-primary {
    background-color: var(--mp-accent) !important;
    border-color: var(--mp-accent) !important;
}

.btn-primary:hover {
    background-color: var(--mp-accent-dark) !important;
    border-color: var(--mp-accent-dark) !important;
}

/* Links */
a { color: var(--mp-accent); }
a:hover { color: var(--mp-accent-dark); }

/* Product Cards */
.row.gallery-row {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
}

.row.gallery-row > [class*="col-"] {
    width: 100%;
    max-width: 100%;
    padding: 0;
}

.gallery-item img,
.listing-card img {
    height: 320px;
    object-fit: cover;
    object-position: top center;
}

.galleryTitle {
    font-family: 'Playfair Display', Georgia, serif;
    text-align: center;
}

.galleryPrice {
    color: var(--mp-accent);
    text-align: center;
    font-weight: 700;
}

/* Wishlist Hearts */
.wishlist-heart {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.95);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: var(--mp-text-muted);
    z-index: 10;
}

.wishlist-heart:hover,
.wishlist-heart.active {
    color: var(--mp-accent);
}

/* Mobile */
@media (max-width: 575px) {
    .row.gallery-row {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
    .gallery-item img { height: 220px; }
}
</style>

<script>
/* Wishlist Heart Icons */
(function() {
    var HEART = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';

    function addHearts() {
        document.querySelectorAll('.gallery-item, .listing-card').forEach(function(card) {
            if (card.querySelector('.wishlist-heart')) return;
            var btn = document.createElement('button');
            btn.className = 'wishlist-heart';
            btn.innerHTML = HEART;
            btn.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.toggle('active');
            };
            var img = card.querySelector('img');
            if (img && img.parentElement) {
                img.parentElement.style.position = 'relative';
                img.parentElement.appendChild(btn);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', addHearts);
    new MutationObserver(addHearts).observe(document.body, {childList: true, subtree: true});
})();
</script>
```

## Individual Component Installation

### 1. Boho Color Theme
**File:** `01-boho-color-theme.css`

1. Go to **CMS > Content > Header Scripts**
2. Add `<style>` tags and paste the CSS
3. Update your logo if needed (dark logo for cream background)

**Key Colors:**
| Element | Value | Usage |
|---------|-------|-------|
| Primary Accent | `#e838bf` | Links, buttons, prices |
| Background | `#fbf7f3` | Warm cream |
| Text Primary | `#594E4B` | Body text |
| Text Muted | `#92807f` | Secondary text |
| Borders | `#e7e7e7` | Dividers, inputs |

### 2. Custom Fonts
**File:** `02-custom-fonts.css`

1. Add the Google Fonts `<link>` tags to your header
2. Add the CSS after the font links

**Font Stack:**
- **Headings:** Playfair Display (elegant serif)
- **Body:** Cormorant Garamond (refined serif)
- **Accents:** Caveat (handwritten)

### 3. Fashion Product Cards
**File:** `03-product-cards.css`

1. Add CSS to Header Scripts
2. Features taller image aspect ratios (320px) ideal for clothing
3. Includes rotated badge overlay styling

### 4. Navigation Mega Menu
**File:** `04-navigation-mega-menu.css`

1. Add CSS to Header Scripts
2. Creates multi-column dropdown menus
3. Works with existing AuctionWorx navigation structure

### 5. Newsletter Popup
**File:** `05-newsletter-popup.js`

1. Wrap in `<script>` tags and add to Header Scripts
2. Update the form action URL for your email service
3. Customize timing via `CONFIG.POPUP_DELAY` (default: 3 seconds)
4. Uses localStorage to show only to first-time visitors

### 6. Wishlist Heart Icons
**File:** `06-wishlist-hearts.js`

1. Wrap in `<script>` tags and add to Header Scripts
2. Automatically adds heart icons to all product cards
3. Integrates with AuctionWorx watchlist API

### 7. Currency Converter
**File:** `07-currency-converter.js`

1. Wrap in `<script>` tags and add to Header Scripts
2. Adds dropdown for USD, GBP, EUR, AUD, CAD
3. Saves preference to localStorage
4. **Note:** Uses static rates - integrate with live API for production

## Design Philosophy

Magnolia Pearl's aesthetic follows these principles:

1. **Warm & Inviting** - Cream backgrounds instead of stark white
2. **Vintage Typography** - Serif fonts evoke heritage and craftsmanship
3. **Feminine Accents** - Pink highlights without being overwhelming
4. **Fashion-Forward** - Taller product images, clean layouts
5. **Interactive Details** - Heart icons, subtle hover effects

## Customization Tips

### Changing the Accent Color
Replace `#e838bf` throughout with your brand color:
```css
:root {
    --mp-accent: #YOUR_COLOR;
    --mp-accent-dark: #DARKER_SHADE;
}
```

### Alternative Font Pairings
For a different vintage feel:
```css
/* Old-money elegant */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;700&display=swap');

/* Romantic/feminine */
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Great+Vibes&display=swap');
```

### Adjusting Product Image Height
For different product types:
```css
/* Shorter for accessories */
.gallery-item img { height: 240px; }

/* Taller for full outfits */
.gallery-item img { height: 400px; }
```

## Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Credits
Inspired by [magnoliapearltrade.com](https://www.magnoliapearltrade.com) - Vintage-inspired fashion auctions.
