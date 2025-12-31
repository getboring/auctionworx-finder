/*
 * PARLOGRAM RECIPE: Sort & Filter Enhancement
 * Difficulty: Easy
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * Auto-submits forms when sort/filter options change.
 * Improves UX by eliminating the need to click a separate "Apply" button.
 * Common pattern for auction sites with many filtering options.
 */

(function() {
    'use strict';

    // Selectors for sort/filter elements
    var SORT_SELECTORS = [
        '#SortFilterOptions',
        'select[name="sort"]',
        'select[name="SortBy"]',
        'select[name="OrderBy"]',
        '.sort-select'
    ];

    var FILTER_SELECTORS = [
        'select[name="category"]',
        'select[name="CategoryId"]',
        'select[name="condition"]',
        'select[name="format"]',
        '.filter-select'
    ];

    var PER_PAGE_SELECTORS = [
        'select[name="PageSize"]',
        'select[name="perPage"]',
        'select[name="ItemsPerPage"]',
        '.page-size-select'
    ];

    // Find the closest form to an element
    function getClosestForm(element) {
        return element.closest('form');
    }

    // Submit form with optional delay (for debouncing)
    function submitForm(form, delay) {
        delay = delay || 0;

        if (delay > 0) {
            setTimeout(function() {
                form.submit();
            }, delay);
        } else {
            form.submit();
        }
    }

    // Setup auto-submit for select elements
    function setupAutoSubmit(selectors, delay) {
        selectors.forEach(function(selector) {
            var elements = document.querySelectorAll(selector);

            elements.forEach(function(el) {
                // Skip if already initialized
                if (el.dataset.autoSubmit === 'true') return;

                el.addEventListener('change', function() {
                    var form = getClosestForm(this);
                    if (form) {
                        // Show loading indicator
                        showLoadingState();
                        submitForm(form, delay);
                    }
                });

                el.dataset.autoSubmit = 'true';
            });
        });
    }

    // Show loading state while form submits
    function showLoadingState() {
        var container = document.querySelector('.gallery-container, .listings-container');
        if (container) {
            container.style.opacity = '0.5';
            container.style.pointerEvents = 'none';
        }

        // Add loading spinner if desired
        var spinner = document.createElement('div');
        spinner.className = 'loading-overlay';
        spinner.innerHTML = '<div class="loading-spinner"></div>';

        var wrapper = document.querySelector('.content-wrapper, main');
        if (wrapper) {
            wrapper.appendChild(spinner);
        }
    }

    // Setup price range filter (debounced input)
    function setupPriceFilter() {
        var minPrice = document.querySelector('input[name="minPrice"], input[name="PriceMin"]');
        var maxPrice = document.querySelector('input[name="maxPrice"], input[name="PriceMax"]');

        var debounceTimer;

        function handlePriceChange() {
            var form = getClosestForm(this);
            if (!form) return;

            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(function() {
                showLoadingState();
                form.submit();
            }, 800); // 800ms debounce for typing
        }

        if (minPrice) {
            minPrice.addEventListener('input', handlePriceChange);
        }
        if (maxPrice) {
            maxPrice.addEventListener('input', handlePriceChange);
        }
    }

    // Setup checkbox filters (immediate submit)
    function setupCheckboxFilters() {
        var checkboxes = document.querySelectorAll(
            '.filter-checkbox input[type="checkbox"], ' +
            '.facet-checkbox input[type="checkbox"]'
        );

        checkboxes.forEach(function(checkbox) {
            if (checkbox.dataset.autoSubmit === 'true') return;

            checkbox.addEventListener('change', function() {
                var form = getClosestForm(this);
                if (form) {
                    showLoadingState();
                    submitForm(form, 100);
                }
            });

            checkbox.dataset.autoSubmit = 'true';
        });
    }

    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        // Sort options - immediate submit
        setupAutoSubmit(SORT_SELECTORS, 0);

        // Filter options - slight delay
        setupAutoSubmit(FILTER_SELECTORS, 100);

        // Items per page - immediate
        setupAutoSubmit(PER_PAGE_SELECTORS, 0);

        // Price range - debounced
        setupPriceFilter();

        // Checkbox filters
        setupCheckboxFilters();
    });

})();

/*
 * USAGE NOTES:
 *
 * This script automatically handles:
 * - Sort dropdown changes
 * - Filter dropdown changes
 * - Items per page changes
 * - Price range inputs (debounced)
 * - Checkbox filters
 *
 * Add this CSS for the loading state:
 *
 * .loading-overlay {
 *     position: fixed;
 *     top: 0;
 *     left: 0;
 *     right: 0;
 *     bottom: 0;
 *     background: rgba(255, 255, 255, 0.7);
 *     display: flex;
 *     align-items: center;
 *     justify-content: center;
 *     z-index: 9999;
 * }
 *
 * .loading-spinner {
 *     width: 40px;
 *     height: 40px;
 *     border: 3px solid #e5e7eb;
 *     border-top-color: #1a1a1a;
 *     border-radius: 50%;
 *     animation: spin 0.8s linear infinite;
 * }
 *
 * @keyframes spin {
 *     to { transform: rotate(360deg); }
 * }
 */
