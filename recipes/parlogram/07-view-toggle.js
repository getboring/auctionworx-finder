/*
 * PARLOGRAM RECIPE: Grid/List View Toggle
 * Difficulty: Easy
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * Allows users to switch between grid and list views for browsing records.
 * Persists preference across sessions using localStorage.
 * Pairs with form submission for server-side view switching.
 */

(function() {
    'use strict';

    var STORAGE_KEY = 'parlogram_view_style';
    var DEFAULT_VIEW = 'grid';

    // Get saved view preference
    function getSavedView() {
        try {
            return localStorage.getItem(STORAGE_KEY) || DEFAULT_VIEW;
        } catch (e) {
            return DEFAULT_VIEW;
        }
    }

    // Save view preference
    function saveView(viewStyle) {
        try {
            localStorage.setItem(STORAGE_KEY, viewStyle);
        } catch (e) {
            // localStorage not available
        }
    }

    // Apply view class to container
    function applyView(viewStyle) {
        var container = document.querySelector('.gallery-container, .listings-container, .row.gallery-row');
        if (!container) return;

        container.classList.remove('view-grid', 'view-list');
        container.classList.add('view-' + viewStyle);

        // Update toggle button states
        var gridBtn = document.querySelector('#ShowGridView, .btn-grid-view');
        var listBtn = document.querySelector('#ShowListView, .btn-list-view');

        if (gridBtn) {
            gridBtn.classList.toggle('active', viewStyle === 'grid');
        }
        if (listBtn) {
            listBtn.classList.toggle('active', viewStyle === 'list');
        }
    }

    // Switch to grid view
    function showGridView() {
        saveView('grid');
        applyView('grid');

        // Update hidden form field if exists (for server-side persistence)
        var viewInput = document.querySelector('input[name=ViewStyle]');
        if (viewInput) {
            viewInput.value = 'grid';
        }
    }

    // Switch to list view
    function showListView() {
        saveView('list');
        applyView('list');

        // Update hidden form field if exists
        var viewInput = document.querySelector('input[name=ViewStyle]');
        if (viewInput) {
            viewInput.value = 'list';
        }
    }

    // Setup toggle buttons
    function setupToggleButtons() {
        var gridBtn = document.querySelector('#ShowGridView, .btn-grid-view');
        var listBtn = document.querySelector('#ShowListView, .btn-list-view');

        if (gridBtn) {
            gridBtn.style.cursor = 'pointer';
            gridBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showGridView();
            });
        }

        if (listBtn) {
            listBtn.style.cursor = 'pointer';
            listBtn.addEventListener('click', function(e) {
                e.preventDefault();
                showListView();
            });
        }
    }

    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        setupToggleButtons();

        // Apply saved view preference
        var savedView = getSavedView();
        applyView(savedView);
    });

    // Expose functions globally
    window.ParlogramView = {
        grid: showGridView,
        list: showListView,
        current: getSavedView
    };

})();

/*
 * USAGE NOTES:
 *
 * HTML for toggle buttons:
 * <div class="view-toggle">
 *     <button id="ShowGridView" class="btn-grid-view" title="Grid View">
 *         <i class="fa fa-th"></i>
 *     </button>
 *     <button id="ShowListView" class="btn-list-view" title="List View">
 *         <i class="fa fa-list"></i>
 *     </button>
 * </div>
 *
 * Add this CSS for view switching:
 *
 * .view-grid .gallery-item { display: block; }
 * .view-list .gallery-item {
 *     display: flex;
 *     width: 100%;
 *     max-width: 100%;
 * }
 * .view-list .gallery-item img {
 *     width: 120px;
 *     height: 120px;
 * }
 *
 * Manual JavaScript calls:
 * ParlogramView.grid();  // Switch to grid
 * ParlogramView.list();  // Switch to list
 * ParlogramView.current(); // Get current view
 */
