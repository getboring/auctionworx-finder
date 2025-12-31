/*
 * MAGNOLIA PEARL RECIPE: Wishlist Heart Icons
 * Difficulty: Easy
 * Apply via: CMS > Content > Header Scripts (within <script> tags)
 *
 * Adds interactive heart icons to product cards for wishlist functionality.
 * Works with AuctionWorx's built-in watchlist/favorite system.
 *
 * Features:
 * - Heart icon overlay on each product card
 * - Toggle animation on click
 * - AJAX integration with watchlist API
 */

(function() {
    'use strict';

    // SVG Heart Icons
    var HEART_EMPTY = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    var HEART_FILLED = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';

    // Add styles for heart buttons
    function addStyles() {
        var css = [
            '.wishlist-heart { position: absolute; top: 12px; right: 12px; width: 36px; height: 36px; background: rgba(255, 255, 255, 0.95); border: none; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; z-index: 10; color: #92807f; }',
            '.wishlist-heart:hover { background: #ffffff; color: #e838bf; transform: scale(1.1); }',
            '.wishlist-heart.active { color: #e838bf; }',
            '.wishlist-heart.active:hover { color: #d42bad; }',
            '.wishlist-heart svg { transition: transform 0.2s ease; }',
            '.wishlist-heart:active svg { transform: scale(0.9); }',
            /* Ensure parent card has relative positioning */
            '.gallery-item, .listing-card, [class*="col-"] > .thumbnail { position: relative; }'
        ];

        var style = document.createElement('style');
        style.textContent = css.join('\n');
        document.head.appendChild(style);
    }

    // Create heart button element
    function createHeartButton(listingId, isActive) {
        var btn = document.createElement('button');
        btn.className = 'wishlist-heart' + (isActive ? ' active' : '');
        btn.setAttribute('data-listing-id', listingId);
        btn.setAttribute('aria-label', isActive ? 'Remove from wishlist' : 'Add to wishlist');
        btn.innerHTML = isActive ? HEART_FILLED : HEART_EMPTY;
        return btn;
    }

    // Toggle wishlist status
    function toggleWishlist(btn) {
        var listingId = btn.getAttribute('data-listing-id');
        var isActive = btn.classList.contains('active');

        // Optimistic UI update
        btn.classList.toggle('active');
        btn.innerHTML = isActive ? HEART_EMPTY : HEART_FILLED;
        btn.setAttribute('aria-label', isActive ? 'Add to wishlist' : 'Remove from wishlist');

        // API call to AuctionWorx watchlist endpoint
        var url = isActive
            ? '/api/Watchlist/Remove/' + listingId
            : '/api/Watchlist/Add/' + listingId;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            credentials: 'same-origin'
        })
        .then(function(response) {
            if (!response.ok) {
                // Revert on error
                btn.classList.toggle('active');
                btn.innerHTML = isActive ? HEART_FILLED : HEART_EMPTY;
            }
        })
        .catch(function() {
            // Revert on error
            btn.classList.toggle('active');
            btn.innerHTML = isActive ? HEART_FILLED : HEART_EMPTY;
        });
    }

    // Find all product cards and add hearts
    function addHeartsToCards() {
        // Common selectors for AuctionWorx listing cards
        var cardSelectors = [
            '.gallery-item',
            '.listing-card',
            '.thumbnail[data-listing-id]',
            '[class*="col-"] > .thumbnail'
        ];

        var cards = document.querySelectorAll(cardSelectors.join(', '));

        cards.forEach(function(card) {
            // Skip if already has heart
            if (card.querySelector('.wishlist-heart')) {
                return;
            }

            // Try to find listing ID
            var listingId = card.getAttribute('data-listing-id') ||
                           card.querySelector('[data-listing-id]')?.getAttribute('data-listing-id') ||
                           card.querySelector('a[href*="/Listing/"]')?.href.match(/\/Listing\/(\d+)/)?.[1];

            if (!listingId) {
                return;
            }

            // Check if already in watchlist (look for existing favorite indicator)
            var isActive = card.querySelector('.favorite-indicator, .in-watchlist') !== null;

            // Create and add heart button
            var heartBtn = createHeartButton(listingId, isActive);

            // Find the image container to position the heart
            var imageContainer = card.querySelector('.listing-image, .thumbnail-image, img')?.parentElement || card;
            imageContainer.style.position = 'relative';
            imageContainer.appendChild(heartBtn);
        });
    }

    // Handle click events via delegation
    function handleClicks(e) {
        var btn = e.target.closest('.wishlist-heart');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(btn);
        }
    }

    // Initialize
    function init() {
        addStyles();
        addHeartsToCards();
        document.addEventListener('click', handleClicks);

        // Re-run on AJAX content updates (for infinite scroll, etc.)
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    addHeartsToCards();
                }
            });
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
