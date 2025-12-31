# Auksjonarius Recipe Pack
**Customization Score: 67/100** | **Difficulty: Moderate**

## Overview
Auksjonarius.no is a Norwegian philatelic (stamp collecting) auction site serving Nordic collectors. Their customizations reflect Scandinavian design principles: clean, minimal, functional. Key features include Norwegian language integration, deep philatelic categorization, and club-hosted auction support.

**Site:** [auksjonarius.no](https://auksjonarius.no)
**Market:** Norway / Scandinavia
**Specialty:** Philatelic (stamps, postal history, covers)

## What's Included

| File | Description | Difficulty |
|------|-------------|------------|
| `01-nordic-dark-header.css` | Dark blue (#21354f) header theme | Easy |
| `02-norwegian-sale-badge.css` | Localized badges ("SALG", "NY", "SOLGT") | Easy |
| `03-philatelic-categories.css` | Deep stamp category hierarchy styling | Moderate |
| `04-language-selector.css` | Multi-language dropdown with flags | Easy |
| `05-scandinavian-typography.css` | Clean Nordic fonts and spacing | Easy |
| `06-norwegian-locale.js` | Globalize.js Norwegian config | Easy |
| `07-minicourse-onboarding.js` | Seller tutorial widget | Easy |
| `08-fullres-analytics.html` | Nordic analytics tracking | Easy |
| `09-silktide-cookie-consent.js` | GDPR cookie banner | Easy |
| `10-minimalist-cards.css` | Clean Scandinavian card layout | Moderate |
| `11-club-hosted-auctions.css` | Philatelic society event styling | Moderate |

## Quick Start (All-in-One)

Copy and paste this into **CMS > Content > Header Scripts**:

```html
<style>
/* === AUKSJONARIUS NORDIC THEME === */

/* Dark blue header */
.header-splash { background-color: #21354f !important; }
.nav-secondary { background-color: #2c4666 !important; }
.navbar-default .navbar-nav > li > a { color: rgba(255, 255, 255, 0.9); }
.navbar-default .navbar-nav > li > a:hover { color: #ffffff; background-color: rgba(255, 255, 255, 0.1); }

/* Norwegian sale badges */
.listing-badge:before, .sale-badge:before { content: 'SALG' !important; }
.badge-new:before { content: 'NY' !important; }
.badge-sold:before { content: 'SOLGT' !important; }
.listing-badge, .sale-badge { background-color: #c41e3a !important; border: 1px dashed rgba(255, 255, 255, 0.3); }

/* Clean typography */
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif; }
.listing-title, .galleryTitle { font-weight: 600; color: #21354f; }
.price, .galleryPrice { font-weight: 700; color: #21354f; }

/* Minimalist card grid */
.row.gallery-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem; }
.row.gallery-row > [class*="col-"] { width: 100%; max-width: 100%; padding: 0; }

/* Card styling */
.gallery-item, .awe-listingTile {
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    transition: all 0.25s ease;
}
.gallery-item:hover, .awe-listingTile:hover {
    border-color: #d0d0d0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
}

/* Category styling */
.category-tree .category-parent { font-weight: 600; color: #21354f; border-left: 3px solid transparent; }
.category-tree .category-parent:hover { background-color: #f5f7fa; border-left-color: #21354f; }
.category-count { background: #e9ecef; border-radius: 10px; font-size: 0.6875rem; color: #6c757d; }
</style>

<script>
/* Norwegian Locale */
(function() {
    'use strict';

    window.NorwegianLocale = {
        months: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
        formatDate: function(date) {
            var d = new Date(date);
            return d.getDate() + '. ' + this.months[d.getMonth()] + ' ' + d.getFullYear();
        },
        formatCurrency: function(amount) {
            var parts = parseFloat(amount).toFixed(2).split('.');
            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ',' + parts[1] + ' kr';
        }
    };

    if (typeof Globalize !== 'undefined') {
        Globalize.locale('nb');
    }
})();
</script>
```

## Individual Component Installation

### 1. Nordic Dark Header
**File:** `01-nordic-dark-header.css`

The signature dark blue header creates a professional, Nordic aesthetic.

1. Go to **CMS > Content > Header Scripts**
2. Add `<style>` tags and paste the CSS
3. Ensure your logo works on dark backgrounds (light logos recommended)

**Key color:** `#21354f` (Nordic dark blue)

### 2. Norwegian Sale Badges
**File:** `02-norwegian-sale-badge.css`

Localizes listing badges to Norwegian:
- SALG (Sale)
- NY (New)
- SOLGT (Sold)
- SLUTTER SNART (Ending Soon)

### 3. Philatelic Categories
**File:** `03-philatelic-categories.css`

Styles for deep stamp collecting hierarchies:
- Country > Era > Type > Condition
- Catalog reference numbers (e.g., "NK #123")
- Condition grades (Mint, Fine, Good, Fair)

### 4. Language Selector
**File:** `04-language-selector.css`

Multi-language dropdown with flag icons:
- Norwegian (primary)
- Swedish
- Danish
- English

**Note:** Requires flag images at `/Content/Images/Languages/[lang].png`

### 5. Scandinavian Typography
**File:** `05-scandinavian-typography.css`

Clean, minimal type styling:
- System font stack with Nordic character support
- Comfortable line heights
- Subtle link styling

### 6. Norwegian Locale (JavaScript)
**File:** `06-norwegian-locale.js`

Date and number formatting:
- Dates: "15. januar 2025"
- Numbers: "1 234,56 kr"
- Integrates with Globalize.js

### 7. MiniCourse Onboarding
**File:** `07-minicourse-onboarding.js`

Guided tutorials for new sellers:
1. Sign up at [minicourse.com](https://minicourse.com)
2. Create your course
3. Replace `YOUR_MINICOURSE_CODE_HERE` with your code

### 8. Fullres Analytics
**File:** `08-fullres-analytics.html`

Norwegian analytics tracking:
1. Sign up at [fullres.net](https://fullres.net)
2. Replace `YOUR_FULLRES_ID_HERE`
3. Paste before `</body>`

### 9. GDPR Cookie Consent
**File:** `09-silktide-cookie-consent.js`

EU-compliant cookie banner with Norwegian text:
- Silktide integration
- Fallback banner included
- localStorage-based consent tracking

### 10. Minimalist Cards
**File:** `10-minimalist-cards.css`

Clean Scandinavian card layout:
- CSS Grid responsive layout
- Subtle borders and shadows
- Two-line title truncation

### 11. Club-Hosted Auctions
**File:** `11-club-hosted-auctions.css`

For philatelic society events:
- Club branding header
- Multi-seller displays
- Member badges
- Event banners

## Color Reference

| Element | Auksjonarius Value | Purpose |
|---------|-------------------|---------|
| Header Background | `#21354f` | Nordic dark blue |
| Header Secondary | `#2c4666` | Lighter nav bar |
| Links/Accents | `#4a90d9` | Action blue |
| Sale Badge | `#c41e3a` | Classic postage red |
| New Badge | `#2e7d32` | Success green |
| Text Primary | `#2d2d2d` | Dark gray |
| Text Secondary | `#666666` | Medium gray |
| Borders | `#e8e8e8` | Light gray |
| Background | `#ffffff` | White |

## Norwegian Localization Reference

| English | Norwegian |
|---------|-----------|
| Sale | SALG |
| New | NY |
| Sold | SOLGT |
| Ending Soon | SLUTTER SNART |
| Popular | POPULAER |
| Bid | Bud |
| Bids | Bud |
| Current Bid | Gjeldende bud |
| Starting Price | Startpris |
| Buy Now | Kjop na |
| Time Left | Tid igjen |
| Category | Kategori |
| Seller | Selger |
| Search | Sok |

## Philatelic-Specific Features

### Stamp Condition Grades
```css
.condition-mint { background: #d4edda; color: #155724; }  /* Postfrisk */
.condition-fine { background: #cce5ff; color: #004085; }  /* Fin */
.condition-good { background: #fff3cd; color: #856404; }  /* God */
.condition-fair { background: #f8d7da; color: #721c24; }  /* Brukbar */
```

### Catalog References
Display Norwegian catalog numbers (NK), Facit, Michel, etc.:
```html
<span class="catalog-ref">NK #245</span>
```

## Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Credits
Inspired by [auksjonarius.no](https://auksjonarius.no) - Nordic philatelic auctions.

---

**Need help?** Open an issue or check the [AuctionWorx documentation](https://www.rainworx.com/docs).
