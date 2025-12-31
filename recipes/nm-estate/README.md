# NM Estate Auctions Recipe Pack
**Customization Score: 65/100** | **Difficulty: Moderate**

## Overview
NM Estate Auctions is a Southwest-themed AuctionWorx site specializing in estate sales, antiques, and furniture from New Mexico. This recipe pack captures their warm, regional aesthetic with earth tones, elegant typography, and decorative elements inspired by the Land of Enchantment.

## What's Included

| File | Description | Difficulty |
|------|-------------|------------|
| `01-southwest-color-theme.css` | Warm terracotta, sand, and turquoise palette | Easy |
| `02-warm-card-styling.css` | Elegant cards for estate items | Easy |
| `03-estate-typography.css` | Serif/sans font pairing for antiques | Easy |
| `04-regional-hero-banner.css` | New Mexico-themed hero section | Moderate |
| `05-category-icons.css` | Estate sale category icons | Moderate |
| `06-southwest-decorative.css` | Borders, dividers, and accents | Easy |
| `07-image-gallery-antique.css` | Framed gallery for antique photos | Moderate |
| `08-gallery-lightbox.js` | Lightbox with keyboard/touch support | Easy |

## Quick Start (All-in-One)

Copy and paste this into **CMS > Content > Header Scripts**:

```html
<!-- Google Fonts for Estate Typography -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">

<style>
/* === NM ESTATE AUCTIONS THEME === */

/* Color Variables */
:root {
    --nm-terracotta: #C75B39;
    --nm-terracotta-dark: #A14830;
    --nm-sand: #E6D5C3;
    --nm-sand-light: #F5EDE4;
    --nm-adobe: #D4A574;
    --nm-brown: #6B4423;
    --nm-turquoise: #40A4A4;
    --nm-cream: #FDF8F3;
    --nm-charcoal: #3D3D3D;
    --nm-warm-gray: #7A7267;
    --nm-font-serif: 'Libre Baskerville', Georgia, serif;
    --nm-font-sans: 'Source Sans Pro', -apple-system, sans-serif;
}

/* Typography */
body { font-family: var(--nm-font-sans); background: var(--nm-sand-light); color: var(--nm-charcoal); }
h1, h2, h3, h4, h5, h6 { font-family: var(--nm-font-serif); font-weight: 700; }

/* Header */
.header-splash { background: var(--nm-cream) !important; border-bottom: 3px solid var(--nm-terracotta); }
.navbar-default .navbar-nav > li > a { color: var(--nm-charcoal); font-weight: 500; }
.navbar-default .navbar-nav > li > a:hover { color: var(--nm-terracotta); background: rgba(199, 91, 57, 0.08); }

/* Buttons */
.btn-primary { background: var(--nm-terracotta) !important; border-color: var(--nm-terracotta) !important; }
.btn-primary:hover { background: var(--nm-terracotta-dark) !important; border-color: var(--nm-terracotta-dark) !important; }

/* Cards */
.gallery-item, .listing-card { background: #FFFCF8; border: 1px solid var(--nm-sand); border-radius: 8px; box-shadow: 0 2px 8px rgba(107, 68, 35, 0.08); transition: all 0.3s ease; }
.gallery-item:hover, .listing-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(107, 68, 35, 0.15); border-color: var(--nm-terracotta); }

/* Prices */
.galleryPrice, .current-bid { font-size: 1.25rem; font-weight: 700; color: var(--nm-terracotta); }

/* Footer */
footer, .footer { background: var(--nm-brown) !important; color: var(--nm-sand-light); }
footer a { color: var(--nm-adobe); }
footer a:hover { color: var(--nm-cream); }

/* Links */
a { color: var(--nm-terracotta); }
a:hover { color: var(--nm-terracotta-dark); }

/* Southwest Divider */
.sw-divider { display: flex; align-items: center; justify-content: center; margin: 2rem 0; gap: 1rem; }
.sw-divider::before, .sw-divider::after { content: ''; flex: 1; max-width: 200px; height: 1px; background: linear-gradient(90deg, transparent, var(--nm-adobe), transparent); }
.sw-divider-pattern { display: flex; gap: 6px; }
.sw-divider-pattern span { width: 8px; height: 8px; background: var(--nm-terracotta); transform: rotate(45deg); }
.sw-divider-pattern span:nth-child(2) { width: 12px; height: 12px; background: var(--nm-turquoise); }

/* Section titles */
.page-title, .section-title { font-family: var(--nm-font-serif); font-size: 2rem; color: var(--nm-brown); text-align: center; margin-bottom: 1.5rem; position: relative; padding-bottom: 1rem; }
.page-title::after, .section-title::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 60px; height: 3px; background: linear-gradient(90deg, var(--nm-terracotta), var(--nm-adobe)); border-radius: 2px; }

/* Form focus states */
input:focus, select:focus, textarea:focus { border-color: var(--nm-turquoise); box-shadow: 0 0 0 3px rgba(64, 164, 164, 0.15); }

/* Badges */
.badge, .label-primary { background: var(--nm-turquoise); }
</style>

<script>
/* Gallery thumbnail navigation */
document.addEventListener('DOMContentLoaded', function() {
    var thumbs = document.querySelectorAll('.gallery-thumbnail');
    var mainImg = document.querySelector('.gallery-main-image img');
    if (!thumbs.length || !mainImg) return;
    thumbs.forEach(function(t) {
        t.addEventListener('click', function() {
            thumbs.forEach(function(x) { x.classList.remove('active'); });
            this.classList.add('active');
            var src = this.querySelector('img').src;
            mainImg.src = src.replace('-thumb', '');
        });
    });
});
</script>
```

