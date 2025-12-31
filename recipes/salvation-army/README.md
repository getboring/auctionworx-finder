# Shop The Salvation Army Recipe Pack
**Customization Score: 69/100** | **Difficulty: Moderate**

## Overview
Shop The Salvation Army is a charity thrift auction site that demonstrates excellent nonprofit branding on the AuctionWorx platform. Their customizations focus on trust-building, accessibility, and multi-platform integration - essential for charity organizations.

Key features: Salvation Army red branding, multi-platform links (Amazon, Whatnot), donation CTAs, accessible design, and comprehensive analytics tracking.

## What's Included

| File | Description | Difficulty |
|------|-------------|------------|
| `01-charity-red-branding.css` | Salvation Army red (#9A1919) theme | Easy |
| `02-featured-category-grid.css` | 9-tile category grid with images | Moderate |
| `03-promotional-carousel.css` | Rotating banner styles | Moderate |
| `04-trust-badges.css` | Charity trust indicators & messaging | Easy |
| `05-multi-platform-links.css` | Amazon, Whatnot, eBay link buttons | Easy |
| `06-accessible-design.css` | WCAG 2.1 AA accessibility helpers | Easy |
| `07-analytics-tracking.js` | GA4, GTM, TikTok tracking stack | Moderate |
| `08-donation-header-button.html` | Header donate button with tracking | Easy |
| `09-carousel-init.js` | Owl Carousel initialization | Easy |

## Quick Start (All-in-One)

Copy and paste this into **CMS > Content > Header Scripts**:

```html
<style>
/* === SALVATION ARMY CHARITY THEME === */

/* Brand colors */
:root {
    --sa-red: #9A1919;
    --sa-red-hover: #7d1414;
}

/* Red branding */
.btn-primary { background-color: var(--sa-red) !important; border-color: var(--sa-red) !important; }
.btn-primary:hover { background-color: var(--sa-red-hover) !important; }
a { color: var(--sa-red); }
footer { background-color: var(--sa-red) !important; }

/* Featured category grid */
.featured-categories { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 2rem 0; }
.category-tile { position: relative; aspect-ratio: 4/3; background-size: cover; border-radius: 8px; overflow: hidden; transition: transform 0.3s ease; }
.category-tile:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
.category-tile::before { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); }
.category-tile .category-name { position: absolute; bottom: 1rem; left: 1rem; color: #fff; font-weight: 600; z-index: 2; }

/* Trust badges */
.trust-badges { display: flex; justify-content: center; gap: 2rem; padding: 1.5rem; background: #f8f9fa; }
.charity-impact { background: var(--sa-red); color: #fff; text-align: center; padding: 1rem; }

/* Multi-platform links */
.platform-links { display: flex; gap: 1rem; justify-content: center; padding: 1rem; }
.platform-link { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1.25rem; background: #fff; border: 1px solid #e0e0e0; border-radius: 6px; text-decoration: none; transition: all 0.2s; }
.platform-link:hover { border-color: var(--sa-red); color: var(--sa-red); }

/* Accessibility */
a:focus, button:focus, input:focus { outline: 3px solid var(--sa-red); outline-offset: 2px; }
.skip-link { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); background: var(--sa-red); color: #fff; padding: 0.75rem 1.5rem; z-index: 9999; }
.skip-link:focus { top: 0; }

/* Header donate button */
.header-donate-btn { display: inline-flex; align-items: center; gap: 0.5rem; background: var(--sa-red); color: #fff !important; padding: 0.5rem 1.25rem; font-weight: 600; border-radius: 4px; text-decoration: none; }
.header-donate-btn:hover { background: var(--sa-red-hover); }

/* Responsive */
@media (max-width: 991px) { .featured-categories { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 575px) { .featured-categories { grid-template-columns: 1fr; } .platform-links { flex-direction: column; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Add header donate button
    var DONATION_URL = 'https://classy.org/give/YOUR_CAMPAIGN_ID/#!/donation/checkout';
    var navRight = document.querySelector('.navbar-right');
    if (navRight) {
        var li = document.createElement('li');
        li.innerHTML = '<a href="' + DONATION_URL + '" class="header-donate-btn" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>Donate</a>';
        navRight.insertBefore(li, navRight.firstChild);
    }

    // Track donation clicks
    document.querySelectorAll('[href*="donate"], [href*="classy.org"]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (window.gtag) gtag('event', 'donate_click', { 'event_category': 'Donation' });
        });
    });
});
</script>

<!-- Google Analytics 4 - Replace G-XXXXXXXXXX with your ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Individual Component Installation

### 1. Charity Red Branding
**File:** `01-charity-red-branding.css`

1. Go to **CMS > Content > Header Scripts**
2. Add `<style>` tags and paste the CSS
3. **Note:** Update logo if needed for red background contrast

The Salvation Army red (`#9A1919`) replaces default blues and creates consistent nonprofit identity.

### 2. Featured Category Grid
**File:** `02-featured-category-grid.css`

1. Add the CSS to Header Scripts
2. Add this HTML to your homepage:

```html
<div class="featured-categories">
    <a href="/Browse?category=clothing" class="category-tile"
       style="background-image: url('/Content/Images/categories/clothing.jpg');">
        <span class="category-name">Clothing</span>
    </a>
    <!-- Add more tiles... -->
</div>
```

Suggested thrift categories: Clothing, Furniture, Electronics, Home Decor, Books, Toys, Kitchen, Sports, Jewelry.

### 3. Promotional Carousel
**Files:** `03-promotional-carousel.css` + `09-carousel-init.js`

1. Add both CSS and JS to Header Scripts
2. Include Owl Carousel library (loaded automatically by JS)
3. Add banner HTML structure (see file comments)

### 4. Trust Badges
**File:** `04-trust-badges.css`

1. Add CSS to Header Scripts
2. Add trust badge HTML to footer or homepage:

```html
<div class="trust-badges">
    <div class="trust-badge">
        <img src="/Content/Images/badges/501c3.svg" alt="501(c)(3)">
        <span>501(c)(3) Nonprofit</span>
    </div>
</div>

<div class="charity-impact">
    <h3>Your Purchase Makes a Difference</h3>
    <p>Every item sold helps fund community programs.</p>
</div>
```

### 5. Multi-Platform Links
**File:** `05-multi-platform-links.css`

For thrift stores selling on multiple platforms (Amazon, Whatnot, eBay):

```html
<div class="platform-links">
    <a href="https://amazon.com/shops/yourstore" class="platform-link amazon">
        <img src="/icons/amazon.svg" alt=""> Amazon Store
    </a>
    <a href="https://whatnot.com/user/yourstore" class="platform-link whatnot">
        <img src="/icons/whatnot.svg" alt=""> Whatnot Livestreams
    </a>
</div>
```

### 6. Accessible Design
**File:** `06-accessible-design.css`

Critical for nonprofit sites serving diverse communities:

1. Add CSS to Header Scripts
2. Add skip link as first element in `<body>`:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

3. Add `id="main-content"` to your main content area

Includes: Focus indicators, reduced motion support, larger touch targets, screen reader helpers.

### 7. Analytics Tracking
**File:** `07-analytics-tracking.js`

1. Replace `G-XXXXXXXXXX` with your GA4 Measurement ID
2. Replace `GTM-XXXXXXX` with your GTM Container ID
3. Add to Header Scripts in `<script>` tags

Tracks: Bids, wins, donation clicks, platform clicks, newsletter signups.

### 8. Header Donate Button
**File:** `08-donation-header-button.html`

1. Update `DONATION_URL` to your donation platform
2. Add entire file contents to Header Scripts

Popular platforms: Classy, PayPal Giving Fund, Network for Good, Donorbox.

## Color Reference

| Element | Salvation Army | Default AuctionWorx |
|---------|----------------|---------------------|
| Primary Brand | `#9A1919` (Red) | Navy Blue |
| Primary Hover | `#7d1414` | - |
| Background | `#ffffff` | `#151C3D` |
| Trust Badge BG | `#f8f9fa` | - |
| Impact Banner | `#9A1919` | - |

## Why These Customizations Matter for Charity Sites

1. **Trust Badges** - Nonprofits must establish credibility immediately
2. **Donation CTAs** - Direct giving should be one click away
3. **Accessibility** - Charity sites serve all community members
4. **Multi-Platform** - Thrift stores often sell across Amazon, eBay, Whatnot
5. **Impact Messaging** - Buyers want to know their purchase helps

## Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Accessibility Compliance
These recipes support WCAG 2.1 AA compliance:
- Color contrast ratios meet 4.5:1 minimum
- Focus indicators on all interactive elements
- Reduced motion support
- Screen reader compatibility
- Touch target minimum 44x44px on mobile

## Credits
Inspired by [shopthesalvationarmy.com](https://shopthesalvationarmy.com) - The Salvation Army thrift auctions.
