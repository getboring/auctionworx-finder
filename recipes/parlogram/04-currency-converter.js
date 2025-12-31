/*
 * PARLOGRAM RECIPE: Multi-Currency Converter
 * Difficulty: Moderate
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * JavaScript for converting and displaying prices in multiple currencies.
 * Parlogram supports 13+ currencies for their international collector base.
 * Integrates with 02-multi-currency-display.css for styling.
 */

(function() {
    'use strict';

    // Supported currencies (add/remove as needed)
    var CURRENCIES = ['GBP', 'EUR', 'USD', 'CAD', 'AUD', 'NZD',
        'CHF', 'SEK', 'NOK', 'DKK', 'JPY', 'HKD', 'SGD'];

    // Exchange rates relative to USD (update these regularly)
    // Last updated: Check xe.com or similar for current rates
    var RATES_TO_USD = {
        GBP: 0.79,
        EUR: 0.92,
        USD: 1.00,
        CAD: 1.36,
        AUD: 1.53,
        NZD: 1.64,
        CHF: 0.88,
        SEK: 10.42,
        NOK: 10.78,
        DKK: 6.87,
        JPY: 149.50,
        HKD: 7.81,
        SGD: 1.34
    };

    // Convert from one currency to another
    function convertCurrency(amount, fromCurrency, toCurrency) {
        if (!RATES_TO_USD[fromCurrency] || !RATES_TO_USD[toCurrency]) {
            console.warn('Unknown currency:', fromCurrency, 'or', toCurrency);
            return amount;
        }

        // Convert to USD first, then to target currency
        var usdAmount = amount / RATES_TO_USD[fromCurrency];
        return usdAmount * RATES_TO_USD[toCurrency];
    }

    // Format price with appropriate decimal places
    function formatPrice(amount, currency) {
        // Japanese Yen doesn't use decimals
        var decimals = (currency === 'JPY') ? 0 : 2;

        return amount.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // Get currency symbol
    function getCurrencySymbol(currency) {
        var symbols = {
            GBP: '\u00A3',
            EUR: '\u20AC',
            USD: '$',
            CAD: 'CA$',
            AUD: 'A$',
            NZD: 'NZ$',
            CHF: 'CHF ',
            SEK: 'SEK ',
            NOK: 'NOK ',
            DKK: 'DKK ',
            JPY: '\u00A5',
            HKD: 'HK$',
            SGD: 'S$'
        };
        return symbols[currency] || currency + ' ';
    }

    // Display price in multiple currencies
    function displayMultiCurrency(element, amount, baseCurrency, showCurrencies) {
        if (!element) return;

        baseCurrency = baseCurrency || 'GBP';
        showCurrencies = showCurrencies || ['GBP', 'EUR', 'USD'];

        var html = '<div class="price-display">';

        showCurrencies.forEach(function(currency, index) {
            var convertedAmount = convertCurrency(amount, baseCurrency, currency);
            var cssClass = index === 0 ? 'price-primary' : 'price-secondary';
            cssClass += ' price-' + currency.toLowerCase();

            html += '<span class="' + cssClass + '">';
            html += formatPrice(convertedAmount, currency);
            html += '</span>';
        });

        html += '</div>';
        element.innerHTML = html;
    }

    // Auto-convert all prices on the page
    function convertAllPrices(baseCurrency, showCurrencies) {
        var priceElements = document.querySelectorAll('[data-price]');

        priceElements.forEach(function(el) {
            var amount = parseFloat(el.dataset.price);
            var currency = el.dataset.currency || baseCurrency;

            if (!isNaN(amount)) {
                displayMultiCurrency(el, amount, currency, showCurrencies);
            }
        });
    }

    // Currency selector change handler
    function setupCurrencySelector() {
        var selector = document.querySelector('#currency-selector, .currency-select');

        if (selector) {
            selector.addEventListener('change', function() {
                var selectedCurrency = this.value;
                document.cookie = 'preferred_currency=' + selectedCurrency + ';path=/;max-age=31536000';
                convertAllPrices('GBP', [selectedCurrency, 'GBP', 'EUR']);
            });
        }
    }

    // Get user's preferred currency from cookie
    function getPreferredCurrency() {
        var match = document.cookie.match(/preferred_currency=([^;]+)/);
        return match ? match[1] : 'GBP';
    }

    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        setupCurrencySelector();

        // Auto-convert prices if data-price attributes exist
        var pricesExist = document.querySelector('[data-price]');
        if (pricesExist) {
            var preferred = getPreferredCurrency();
            convertAllPrices('GBP', [preferred, 'EUR', 'USD']);
        }
    });

    // Expose functions globally for manual use
    window.ParlogramCurrency = {
        convert: convertCurrency,
        format: formatPrice,
        symbol: getCurrencySymbol,
        display: displayMultiCurrency,
        convertAll: convertAllPrices,
        rates: RATES_TO_USD,
        currencies: CURRENCIES
    };

})();

/*
 * USAGE NOTES:
 *
 * Method 1: Auto-conversion with data attributes
 * <span data-price="87.99" data-currency="GBP"></span>
 *
 * Method 2: Manual JavaScript call
 * ParlogramCurrency.display(element, 87.99, 'GBP', ['GBP', 'EUR', 'USD']);
 *
 * Method 3: Simple conversion
 * var eurPrice = ParlogramCurrency.convert(87.99, 'GBP', 'EUR');
 *
 * IMPORTANT: Update RATES_TO_USD regularly for accurate conversions.
 * Consider using an API like exchangerate-api.com for live rates.
 */
