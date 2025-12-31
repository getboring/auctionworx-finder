# Country Club Sales Recipe Pack
**Customization Score: 69/100** | **Difficulty: Easy to Moderate**

## Overview
Country Club Sales is a livestock and embryo auction platform built on AuctionWorx. Their customizations focus on a bold black-and-green brand identity with agricultural industry conventions - sharp corners, heavy typography, and mobile-optimized bidding for use at sale barns.

**Site:** [countryclubsales.com](https://countryclubsales.com)

## What's Included

| File | Description | Difficulty |
|------|-------------|------------|
| `01-black-header-theme.css` | Black header replacing navy | Easy |
| `02-green-hover-buttons.css` | Black buttons with green hover | Easy |
| `03-livestock-typography.css` | Bold, condensed auction text | Easy |
| `04-sharp-corners-theme.css` | Remove all rounded corners | Easy |
| `05-black-footer.css` | Matching black footer | Easy |
| `06-gallery-aspect-ratios.css` | Consistent image sizing | Moderate |
| `07-bid-status-colors.css` | Color-coded bid feedback | Easy |
| `08-mobile-touch-buttons.css` | Larger buttons for mobile | Easy |
| `09-category-icons.css` | Category thumbnail styling | Moderate |
| `10-sale-badge.css` | CSS "SALE" badge overlays | Easy |

## Quick Start (All-in-One)

Copy and paste this into **CMS > Content > Header Scripts**:

```html
<style>
/* === COUNTRY CLUB SALES THEME === */
/* Black & Green Livestock Auction Theme */

/* Black header */
.header-splash { background-color: #000000 !important; }
.navbar-default .navbar-nav > li > a { color: #ffffff; }
.navbar-default .navbar-nav > li > a:hover { color: #ffffff; background: rgba(255,255,255,0.1); }
.navbar-default .navbar-toggle { border-color: rgba(255,255,255,0.3); }
.navbar-default .navbar-toggle .icon-bar { background-color: #ffffff; }

/* Black footer */
footer, .footer { background-color: #000000 !important; color: #ffffff; }
footer a, .footer a { color: #ffffff; }
footer a:hover, .footer a:hover { color: #18801f; }

/* Green hover buttons */
.btn-primary, .btn-default {
    background-color: #000000;
    border-color: #000000;
    color: #ffffff;
    transition: all 0.2s ease;
}
.btn-primary:hover, .btn-primary:focus, .btn-default:hover, .btn-default:focus {
    background-color: #18801f !important;
    border-color: #18801f !important;
}

/* Sharp corners */
.btn, .form-control, .panel, .thumbnail, .dropdown-menu,
.galleryUnit, input, select, textarea { border-radius: 0 !important; }

/* Livestock typography */
.gallery_shortTitle, .galleryTitle { font-weight: 900; font-stretch: 50%; }
.awe-rt-MinimumBid .NumberPart, .galleryPrice { font-size: 22px; font-weight: 700; }
.field-label { font-weight: 200; color: #777; text-transform: uppercase; font-size: 0.75rem; }

/* Bid status colors */
.bid-status.winning, .reserve-met { color: #18801f !important; font-weight: 700; }
.bid-status.losing, .reserve-not-met { color: #cc0000 !important; font-weight: 700; }

/* Gallery constraints */
.galleryImage { max-height: 300px; overflow: hidden; }

/* Mobile touch optimization */
@media (max-width: 599px) {
    .btn, .btn-primary { font-size: 18px; padding: 12px 20px; min-height: 48px; }
    .form-control, input { font-size: 16px; min-height: 48px; }
}
</style>
```

## Individual Component Installation

### 1. Black Header Theme
**File:** `01-black-header-theme.css`

Transforms the default navy header to pure black for a bold agricultural brand.

1. Go to **CMS > Content > Header Scripts**
2. Add `<style>` tags and paste the CSS
3. Ensure your logo works on a black background

### 2. Green Hover Buttons
**File:** `02-green-hover-buttons.css`

The signature Country Club Sales button style: black default, green on hover.

1. Add the CSS to Header Scripts
2. Applies automatically to all `.btn-primary` and `.btn-default` buttons
3. Includes disabled state styling

### 3. Livestock Typography
**File:** `03-livestock-typography.css`

Heavy, condensed typography optimized for livestock catalogs:
- **Weight 900** for lot titles
- **Weight 200** for field labels
- Large bold pricing display

### 4. Sharp Corners Theme
**File:** `04-sharp-corners-theme.css`

Removes all border-radius for a traditional catalog appearance. Agricultural auctions often prefer this professional look over rounded UI elements.

### 5. Black Footer
**File:** `05-black-footer.css`

Matches the black header to create a cohesive bookend effect.

### 6. Gallery Aspect Ratios
**File:** `06-gallery-aspect-ratios.css`

Enforces consistent image sizing for livestock photos:
- 4:3 ratio (default)
- 1:1 square option
- 3:4 portrait option

### 7. Bid Status Colors
**File:** `07-bid-status-colors.css`

Color-coded real-time bid feedback:
- **Green (#18801f):** Winning, Reserve Met
- **Red (#cc0000):** Losing, Outbid, Reserve Not Met
- **Orange (#ff9900):** Awaiting Payment

### 8. Mobile Touch Buttons
**File:** `08-mobile-touch-buttons.css`

Larger touch targets for mobile bidding:
- 48px minimum button height
- 16px input font size (prevents iOS zoom)
- Essential for bidding from phones at sale barns

### 9. Category Icons
**File:** `09-category-icons.css`

Styles for category thumbnails and navigation. Requires category images to be uploaded via AuctionWorx CMS.

### 10. Sale Badge
**File:** `10-sale-badge.css`

CSS-only "SALE" badges using pseudo-elements. No HTML changes required.

## Color Reference

| Element | Country Club Sales | Default AuctionWorx |
|---------|-------------------|---------------------|
| Header Background | `#000000` | `#151C3D` |
| Footer Background | `#000000` | `#151C3D` |
| Primary Accent | `#18801f` (green) | Blue |
| Button Default | `#000000` | Blue |
| Button Hover | `#18801f` | Darker blue |
| Winning Status | `#18801f` | Green |
| Losing Status | `#cc0000` | Red |
| Text Primary | `#000000` | `#333333` |
| Text Secondary | `#777777` | `#666666` |
| Borders | `#dddddd` | `#ddd` |
| Disabled | `#eeeeee` | `#ccc` |

## Typography Weights

| Element | Weight | Style |
|---------|--------|-------|
| Lot Titles | 900 | Condensed (50% stretch) |
| Prices | 700 | Normal |
| Body Text | 400 | Normal |
| Field Labels | 200 | Uppercase |

## Agricultural Terminology

Country Club Sales uses livestock auction-specific language throughout:
- **Consignor** (not "seller")
- **Lot** (not "item")
- **Reserve Price Met/Not Met**
- **Proxy Bidding**
- **Quick Bid** / **Max Bid**

Consider updating your CMS labels to match if targeting agricultural auctions.

## Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

**Note:** The `font-stretch` property for condensed typography requires modern browser support.

## Mobile Considerations

Livestock auctions often involve bidding from sale barns with limited connectivity:
- Large touch targets (48px minimum)
- High contrast black/white/green
- Fast-loading CSS-only effects
- No JavaScript-dependent styling

## Credits
Inspired by [countryclubsales.com](https://countryclubsales.com) - Livestock and embryo auctions.
