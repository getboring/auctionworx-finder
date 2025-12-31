# Parlogram Auctions Recipe Pack
**Customization Score: 66/100** | **Difficulty: Moderate**

## Overview
[Parlogram Auctions](https://parlogramauctions.com) is a UK-based Beatles and vinyl record specialist operating from Austria. They've transformed the default AuctionWorx dark theme into a clean, collector-focused platform optimized for high-end vinyl sales. Key features include multi-currency support (13+ currencies), detailed collector grading, and music-specific category organization.

## What's Included

| File | Description | Difficulty |
|------|-------------|------------|
| `01-vinyl-light-theme.css` | White header and light theme | Easy |
| `02-multi-currency-display.css` | GBP/EUR/USD price styling | Moderate |
| `03-vinyl-card-styling.css` | Record listing cards with truncation | Easy |
| `04-currency-converter.js` | 13-currency conversion logic | Moderate |
| `05-collector-grade-badges.css` | Goldmine grading badges (NM, VG+, etc.) | Easy |
| `06-music-categories.css` | Artist/format category navigation | Moderate |
| `07-view-toggle.js` | Grid/list view persistence | Easy |
| `08-sort-filter-enhancement.js` | Auto-submit on filter change | Easy |

## Quick Start (All-in-One)

Copy and paste this into **CMS > Content > Header Scripts**:

```html
<style>
/* === PARLOGRAM VINYL AUCTION THEME === */

/* Light theme - white header */
.header-splash { background-color: #ffffff !important; }
.navbar-default { border-color: rgba(0,0,0,0.2); border-bottom: 1px solid rgba(0,0,0,0.1); }
.navbar-default .navbar-nav > li > a { color: rgba(0,0,0,0.6); }
.navbar-default .navbar-nav > li > a:hover { color: rgba(0,0,0,0.9); background: rgba(0,0,0,0.05); }
.nav-secondary { background-color: #f8f9fa; }
.nav-secondary .form-control { background: rgba(0,0,0,0.08); color: rgba(0,0,0,0.75); border: 1px solid rgba(0,0,0,0.1); }

/* Multi-currency price display */
.price-display { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: baseline; }
.price-primary { font-size: 1.25rem; font-weight: 700; color: #1a1a1a; }
.price-secondary { font-size: 0.875rem; color: #666; }
.price-gbp::before { content: '\00A3'; }
.price-eur::before { content: '\20AC'; }
.price-usd::before { content: '$'; }

/* Vinyl card styling */
.gallery-item { background: #fff; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); transition: all 0.2s ease; }
.gallery-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.12); transform: translateY(-2px); }
.galleryTitle { max-height: 44px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }

/* Collector grade badges */
.grade-badge { display: inline-block; padding: 3px 8px; border-radius: 3px; font-size: 0.6875rem; font-weight: 700; text-transform: uppercase; }
.grade-nm, .grade-nmint { background-color: #059669; color: #fff; }
.grade-vgplus { background-color: #0284c7; color: #fff; }
.grade-vg { background-color: #0369a1; color: #fff; }
.grade-g { background-color: #a16207; color: #fff; }
.badge-1st-press { background-color: #7c3aed; color: #fff; }
.badge-1m1m { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #1a1a1a; font-weight: 800; }
.badge-superb { background: linear-gradient(135deg, #fcd34d, #f59e0b); color: #1a1a1a; font-weight: 800; }
.badge-uk { background-color: #1e40af; color: #fff; }

/* View toggle */
#ShowGridView, #ShowListView { cursor: pointer; padding: 8px; }
.view-toggle .active { background-color: #1a1a1a; color: #fff; }
</style>

<script>
(function() {
    'use strict';

    /* Currency conversion */
    var RATES = { GBP: 0.79, EUR: 0.92, USD: 1.00 };

    function convertCurrency(amount, from, to) {
        return (amount / RATES[from]) * RATES[to];
    }

    window.ParlogramCurrency = {
        convert: convertCurrency,
        rates: RATES
    };

    /* View toggle persistence */
    document.addEventListener('DOMContentLoaded', function() {
        var gridBtn = document.querySelector('#ShowGridView');
        var listBtn = document.querySelector('#ShowListView');

        if (gridBtn) {
            gridBtn.addEventListener('click', function() {
                localStorage.setItem('view_style', 'grid');
                var input = document.querySelector('input[name=ViewStyle]');
                if (input) { input.value = 'grid'; }
            });
        }

        if (listBtn) {
            listBtn.addEventListener('click', function() {
                localStorage.setItem('view_style', 'list');
                var input = document.querySelector('input[name=ViewStyle]');
                if (input) { input.value = 'list'; }
            });
        }

        /* Auto-submit on sort change */
        var sortSelect = document.querySelector('#SortFilterOptions, select[name="sort"]');
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                this.closest('form').submit();
            });
        }
    });
})();
</script>
```

## Individual Component Installation

### 1. Vinyl Light Theme
**File:** `01-vinyl-light-theme.css`

Transforms the default dark AuctionWorx header to a clean white theme. Makes vinyl photography stand out against the neutral background.

1. Go to **CMS > Content > Header Scripts**
2. Add `<style>` tags and paste the CSS
3. **Note:** You'll need a dark version of your logo for visibility

### 2. Multi-Currency Display
**Files:** `02-multi-currency-display.css` + `04-currency-converter.js`

Shows prices in multiple currencies (GBP, EUR, USD + 10 more). Essential for international collectors.

1. Add the CSS to Header Scripts
2. Add the JavaScript (wrapped in `<script>` tags)
3. Use data attributes on price elements: `<span data-price="87.99" data-currency="GBP"></span>`

**Important:** Update exchange rates in the JavaScript regularly.

### 3. Vinyl Card Styling
**File:** `03-vinyl-card-styling.css`

Optimized listing cards for vinyl records:
- Title truncation (prevents long album names from breaking layout)
- Square aspect ratio for album art
- Subtle hover effects

1. Add CSS to Header Scripts
2. Works automatically with existing gallery items

### 4. Collector Grade Badges
**File:** `05-collector-grade-badges.css`

Goldmine Standard grading badges for vinyl condition:

| Grade | Meaning | Color |
|-------|---------|-------|
| M | Mint - Perfect, unplayed | Dark green |
| NM | Near Mint - Nearly perfect | Green |
| VG+ | Very Good Plus - Light wear | Blue |
| VG | Very Good - Noticeable wear | Dark blue |
| G | Good - Significant wear | Yellow |

Plus pressing badges: `1st Press`, `UK`, `1M1M`, `Superb`

**Usage:**
```html
<span class="grade-badge grade-nm">NM</span>
<span class="badge-1st-press">1ST UK</span>
<span class="badge-1m1m">1M1M</span>
```

### 5. Music Categories
**File:** `06-music-categories.css`

Styled category navigation for music collections:
- Artist-level categories (Beatles, Stones, etc.)
- Format sub-categories (Vinyl, CD, Signed)
- Item count badges
- Collapsible sections

### 6. View Toggle
**File:** `07-view-toggle.js`

Saves grid/list view preference to localStorage.

1. Add JavaScript to Header Scripts
2. Works with existing `#ShowGridView` and `#ShowListView` buttons
3. Preference persists across sessions

### 7. Sort/Filter Enhancement
**File:** `08-sort-filter-enhancement.js`

Auto-submits forms when filters change (no "Apply" button needed).

1. Add JavaScript to Header Scripts
2. Automatically hooks into sort dropdowns, filter selects, and checkbox filters

## Color Reference

| Element | Parlogram Value | Default AuctionWorx |
|---------|-----------------|---------------------|
| Header Background | `#ffffff` | `#151C3D` |
| Nav Text | `rgba(0,0,0,0.6)` | White |
| Nav Hover | `rgba(0,0,0,0.9)` | Light gray |
| Card Shadow | `rgba(0,0,0,0.08)` | None |
| NM Badge | `#059669` | N/A |
| 1st Press Badge | `#7c3aed` | N/A |

## Collector Grading Reference

Parlogram uses the **Goldmine Standard** for vinyl grading:

| Abbreviation | Grade | Description |
|--------------|-------|-------------|
| M | Mint | Perfect, unplayed, still sealed |
| NM | Near Mint | Nearly perfect, minimal signs of handling |
| VG+ | Very Good Plus | Shows some wear but plays perfectly |
| VG | Very Good | Noticeable wear, light scratches |
| G+ | Good Plus | Plays through but with noise |
| G | Good | Significant wear, scratches audible |
| F | Fair | Barely playable |
| P | Poor | Damaged, skips |

**Vinyl/Sleeve Notation:** NM/VG+ means vinyl is Near Mint, sleeve is Very Good Plus.

## Special Parlogram Features

### Matrix Badges
- `1M1M` - First matrix stamper on both sides (highly collectible)
- Stamper codes identify original pressings

### Pressing Origin
- UK pressings (especially for Beatles) are most valued
- Japanese pressings known for quality
- German pressings popular in Europe

### Currency Support
Full 13-currency support:
GBP, EUR, USD, CAD, AUD, NZD, CHF, SEK, NOK, DKK, JPY, HKD, SGD

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Credits

Inspired by [Parlogram Auctions](https://parlogramauctions.com) - Beatles and vinyl record specialists.

Run by Andrew Milton from Austria, Parlogram is known for their [YouTube channel](https://www.youtube.com/@parlogram) documenting rare vinyl finds.