## Individual Component Installation

### 1. Southwest Color Theme
**File:** `01-southwest-color-theme.css`

Transforms the default AuctionWorx colors into a warm Southwest palette featuring terracotta, sand, adobe, and turquoise accents.

1. Go to **CMS > Content > Header Scripts**
2. Add `<style>` tags and paste the CSS
3. Colors work best with earth-toned imagery

**Color Reference:**

| Name | Hex | Usage |
|------|-----|-------|
| Terracotta | `#C75B39` | Primary accent, buttons, links |
| Sand | `#E6D5C3` | Borders, subtle backgrounds |
| Adobe | `#D4A574` | Secondary accent, highlights |
| Brown | `#6B4423` | Footer, rich text accents |
| Turquoise | `#40A4A4` | Badges, focus states |
| Cream | `#FDF8F3` | Light backgrounds |

### 2. Warm Card Styling
**File:** `02-warm-card-styling.css`

Elegant card design for estate sale items with warm shadows, subtle borders, and refined hover effects.

1. Add the CSS to Header Scripts
2. Automatically applies to `.gallery-item` and `.listing-card` elements
3. Features framed aesthetic suitable for antiques

### 3. Estate Typography
**File:** `03-estate-typography.css`

Sophisticated font pairing using Libre Baskerville (serif) for headings and Source Sans Pro (sans-serif) for body text.

1. Add the Google Fonts link to Header Scripts:
```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
```
2. Add the CSS below the font import
3. Headings get elegant serif treatment, body text remains readable

### 4. Regional Hero Banner
**File:** `04-regional-hero-banner.css`

Full-viewport hero section with New Mexico theming, desert sunset overlay, and decorative elements.

1. Add the CSS to Header Scripts
2. Modify your homepage template to include the hero HTML:
```html
<div class="nm-hero" style="background-image: url('/Content/Images/desert.jpg');">
    <div class="nm-hero-content">
        <p class="nm-hero-tagline">New Mexico's Premier Estate Auction House</p>
        <h1 class="nm-hero-title">Discover Treasures from the Land of Enchantment</h1>
        <div class="nm-hero-divider">
            <span></span><span></span><span></span>
        </div>
        <p class="nm-hero-subtitle">Specializing in Southwest antiques, Native American art, and estate treasures</p>
        <div class="nm-hero-cta">
            <a href="/Browse" class="nm-hero-btn primary">Browse Auctions</a>
            <a href="/About" class="nm-hero-btn secondary">Learn More</a>
        </div>
    </div>
</div>
```
3. Upload a desert landscape or New Mexico themed background image

### 5. Category Icons
**File:** `05-category-icons.css`

Custom category grid with icons for typical estate sale categories: Furniture, Antiques, Jewelry, Art, Collectibles, and Household.

1. Add the CSS to Header Scripts
2. Create category links using this structure:
```html
<div class="category-grid">
    <a href="/Browse?category=furniture" class="category-card">
        <div class="category-icon furniture"></div>
        <span class="category-name">Furniture</span>
        <span class="category-count">124 items</span>
    </a>
    <!-- Add more categories -->
</div>
```
3. Available icon classes: `furniture`, `antiques`, `jewelry`, `art`, `collectibles`, `household`

### 6. Southwest Decorative Elements
**File:** `06-southwest-decorative.css`

Authentic Southwest patterns including dividers, borders, corner accents, and decorative elements.

**Available Elements:**
- `.sw-divider` - Diamond pattern section divider
- `.sw-border-stepped` - Stepped border pattern
- `.sw-border-zigzag` - Zigzag border pattern
- `.sw-corners` - Corner bracket accents
- `.sw-accent-line` - Gradient accent line
- `.sw-quote-box` - Styled quote/testimonial box
- `.sw-section-label` - Decorated section labels

**Example Divider:**
```html
<div class="sw-divider">
    <div class="sw-divider-pattern">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>
```

### 7. Antique Image Gallery
**Files:** `07-image-gallery-antique.css` + `08-gallery-lightbox.js`

Elegant framed gallery presentation for estate items with lightbox viewer.

1. Add both CSS and JS to Header Scripts
2. Structure your gallery like this:
```html
<div class="gallery-main-image with-zoom">
    <span class="image-badge condition excellent">Excellent</span>
    <span class="image-badge lot-number">Lot #142</span>
    <img src="/path/to/main-image.jpg" alt="Antique Chair">
</div>
<div class="gallery-thumbnails">
    <div class="gallery-thumbnail active">
        <img src="/path/to/thumb1.jpg" alt="">
    </div>
    <div class="gallery-thumbnail">
        <img src="/path/to/thumb2.jpg" alt="">
    </div>
</div>
```

**Features:**
- Framed main image with mat effect
- Thumbnail navigation
- Full-screen lightbox with keyboard (Esc, arrows) and touch support
- Condition badges (excellent, good, fair)
- Lot number overlays

## Recommended Images

For best results with this theme, use:
- Desert landscapes (sunset, mountains)
- Adobe architecture
- Southwest patterns (Navajo rugs, pottery)
- Warm, natural lighting on antiques

**Free image sources:**
- [Unsplash](https://unsplash.com/s/photos/new-mexico)
- [Pexels](https://pexels.com/search/southwest/)

## Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

**Note:** CSS custom properties (variables) require IE11 fallbacks if supporting older browsers.

## Credits
Inspired by NM Estate Auctions and Southwest regional auction houses.

---

**Pro Tip:** Combine this recipe with high-quality estate photography for maximum impact. The warm color palette enhances wood tones, pottery, and antique finishes beautifully.
