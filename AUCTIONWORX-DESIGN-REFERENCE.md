# AuctionWorx Design Reference
## The Source of Truth for Theme Engine Development

*Compiled from official RainWorx documentation and Bootstrap 3.4 specs*
*Last Updated: 2024*

---

## Table of Contents
1. [Bootstrap 3 Grid System](#bootstrap-3-grid-system)
2. [Bootstrap 3 Breakpoints](#bootstrap-3-breakpoints)
3. [AuctionWorx Core CSS Classes](#auctionworx-core-css-classes)
4. [AuctionWorx Real-Time Classes](#auctionworx-real-time-classes)
5. [Bootstrap 3 Component Classes](#bootstrap-3-component-classes)
6. [Color System](#color-system)
7. [Typography](#typography)
8. [Button Classes](#button-classes)
9. [Form Classes](#form-classes)
10. [Navbar Classes](#navbar-classes)
11. [Panel & Card Classes](#panel--card-classes)
12. [Badge & Label Classes](#badge--label-classes)
13. [Table Classes](#table-classes)
14. [Helper Classes](#helper-classes)
15. [Responsive Utilities](#responsive-utilities)
16. [AWX File Paths](#awx-file-paths)
17. [CMS Integration Points](#cms-integration-points)
18. [Critical Constraints](#critical-constraints)
19. [CSS Implementation Methods](#css-implementation-methods)

---

## Bootstrap 3 Grid System

### Container Widths
| Breakpoint | Screen Width | Container Width | Class Prefix |
|------------|--------------|-----------------|--------------|
| Extra Small (XS) | <768px | Auto (fluid) | `.col-xs-` |
| Small (SM) | ≥768px | 750px | `.col-sm-` |
| Medium (MD) | ≥992px | 970px | `.col-md-` |
| Large (LG) | ≥1200px | 1170px | `.col-lg-` |

### Grid Variables
```less
@grid-columns:           12;
@grid-gutter-width:      30px;
@grid-float-breakpoint:  768px;
```

### Core Grid Classes
```css
/* Containers */
.container        /* Fixed width, centered */
.container-fluid  /* Full width */

/* Rows */
.row              /* Horizontal group of columns */
.row-no-gutters   /* Remove column gutters */

/* Columns */
.col-xs-{1-12}    /* Extra small devices */
.col-sm-{1-12}    /* Small devices */
.col-md-{1-12}    /* Medium devices */
.col-lg-{1-12}    /* Large devices */

/* Offsets */
.col-md-offset-{0-12}  /* Push column right */

/* Ordering */
.col-md-push-{0-12}    /* Push column right */
.col-md-pull-{0-12}    /* Pull column left */
```

---

## Bootstrap 3 Breakpoints

### Media Query Reference
```css
/* Extra small devices (phones, less than 768px) */
/* No media query - this is the default */

/* Small devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) { }

/* Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { }
```

### Breakpoint Variables
```less
@screen-xs-min: 480px;
@screen-sm-min: 768px;
@screen-md-min: 992px;
@screen-lg-min: 1200px;

@screen-xs-max: (@screen-sm-min - 1);  /* 767px */
@screen-sm-max: (@screen-md-min - 1);  /* 991px */
@screen-md-max: (@screen-lg-min - 1);  /* 1199px */
```

---

## AuctionWorx Core CSS Classes

### Header & Navigation
```css
.header-splash           /* Main header container - PRIMARY TARGET */
.logo                    /* Site logo */
.nav-secondary           /* Secondary navigation */
.navbar-default          /* Bootstrap navbar with AWX styling */
.navbar-nav              /* Navigation list */
```

### Gallery & Listings
```css
.galleryTitle            /* Listing title in grid view */
.galleryPrice            /* Listing price display */
.galleryTime--active     /* Active countdown timer */
.gallery-item            /* Individual listing card - PRIMARY TARGET */
.thumbnail               /* Bootstrap thumbnail - used for listings */
```

### Detail Page
```css
.detail__imageContainer  /* Main image container on detail pages */
.section-title           /* Section headings */
```

### Homepage
```css
.hp-announce             /* Homepage announcement area */
```

### Badges
```css
.listing-badge           /* Listing status badge - PRIMARY TARGET */
.listing-badge:before    /* Badge pseudo-element */
.listing-badge:after     /* Badge pseudo-element */
```

---

## AuctionWorx Real-Time Classes

**CRITICAL: These classes MUST NOT be removed or renamed - they power SignalR real-time updates**

### System Messaging
```css
.awe-rt-SystemMessage
.awe-rt-ListingActionMessage
.awe-rt-ListingClosedMessage
.awe-alert-signalr
.awe-refresh-alert
.awe-rt-RefreshAlert
.InlineContextualStatus
.ContextualStatus
```

### User Actions
```css
.awe-delete-listing-link
.awe-end-early-link
.awe-category-back-link
```

### Item Data (Real-Time Updated)
```css
.awe-rt-CurrentPrice          /* Current bid price - updates live */
.awe-rt-Quantity
.awe-rt-endingDTTM
.awe-rt-startingDTTM
.Bidding_Local_Price
.NumberPart
.awe-rt-BuyBox
.awe-rt-AcceptedListingActionCount
.awe-rt-BuyNowPrice
.awe-rt-Status
.awe-rt-ColoredStatus
.awe-rt-MinimumBid
.Bidding_Listing_MinPrice
.bid-conf-title
.awe-rt-BuyItNowContainer
.awe-rt-BuyItNowAvailable
.awe-rt-MakeOfferContainer
```

### Status Display Classes
```css
.awe-rt-ShowStatusPreview
.awe-rt-ShowStatusScheduled
.awe-rt-ShowStatusActive
.awe-rt-ShowStatusClosing
.awe-rt-ShowStatusArchived
.awe-rt-ShowStatusSuccessful
.awe-rt-ShowStatusUnsuccessful
.awe-rt-ShowStatusDraft
.awe-rt-ShowStatusPending
.awe-rt-ShowStatusAwaitingPayment
.awe-rt-ShowStatusFailedValidation
.awe-rt-ShowStatusValidated
.awe-rt-ShowStatusPaused
.awe-rt-HideStatusPaused
```

### Visibility Toggles
```css
.awe-rt-Active
.awe-rt-Pending
.awe-rt-Done
.awe-rt-Ended
.awe-rt-hideable
.awe-rt-Hide
.awe-rt-ShowStatus
.awe-rt-ShowOnStart
.awe-rt-HideOnStart
.awe-rt-ShowOnEnd
.awe-rt-HideOnEnd
```

### Event Edition Specific
```css
.awe-rt-eventtimelabel
.awe-rt-eventbidstatuslabel
.awe-rt-eventtimecountdown
.awe-rt-PublishCompletedMessage
.awe-rt-PublishIndicator
.awe-rt-ValidationIndicator
.awe-rt-ShowOnBiddingStarted
.awe-rt-ShowOnClosingStarted
.awe-rt-ShowOnBiddingEnded
.awe-rt-HideOnBiddingStarted
.awe-rt-HideOnClosingStarted
.awe-rt-HideOnBiddingEnded
```

### General System
```css
.signalr-pulse-block
.signalr-pulse
.awe-short-date
.awe-date-only
.SignalRStatus-connected
.SignalRStatus-reconnect
.SignalRStatus-stopped
.awe-rt-Extended
.awe-hidden
```

---

## Bootstrap 3 Component Classes

### Complete Navbar Reference
```css
/* Base */
.navbar
.navbar-default          /* Light navbar */
.navbar-inverse          /* Dark navbar */

/* Positioning */
.navbar-fixed-top        /* Fixed at top (add body padding-top: 70px) */
.navbar-fixed-bottom     /* Fixed at bottom */
.navbar-static-top       /* Scrolls with content */

/* Components */
.navbar-header           /* Brand + toggle container */
.navbar-brand            /* Logo/brand text */
.navbar-toggle           /* Mobile hamburger button */
.navbar-collapse         /* Collapsible content */
.navbar-nav              /* Nav list */
.navbar-form             /* Form in navbar */
.navbar-btn              /* Button in navbar */
.navbar-text             /* Text in navbar */
.navbar-link             /* Link in navbar text */

/* Alignment */
.navbar-left
.navbar-right
```

### Dropdown Classes
```css
.dropdown
.dropup
.dropdown-toggle
.dropdown-menu
.dropdown-menu-right
.dropdown-menu-left
.dropdown-header
.divider
.disabled
```

---

## Color System

### Bootstrap 3 Brand Colors
```less
@brand-primary:   #337ab7;   /* Blue */
@brand-success:   #5cb85c;   /* Green */
@brand-info:      #5bc0de;   /* Light Blue */
@brand-warning:   #f0ad4e;   /* Orange */
@brand-danger:    #d9534f;   /* Red */
```

### Bootstrap 3 Grayscale
```less
@gray-darker:     #222;
@gray-dark:       #333;
@gray:            #555;
@gray-light:      #777;
@gray-lighter:    #eee;
```

### AuctionWorx Default Colors
```css
/* Header */
#151C3D             /* Default header-splash background (dark navy) */

/* Backgrounds */
#f5f5f5             /* Light gray background */
#222222             /* Dark footer background */

/* Badges */
#CC1100             /* Sale badge border */
#9D1309             /* Sale badge accent */

/* Links */
#551A8B             /* Visited link example */
#7F00FF             /* Link hover example */
```

---

## Typography

### Bootstrap 3 Font Stack
```less
@font-family-sans-serif: "Helvetica Neue", Helvetica, Arial, sans-serif;
@font-family-serif:      Georgia, "Times New Roman", Times, serif;
@font-family-monospace:  Menlo, Monaco, Consolas, "Courier New", monospace;
@font-family-base:       @font-family-sans-serif;
```

### Font Sizes
```less
@font-size-base:    14px;
@font-size-large:   18px;  /* ~ceil(14px * 1.25) */
@font-size-small:   12px;  /* ~ceil(14px * 0.85) */

@font-size-h1:      36px;
@font-size-h2:      30px;
@font-size-h3:      24px;
@font-size-h4:      18px;
@font-size-h5:      14px;
@font-size-h6:      12px;

@line-height-base:  1.428571429;  /* 20/14 */
```

### Typography Classes
```css
/* Headings */
.h1, .h2, .h3, .h4, .h5, .h6

/* Alignment */
.text-left
.text-center
.text-right
.text-justify
.text-nowrap

/* Transformation */
.text-lowercase
.text-uppercase
.text-capitalize

/* Contextual Colors */
.text-muted
.text-primary
.text-success
.text-info
.text-warning
.text-danger
```

---

## Button Classes

### Button Styles
```css
.btn                 /* Base button class - REQUIRED */
.btn-default         /* Default/secondary button */
.btn-primary         /* Primary action button - PRIMARY TARGET */
.btn-success         /* Success/positive button */
.btn-info            /* Informational button */
.btn-warning         /* Warning button */
.btn-danger          /* Danger/negative button */
.btn-link            /* Button styled as link */
```

### Button Sizes
```css
.btn-lg              /* Large button */
.btn-sm              /* Small button */
.btn-xs              /* Extra small button */
.btn-block           /* Full-width block button */
```

### Button States
```css
.active              /* Pressed/active state */
.disabled            /* Disabled state (also disabled attribute) */
```

### Button Groups
```css
.btn-group
.btn-group-vertical
.btn-group-justified
.btn-group-lg
.btn-group-sm
.btn-group-xs
.btn-toolbar
```

---

## Form Classes

### Form Layouts
```css
/* Default - stacked */
.form-group          /* Container for label + input */

/* Inline Form (≥768px) */
.form-inline

/* Horizontal Form */
.form-horizontal
.control-label       /* Label in horizontal form */
```

### Form Controls
```css
.form-control        /* Input/select/textarea - PRIMARY TARGET */
.input-lg            /* Large input */
.input-sm            /* Small input */
.form-group-lg       /* Large form group */
.form-group-sm       /* Small form group */
```

### Validation States
```css
.has-success         /* Success state on form-group */
.has-warning         /* Warning state */
.has-error           /* Error state */
.has-feedback        /* Enable feedback icons */
.form-control-feedback  /* Feedback icon */
```

### Checkboxes & Radios
```css
.checkbox            /* Checkbox container */
.checkbox-inline     /* Inline checkbox */
.radio               /* Radio container */
.radio-inline        /* Inline radio */
```

### Input Groups
```css
.input-group
.input-group-addon
.input-group-btn
.input-group-lg
.input-group-sm
```

---

## Panel & Card Classes

**Note: Bootstrap 3 uses Panels (not Cards like Bootstrap 4+)**

```css
.panel               /* Base panel container */
.panel-default       /* Default styling */
.panel-primary       /* Primary color */
.panel-success       /* Success color */
.panel-info          /* Info color */
.panel-warning       /* Warning color */
.panel-danger        /* Danger color */

.panel-heading       /* Panel header */
.panel-title         /* Title in heading */
.panel-body          /* Main content */
.panel-footer        /* Panel footer */
```

### Wells (Inset Containers)
```css
.well
.well-lg
.well-sm
```

---

## Badge & Label Classes

### Badges
```css
.badge               /* Inline count badge */
```

### Labels
```css
.label               /* Base label */
.label-default
.label-primary
.label-success
.label-info
.label-warning
.label-danger
```

---

## Table Classes

```css
.table               /* Base table styling */
.table-striped       /* Zebra striping */
.table-bordered      /* Borders on all sides */
.table-hover         /* Hover state on rows */
.table-condensed     /* Compact padding */
.table-responsive    /* Wrapper for horizontal scroll */

/* Contextual Row/Cell Classes */
.active
.success
.warning
.danger
.info
```

---

## Helper Classes

### Floats
```css
.pull-left
.pull-right
.center-block
.clearfix
```

### Display
```css
.show                /* display: block */
.hidden              /* display: none */
.invisible           /* visibility: hidden */
.sr-only             /* Screen readers only */
.sr-only-focusable   /* Visible on focus for SR */
```

### Contextual Backgrounds
```css
.bg-primary
.bg-success
.bg-info
.bg-warning
.bg-danger
```

### Close & Caret
```css
.close               /* X close button */
.caret               /* Dropdown arrow */
```

### Images
```css
.img-responsive      /* max-width: 100% */
.img-rounded         /* border-radius: 6px */
.img-circle          /* border-radius: 50% */
.img-thumbnail       /* Bordered thumbnail */
```

---

## Responsive Utilities

### Visibility by Breakpoint
| Class | XS (<768) | SM (≥768) | MD (≥992) | LG (≥1200) |
|-------|:---------:|:---------:|:---------:|:----------:|
| `.visible-xs-*` | Visible | Hidden | Hidden | Hidden |
| `.visible-sm-*` | Hidden | Visible | Hidden | Hidden |
| `.visible-md-*` | Hidden | Hidden | Visible | Hidden |
| `.visible-lg-*` | Hidden | Hidden | Hidden | Visible |
| `.hidden-xs` | Hidden | Visible | Visible | Visible |
| `.hidden-sm` | Visible | Hidden | Visible | Visible |
| `.hidden-md` | Visible | Visible | Hidden | Visible |
| `.hidden-lg` | Visible | Visible | Visible | Hidden |

### Display Type Variants
```css
.visible-xs-block
.visible-xs-inline
.visible-xs-inline-block
/* Same pattern for sm, md, lg */
```

### Print Classes
```css
.visible-print-block
.visible-print-inline
.visible-print-inline-block
.hidden-print
```

---

## AWX File Paths

### CSS Location
```
/Content/                        # Custom CSS uploads
/Content/AWE_Bootstrap3.css      # Starting point for customization
```

### View/Template Files
```
/Views/Shared/_layout.cshtml                    # Master layout (header/footer)
/Views/Home/HomePageFeaturedListings.cshtml     # Homepage listings
/Views/Shared/AuctionThumbnail.cshtml           # Auction listing card
/Views/Shared/FixedPriceThumbnail.cshtml        # Fixed price listing card
/Views/Shared/ClassifiedThumbnail.cshtml        # Classified listing card
```

### Dynamic Bundling
```
RainWorx.FrameWorx.MVC/App_Start/BundleConfig.css
```

---

## CMS Integration Points

### Header Scripts Area
**Location:** Admin > CMS > Content > Header Scripts

Use for:
- Custom `<style>` blocks
- Custom `<script>` blocks
- External CSS links
- External JS links

### Content Areas
- Homepage content
- Footer content
- Announcement areas

### Email Templates
**Location:** Admin > CMS > Email Templates

Requirements:
- Use full URLs for images: `https://www.mysite.com/images/email-logo.jpg`
- NOT relative paths: `/images/email-logo.jpg` (won't work)

---

## Critical Constraints

### DO NOT MODIFY OR REMOVE
1. All `.awe-*` classes - Required for real-time updates
2. All `.signalr-*` classes - Required for bidding functionality
3. SignalR JavaScript variables
4. Data attributes on listing elements

### Bootstrap 3 Limitations
1. No CSS Grid (use float-based grid only)
2. No Flexbox utilities (must add custom)
3. No CSS custom properties (CSS variables) in core
4. Limited responsive utilities compared to modern frameworks
5. jQuery required for components

### Image Constraints
- Single Row Menu logo: **maximum height 150px**
- Gallery aspect ratios: 4x3 (Landscape), 1x1 (Square), 3x4 (Portrait)

### Browser Requirements
- Must support Bootstrap 3.4 compatible browsers
- IE9+ (though IE11+ recommended)

---

## CSS Implementation Methods

### Method 1: Inline in Header Scripts (Recommended for small changes)
```html
<style>
.header-splash { background-color: #ffffff; }
</style>
```

### Method 2: External CSS File (Recommended for larger themes)
```html
<!-- In Header Scripts -->
<link href="/Content/my-custom-theme.css" rel="stylesheet">
```

### Method 3: In _layout.cshtml
```html
<!-- Before </head> -->
<link href="/Content/my-custom-theme.css" rel="stylesheet">
```

### Method 4: Dynamic Bundling
Add to `BundleConfig.css` for production optimization.

---

## Theme Engine Target Classes Summary

### Primary Targets (Most Impact)
| Element | Classes to Target |
|---------|-------------------|
| Header | `.header-splash`, `.navbar-default`, `.navbar-nav > li > a` |
| Cards | `.gallery-item`, `.thumbnail`, `.galleryTitle`, `.galleryPrice` |
| Buttons | `.btn-primary`, `.btn-default`, `.btn` |
| Forms | `.form-control` |
| Badges | `.listing-badge`, `.label`, `.badge` |
| Footer | `.footer`, `footer` |
| Navigation | `.dropdown-menu`, `.navbar-collapse` |

### Secondary Targets
| Element | Classes to Target |
|---------|-------------------|
| Panels | `.panel`, `.panel-*` |
| Alerts | `.alert`, `.alert-*` |
| Tables | `.table`, `.table-*` |
| Wells | `.well` |
| Pagination | `.pagination` |

---

## Testing Checklist

When applying custom CSS, test on:
- [ ] Homepage
- [ ] Listing Detail pages (Auction, Fixed Price, Classified)
- [ ] Browse/Search results
- [ ] My Account section
- [ ] Sales and Purchase invoices
- [ ] Mobile devices (<768px)
- [ ] Tablets (768px-991px)
- [ ] Desktop (992px+)
- [ ] Large screens (1200px+)

---

*This document is the source of truth for the AuctionWorx Theme Engine.*
*Reference Bootstrap 3.4 documentation for full details: https://getbootstrap.com/docs/3.4/*
