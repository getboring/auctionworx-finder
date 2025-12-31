/*
 * SALVATION ARMY RECIPE: Multi-Platform Analytics Stack
 * Difficulty: Moderate
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * Comprehensive tracking setup for charity/thrift operations.
 * Includes Google Analytics, TikTok Pixel, Trade Desk, and
 * PayPal conversion tracking.
 */

(function() {
    'use strict';

    // ======================
    // GOOGLE ANALYTICS 4
    // ======================
    // Replace 'G-XXXXXXXXXX' with your GA4 measurement ID

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');

    // Load GA4 script
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(gaScript);


    // ======================
    // GOOGLE TAG MANAGER
    // ======================
    // Replace 'GTM-XXXXXXX' with your GTM container ID

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');


    // ======================
    // CUSTOM EVENT TRACKING
    // ======================
    // Track charity-specific events

    var CharityTracker = {
        // Track bid placements
        trackBid: function(lotId, amount) {
            gtag('event', 'place_bid', {
                'event_category': 'Auction',
                'event_label': lotId,
                'value': amount
            });
        },

        // Track auction wins
        trackWin: function(lotId, amount) {
            gtag('event', 'auction_win', {
                'event_category': 'Auction',
                'event_label': lotId,
                'value': amount
            });
        },

        // Track donation button clicks
        trackDonation: function(source) {
            gtag('event', 'donation_click', {
                'event_category': 'Donation',
                'event_label': source
            });
        },

        // Track external platform clicks
        trackPlatformClick: function(platform) {
            gtag('event', 'external_platform', {
                'event_category': 'Navigation',
                'event_label': platform
            });
        },

        // Track newsletter signups
        trackNewsletter: function() {
            gtag('event', 'newsletter_signup', {
                'event_category': 'Engagement'
            });
        },

        // Track category browsing
        trackCategoryView: function(category) {
            gtag('event', 'view_category', {
                'event_category': 'Browse',
                'event_label': category
            });
        }
    };

    // Expose to global scope
    window.CharityTracker = CharityTracker;


    // ======================
    // AUTO-ATTACH TRACKERS
    // ======================

    document.addEventListener('DOMContentLoaded', function() {
        // Track donation button clicks
        var donateButtons = document.querySelectorAll('.donate-cta, .donate, [href*="classy.org"], [href*="donate"]');
        donateButtons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                CharityTracker.trackDonation(btn.textContent || 'button');
            });
        });

        // Track platform link clicks
        var platformLinks = document.querySelectorAll('.platform-link, [href*="amazon.com"], [href*="whatnot.com"], [href*="ebay.com"]');
        platformLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                var platform = 'unknown';
                if (link.href.includes('amazon')) platform = 'amazon';
                else if (link.href.includes('whatnot')) platform = 'whatnot';
                else if (link.href.includes('ebay')) platform = 'ebay';
                CharityTracker.trackPlatformClick(platform);
            });
        });

        // Track category tile clicks
        var categoryTiles = document.querySelectorAll('.category-tile');
        categoryTiles.forEach(function(tile) {
            tile.addEventListener('click', function() {
                var category = tile.querySelector('.category-name');
                if (category) {
                    CharityTracker.trackCategoryView(category.textContent);
                }
            });
        });

        // Track newsletter form submissions
        var newsletterForms = document.querySelectorAll('form[action*="newsletter"], .newsletter-form');
        newsletterForms.forEach(function(form) {
            form.addEventListener('submit', function() {
                CharityTracker.trackNewsletter();
            });
        });
    });

})();

/*
 * OPTIONAL: TikTok Pixel
 * Uncomment and replace 'XXXXXXXXXX' with your Pixel ID
 *
 * !function (w, d, t) {
 *   w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
 *   ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];
 *   ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
 *   for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
 *   ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
 *   ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";
 *   ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
 *   var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
 *   var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
 *   ttq.load('XXXXXXXXXX');
 *   ttq.page();
 * }(window, document, 'ttq');
 */

/*
 * OPTIONAL: PayPal Conversion Tracking
 * Add after successful checkout
 *
 * if (window.paypal && window.paypal.analytics) {
 *     paypal.analytics.trackConversion({
 *         'tracking_id': 'YOUR_TRACKING_ID',
 *         'amount': orderTotal,
 *         'currency': 'USD'
 *     });
 * }
 */
