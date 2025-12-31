/*
 * MAGNOLIA PEARL RECIPE: Currency Converter Widget
 * Difficulty: Moderate
 * Apply via: CMS > Content > Header Scripts (within <script> tags)
 *
 * Adds a currency selector dropdown that converts displayed prices.
 * Useful for international fashion/retail auction sites.
 *
 * Supported currencies: USD, GBP, EUR, AUD, CAD
 *
 * Note: Uses approximate static rates. For production, integrate
 * with a live exchange rate API like exchangerate-api.com
 */

(function() {
    'use strict';

    // Static exchange rates (USD as base)
    // Update these periodically or integrate with live API
    var EXCHANGE_RATES = {
        'USD': 1.00,
        'GBP': 0.79,
        'EUR': 0.92,
        'AUD': 1.53,
        'CAD': 1.36
    };

    var CURRENCY_SYMBOLS = {
        'USD': '$',
        'GBP': '\u00A3',
        'EUR': '\u20AC',
        'AUD': 'A$',
        'CAD': 'C$'
    };

    var STORAGE_KEY = 'mp_preferred_currency';
    var currentCurrency = 'USD';
    var originalPrices = new Map();

    // Add styles
    function addStyles() {
        var css = [
            '.currency-selector { position: relative; display: inline-block; margin-left: 15px; }',
            ".currency-selector select { appearance: none; background: transparent; border: 1px solid #e7e7e7; padding: 6px 28px 6px 12px; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 14px; color: #594E4B; cursor: pointer; border-radius: 0; }",
            '.currency-selector select:focus { outline: none; border-color: #e838bf; }',
            '.currency-selector::after { content: ""; position: absolute; right: 10px; top: 50%; transform: translateY(-50%); border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 5px solid #594E4B; pointer-events: none; }',
            '.currency-selector select:focus + ::after { border-top-color: #e838bf; }'
        ];

        var style = document.createElement('style');
        style.textContent = css.join('\n');
        document.head.appendChild(style);
    }

    // Get stored currency preference
    function getStoredCurrency() {
        try {
            return localStorage.getItem(STORAGE_KEY) || 'USD';
        } catch (e) {
            return 'USD';
        }
    }

    // Store currency preference
    function storeCurrency(currency) {
        try {
            localStorage.setItem(STORAGE_KEY, currency);
        } catch (e) {
            // localStorage not available
        }
    }

    // Parse price string to number
    function parsePrice(priceStr) {
        // Remove currency symbols and convert to number
        var cleaned = priceStr.replace(/[^0-9.,]/g, '');
        // Handle comma as thousands separator
        cleaned = cleaned.replace(/,/g, '');
        return parseFloat(cleaned) || 0;
    }

    // Format price with currency symbol
    function formatPrice(amount, currency) {
        var symbol = CURRENCY_SYMBOLS[currency] || '$';
        return symbol + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // Convert price from USD to target currency
    function convertPrice(usdAmount, targetCurrency) {
        var rate = EXCHANGE_RATES[targetCurrency] || 1;
        return usdAmount * rate;
    }

    // Find and store original prices
    function captureOriginalPrices() {
        var priceSelectors = [
            '.galleryPrice',
            '.current-bid',
            '.listing-price',
            '.price',
            '[data-price]'
        ];

        var elements = document.querySelectorAll(priceSelectors.join(', '));

        elements.forEach(function(el) {
            if (!originalPrices.has(el)) {
                var priceText = el.getAttribute('data-price') || el.textContent;
                var priceValue = parsePrice(priceText);
                if (priceValue > 0) {
                    originalPrices.set(el, priceValue);
                }
            }
        });
    }

    // Update all prices to new currency
    function updatePrices(currency) {
        captureOriginalPrices();

        originalPrices.forEach(function(usdPrice, el) {
            var converted = convertPrice(usdPrice, currency);
            el.textContent = formatPrice(converted, currency);
        });
    }

    // Create currency selector dropdown
    function createSelector() {
        var container = document.createElement('div');
        container.className = 'currency-selector';

        var select = document.createElement('select');
        select.setAttribute('aria-label', 'Select currency');

        Object.keys(CURRENCY_SYMBOLS).forEach(function(code) {
            var option = document.createElement('option');
            option.value = code;
            option.textContent = code + ' (' + CURRENCY_SYMBOLS[code] + ')';
            if (code === currentCurrency) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        select.addEventListener('change', function() {
            currentCurrency = this.value;
            storeCurrency(currentCurrency);
            updatePrices(currentCurrency);
        });

        container.appendChild(select);
        return container;
    }

    // Insert selector into navigation
    function insertSelector() {
        var selector = createSelector();

        // Try to find navigation area
        var navTargets = [
            '.nav-secondary .navbar-right',
            '.navbar-nav.navbar-right',
            '.header-actions',
            '.top-bar'
        ];

        var target = null;
        for (var i = 0; i < navTargets.length; i++) {
            target = document.querySelector(navTargets[i]);
            if (target) break;
        }

        if (target) {
            // Wrap in li if inside navbar-nav
            if (target.classList.contains('navbar-nav')) {
                var li = document.createElement('li');
                li.appendChild(selector);
                target.appendChild(li);
            } else {
                target.appendChild(selector);
            }
        } else {
            // Fallback: add to header
            var header = document.querySelector('.header-splash, header');
            if (header) {
                selector.style.position = 'absolute';
                selector.style.top = '10px';
                selector.style.right = '20px';
                header.style.position = 'relative';
                header.appendChild(selector);
            }
        }
    }

    // Initialize
    function init() {
        addStyles();
        currentCurrency = getStoredCurrency();
        insertSelector();

        // Apply stored currency preference
        if (currentCurrency !== 'USD') {
            updatePrices(currentCurrency);
        }

        // Re-capture prices when DOM changes (AJAX updates)
        var observer = new MutationObserver(function() {
            if (currentCurrency !== 'USD') {
                updatePrices(currentCurrency);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
