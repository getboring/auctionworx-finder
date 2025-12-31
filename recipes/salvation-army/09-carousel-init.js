/*
 * SALVATION ARMY RECIPE: Banner Carousel Initialization
 * Difficulty: Easy
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * Initializes Owl Carousel for promotional banners.
 * Use with 03-promotional-carousel.css for complete styling.
 */

(function() {
    'use strict';

    // Configuration
    var CAROUSEL_CONFIG = {
        // Number of banners to show at once
        items: 1,

        // Enable infinite loop
        loop: true,

        // Auto-advance slides
        autoplay: true,
        autoplayTimeout: 5000,  // 5 seconds per slide
        autoplayHoverPause: true,  // Pause on mouse hover

        // Navigation arrows
        nav: true,
        navText: [
            '<span aria-label="Previous">&#8249;</span>',
            '<span aria-label="Next">&#8250;</span>'
        ],

        // Dots navigation
        dots: true,

        // Animation
        smartSpeed: 500,

        // Accessibility
        autoplaySpeed: 500,

        // Responsive settings (optional)
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: true
            }
        }
    };

    // Load Owl Carousel CSS if not present
    function loadCarouselCSS() {
        if (!document.querySelector('link[href*="owl.carousel"]')) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css';
            document.head.appendChild(link);

            var linkTheme = document.createElement('link');
            linkTheme.rel = 'stylesheet';
            linkTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css';
            document.head.appendChild(linkTheme);
        }
    }

    // Load Owl Carousel JS if not present
    function loadCarouselJS(callback) {
        if (typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel !== 'undefined') {
            callback();
            return;
        }

        // Load jQuery first if needed
        if (typeof jQuery === 'undefined') {
            var jqueryScript = document.createElement('script');
            jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
            jqueryScript.onload = loadOwl;
            document.head.appendChild(jqueryScript);
        } else {
            loadOwl();
        }

        function loadOwl() {
            var owlScript = document.createElement('script');
            owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
            owlScript.onload = callback;
            document.head.appendChild(owlScript);
        }
    }

    // Initialize carousel
    function initCarousel() {
        var $carousel = jQuery('.promo-carousel, .banner-carousel, .owl-carousel');

        if ($carousel.length === 0) {
            console.log('No carousel element found. Add class "promo-carousel" to your banner container.');
            return;
        }

        $carousel.owlCarousel(CAROUSEL_CONFIG);

        // Pause on keyboard focus (accessibility)
        $carousel.on('keydown', function(e) {
            var owl = $carousel.data('owl.carousel');
            if (e.keyCode === 37) { // Left arrow
                owl.prev();
            } else if (e.keyCode === 39) { // Right arrow
                owl.next();
            }
        });

        console.log('Promotional carousel initialized');
    }

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        loadCarouselCSS();
        loadCarouselJS(initCarousel);
    });

})();

/*
 * USAGE:
 *
 * 1. Add this HTML structure to your homepage:
 *
 * <div class="promo-carousel">
 *     <div class="banner-slide" style="background-image: url('/Content/Images/banners/sale.jpg');">
 *         <div class="banner-content">
 *             <h2>Summer Sale - Up to 50% Off!</h2>
 *             <p>Shop our biggest sale of the season</p>
 *             <a href="/Browse?sale=summer" class="banner-cta">Shop Now</a>
 *         </div>
 *     </div>
 *     <div class="banner-slide" style="background-image: url('/Content/Images/banners/furniture.jpg');">
 *         <div class="banner-content">
 *             <h2>New Furniture Arrivals</h2>
 *             <p>Quality furniture at thrift prices</p>
 *             <a href="/Browse?category=furniture" class="banner-cta">Browse Furniture</a>
 *         </div>
 *     </div>
 *     <div class="banner-slide" style="background-image: url('/Content/Images/banners/donate.jpg');">
 *         <div class="banner-content">
 *             <h2>Your Donations Make a Difference</h2>
 *             <p>Schedule a free pickup today</p>
 *             <a href="/page/donate" class="banner-cta">Donate Now</a>
 *         </div>
 *     </div>
 * </div>
 *
 * 2. Include 03-promotional-carousel.css for styling
 *
 * CUSTOMIZATION:
 * - Change autoplayTimeout for faster/slower transitions
 * - Set loop: false to stop at last slide
 * - Adjust responsive breakpoints for different screen sizes
 */
