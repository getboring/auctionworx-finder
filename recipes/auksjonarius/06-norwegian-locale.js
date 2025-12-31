/*
 * AUKSJONARIUS RECIPE: Norwegian Locale Configuration
 * Difficulty: Easy
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * Configures Globalize.js for Norwegian (Bokmal) locale.
 * Handles date/time formatting, currency (NOK), and number formatting.
 */

(function() {
    'use strict';

    // Wait for Globalize to be available
    function initNorwegianLocale() {
        if (typeof Globalize === 'undefined') {
            console.warn('Globalize.js not loaded - Norwegian locale not applied');
            return;
        }

        // Set Norwegian Bokmal locale
        Globalize.locale('nb');

        // If Globalize isn't available, apply basic formatting
        applyNorwegianFormatting();
    }

    // Fallback formatting for dates and numbers
    function applyNorwegianFormatting() {
        // Norwegian date format: DD.MM.YYYY
        // Norwegian number format: 1 234,56 (space for thousands, comma for decimals)

        // Format price displays
        document.querySelectorAll('.price, .listing-price, .galleryPrice').forEach(function(el) {
            var text = el.textContent.trim();
            // Convert USD format to NOK format if needed
            // $1,234.56 -> 1 234,56 kr
            var match = text.match(/[\$]?([\d,]+)\.?(\d{0,2})/);
            if (match) {
                var whole = match[1].replace(/,/g, ' ');
                var decimals = match[2] || '00';
                // Only apply if not already formatted
                if (!text.includes('kr') && !text.includes('NOK')) {
                    // Uncomment to auto-convert: el.textContent = whole + ',' + decimals + ' kr';
                }
            }
        });

        // Format dates - DD.MM.YYYY
        document.querySelectorAll('.date, .listing-date, .auction-date').forEach(function(el) {
            var text = el.textContent.trim();
            // Convert MM/DD/YYYY to DD.MM.YYYY
            var match = text.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
            if (match) {
                el.textContent = match[2] + '.' + match[1] + '.' + match[3];
            }
        });
    }

    // Norwegian month names (for custom date displays)
    var norwegianMonths = [
        'januar', 'februar', 'mars', 'april', 'mai', 'juni',
        'juli', 'august', 'september', 'oktober', 'november', 'desember'
    ];

    var norwegianDays = [
        'sondag', 'mandag', 'tirsdag', 'onsdag',
        'torsdag', 'fredag', 'lordag'
    ];

    // Expose for use elsewhere
    window.NorwegianLocale = {
        months: norwegianMonths,
        days: norwegianDays,
        formatDate: function(date) {
            var d = new Date(date);
            return d.getDate() + '. ' + norwegianMonths[d.getMonth()] + ' ' + d.getFullYear();
        },
        formatNumber: function(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        },
        formatCurrency: function(amount) {
            var parts = parseFloat(amount).toFixed(2).split('.');
            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ',' + parts[1] + ' kr';
        }
    };

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNorwegianLocale);
    } else {
        initNorwegianLocale();
    }
})();
