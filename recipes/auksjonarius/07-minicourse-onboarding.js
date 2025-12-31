/*
 * AUKSJONARIUS RECIPE: MiniCourse Seller Onboarding Widget
 * Difficulty: Easy
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * Integrates MiniCourse for guided seller tutorials.
 * Create courses at: https://minicourse.com
 *
 * Usage: Embeds an interactive course popup to guide new sellers
 * through listing creation, auction management, etc.
 */

(function() {
    'use strict';

    // MiniCourse Configuration
    var MINICOURSE_CONFIG = {
        // Replace with your actual MiniCourse code
        // Example: "selge-pa-auksjonarius-638748639774658502"
        code: "YOUR_MINICOURSE_CODE_HERE",

        // Show on these pages (optional - leave empty to show everywhere)
        showOnPaths: [
            '/Seller',
            '/Account/CreateListing',
            '/Account/ManageListings'
        ],

        // Auto-show on first visit (uses localStorage)
        autoShowFirstVisit: true
    };

    function initMiniCourse() {
        // Check if we should show on this page
        if (MINICOURSE_CONFIG.showOnPaths.length > 0) {
            var currentPath = window.location.pathname;
            var shouldShow = MINICOURSE_CONFIG.showOnPaths.some(function(path) {
                return currentPath.indexOf(path) === 0;
            });
            if (!shouldShow) return;
        }

        // Check first visit
        if (MINICOURSE_CONFIG.autoShowFirstVisit) {
            var hasSeenCourse = localStorage.getItem('minicourse_seen_' + MINICOURSE_CONFIG.code);
            if (hasSeenCourse) return;
        }

        // Load MiniCourse script
        var script = document.createElement('script');
        script.src = 'https://app.minicourse.com/embed.js';
        script.async = true;
        script.onload = function() {
            if (typeof MiniCourse !== 'undefined') {
                var app = new MiniCourse();
                app.init({
                    code: MINICOURSE_CONFIG.code
                });

                // Mark as seen
                if (MINICOURSE_CONFIG.autoShowFirstVisit) {
                    localStorage.setItem('minicourse_seen_' + MINICOURSE_CONFIG.code, 'true');
                }
            }
        };
        document.head.appendChild(script);
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMiniCourse);
    } else {
        initMiniCourse();
    }
})();

/*
 * MANUAL TRIGGER:
 *
 * If you want to add a "Help" or "Tutorial" button, use this HTML:
 *
 * <button onclick="showMiniCourse()">Se veiledning</button>
 *
 * And add this function to your scripts:
 *
 * function showMiniCourse() {
 *     var app = new MiniCourse();
 *     app.show({ code: "YOUR_MINICOURSE_CODE_HERE" });
 * }
 */
