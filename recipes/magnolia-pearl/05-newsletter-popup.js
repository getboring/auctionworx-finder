/*
 * MAGNOLIA PEARL RECIPE: Newsletter Popup Modal
 * Difficulty: Moderate
 * Apply via: CMS > Content > Header Scripts (within <script> tags)
 *
 * Displays a styled newsletter signup modal to first-time visitors.
 * Uses localStorage to track if the user has already seen/dismissed it.
 *
 * Customization:
 * - Change POPUP_DELAY for timing (default: 3 seconds)
 * - Modify the HTML template for your branding
 * - Update form action URL for your email service
 */

(function() {
    'use strict';

    // Configuration
    var CONFIG = {
        POPUP_DELAY: 3000,        // Milliseconds before showing popup
        STORAGE_KEY: 'mp_newsletter_seen',
        COOKIE_DAYS: 30           // Days before showing again (if dismissed)
    };

    // Check if user has already seen the popup
    function hasSeenPopup() {
        try {
            return localStorage.getItem(CONFIG.STORAGE_KEY) === 'true';
        } catch (e) {
            return false;
        }
    }

    // Mark popup as seen
    function markAsSeen() {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEY, 'true');
        } catch (e) {
            // localStorage not available
        }
    }

    // Create popup HTML
    function createPopupHTML() {
        return [
            '<div id="newsletter-modal" class="nl-modal" style="display:none;">',
            '  <div class="nl-modal-overlay"></div>',
            '  <div class="nl-modal-content">',
            '    <button class="nl-modal-close" aria-label="Close">&times;</button>',
            '    <div class="nl-modal-body">',
            '      <h2 class="nl-title">Join Our List</h2>',
            '      <p class="nl-subtitle">Be the first to know about new arrivals, exclusive offers, and special events.</p>',
            '      <form class="nl-form" action="/Newsletter/Subscribe" method="POST">',
            '        <input type="email" name="email" class="nl-input" placeholder="Enter your email" required>',
            '        <button type="submit" class="nl-button">Subscribe</button>',
            '      </form>',
            '      <p class="nl-disclaimer">We respect your privacy. Unsubscribe anytime.</p>',
            '    </div>',
            '  </div>',
            '</div>'
        ].join('\n');
    }

    // Create popup styles
    function createPopupStyles() {
        var css = [
            '.nl-modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000; display: flex; align-items: center; justify-content: center; }',
            '.nl-modal-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); }',
            '.nl-modal-content { position: relative; background: #fbf7f3; max-width: 450px; width: 90%; padding: 48px; text-align: center; }',
            '.nl-modal-close { position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 28px; color: #92807f; cursor: pointer; line-height: 1; }',
            '.nl-modal-close:hover { color: #594E4B; }',
            ".nl-title { font-family: 'Playfair Display', Georgia, serif; font-size: 28px; font-weight: 700; color: #594E4B; margin-bottom: 12px; }",
            ".nl-subtitle { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 16px; color: #92807f; margin-bottom: 24px; line-height: 1.6; }",
            '.nl-form { display: flex; flex-direction: column; gap: 12px; }',
            ".nl-input { padding: 14px 16px; border: 1px solid #e7e7e7; background: #ffffff; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 16px; text-align: center; }",
            '.nl-input:focus { outline: none; border-color: #e838bf; }',
            ".nl-button { padding: 14px 24px; background: #e838bf; color: #ffffff; border: none; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: background 0.2s ease; }",
            '.nl-button:hover { background: #d42bad; }',
            ".nl-disclaimer { margin-top: 16px; font-size: 12px; color: #92807f; font-family: 'Cormorant Garamond', Georgia, serif; }",
            '@media (max-width: 575px) { .nl-modal-content { padding: 32px 24px; } .nl-title { font-size: 24px; } }'
        ];

        var style = document.createElement('style');
        style.textContent = css.join('\n');
        document.head.appendChild(style);
    }

    // Show popup
    function showPopup() {
        var modal = document.getElementById('newsletter-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    // Hide popup
    function hidePopup() {
        var modal = document.getElementById('newsletter-modal');
        if (modal) {
            modal.style.display = 'none';
        }
        markAsSeen();
    }

    // Initialize popup
    function init() {
        // Don't show if already seen
        if (hasSeenPopup()) {
            return;
        }

        // Add styles
        createPopupStyles();

        // Add HTML to page
        var container = document.createElement('div');
        container.innerHTML = createPopupHTML();
        document.body.appendChild(container.firstChild);

        // Bind close events
        var modal = document.getElementById('newsletter-modal');
        var closeBtn = modal.querySelector('.nl-modal-close');
        var overlay = modal.querySelector('.nl-modal-overlay');

        closeBtn.addEventListener('click', hidePopup);
        overlay.addEventListener('click', hidePopup);

        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hidePopup();
            }
        });

        // Handle form submission
        var form = modal.querySelector('.nl-form');
        form.addEventListener('submit', function() {
            markAsSeen();
        });

        // Show after delay
        setTimeout(showPopup, CONFIG.POPUP_DELAY);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
