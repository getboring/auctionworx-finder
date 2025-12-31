/*
 * MUNICIBID RECIPE: Sticky Header JavaScript
 * Difficulty: ⭐ Easy
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * Adds 'scrolled' class to header when user scrolls down.
 */

(function() {
    'use strict';

    // Wait for DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        var header = document.querySelector('.header-splash');
        var scrollThreshold = 50; // pixels before triggering

        if (!header) return;

        function handleScroll() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Listen for scroll with throttling for performance
        var ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // Check initial state
        handleScroll();
    });
})();
