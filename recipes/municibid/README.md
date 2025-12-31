# MuniciBid Recipe Pack
**Customization Score: 74/100** | **Difficulty: ⭐⭐ Moderate**

## Overview
MuniciBid is the highest-customized AuctionWorx site we analyzed. They've transformed the default dark theme into a modern, light, government-focused auction platform serving 7,000+ agencies.

## What's Included

| File | Description | Difficulty |
|------|-------------|------------|
| `01-header-white-theme.css` | White header replacing navy | ⭐ Easy |
| `02-hero-section.css` | Full-viewport hero banner | ⭐⭐ Moderate |
| `03-modern-card-grid.css` | CSS Grid listing cards | ⭐⭐ Moderate |
| `04-sticky-header.css` | Header sticks on scroll | ⭐ Easy |
| `05-sticky-header.js` | JavaScript for sticky effect | ⭐ Easy |
| `06-scrollable-dropdowns.css` | Long menus with fade hint | ⭐ Easy |
| `07-intercom-chat.html` | Live chat widget | ⭐ Easy |

## Quick Start (All-in-One)

Copy and paste this into **CMS > Content > Header Scripts**:

```html
<style>
/* === MUNICIBID THEME === */

/* White header */
.header-splash { background-color: #ffffff !important; }
.navbar-default .navbar-nav > li > a { color: rgba(0,0,0,0.7); }
.navbar-default .navbar-nav > li > a:hover { color: rgba(0,0,0,0.9); background: rgba(0,0,0,0.05); }

/* Sticky header */
.header-splash { position: sticky; top: 0; z-index: 1000; transition: all 0.3s ease; }
.header-splash.scrolled { box-shadow: 0 2px 10px rgba(0,0,0,0.1); }

/* Modern card grid */
.row.gallery-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
.row.gallery-row > [class*="col-"] { width: 100%; max-width: 100%; padding: 0; }

/* Scrollable dropdowns */
.navbar-nav .dropdown-menu { max-height: 400px; overflow-y: auto; }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header-splash');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { header.classList.add('scrolled'); }
        else { header.classList.remove('scrolled'); }
    });
});
</script>
```

## Individual Component Installation

### 1. White Header Theme
**File:** `01-header-white-theme.css`

1. Go to **CMS > Content > Header Scripts**
2. Add `<style>` tags and paste the CSS
3. **Note:** You may need a dark version of your logo

### 2. Hero Section
**File:** `02-hero-section.css`

1. Add the CSS to Header Scripts
2. Modify `/Views/Home/HomePageFeaturedListings.cshtml`
3. Add the hero HTML structure (see comments in file)

### 3. Modern Card Grid
**File:** `03-modern-card-grid.css`

1. Add the CSS to Header Scripts
2. Add class `gallery-row` to your listing row containers
3. Works automatically with existing Bootstrap grid

### 4. Sticky Header
**Files:** `04-sticky-header.css` + `05-sticky-header.js`

1. Add both CSS and JS to Header Scripts
2. Header will automatically stick and add shadow on scroll

### 5. Scrollable Dropdowns
**File:** `06-scrollable-dropdowns.css`

1. Add CSS to Header Scripts
2. Automatically applies to all dropdown menus

### 6. Chat Widget
**File:** `07-intercom-chat.html`

1. Sign up at [intercom.com](https://www.intercom.com/) or [tawk.to](https://www.tawk.to/)
2. Replace `YOUR_APP_ID_HERE` with your actual ID
3. Add before `</body>` in Header Scripts

## Color Reference

| Element | MuniciBid Value | Default AuctionWorx |
|---------|-----------------|---------------------|
| Header Background | `#ffffff` | `#151C3D` |
| Primary Accent | `#FFD43B` (yellow) | Blue |
| Text on Header | `rgba(0,0,0,0.7)` | White |
| Card Shadows | `rgba(0,0,0,0.08)` | None |

## Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

**Note:** `backdrop-filter` for blur effects requires Safari 9+ or Chrome 76+.

## Credits
Inspired by [municibid.com](https://municibid.com) - Government surplus auctions.
