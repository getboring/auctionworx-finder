/*
 * NM ESTATE AUCTIONS RECIPE: Gallery Lightbox JavaScript
 * Difficulty: Easy
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * Enables lightbox functionality for the antique-style image gallery.
 * Supports keyboard navigation and touch swipe on mobile.
 */

(function() {
    'use strict';

    // Wait for DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        initGalleryLightbox();
        initThumbnailNavigation();
    });

    /**
     * Initialize lightbox functionality
     */
    function initGalleryLightbox() {
        var mainImage = document.querySelector('.gallery-main-image img');
        if (!mainImage) return;

        // Create lightbox elements
        var lightbox = createLightbox();
        document.body.appendChild(lightbox);

        // Open lightbox on main image click
        mainImage.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });

        // Close on overlay click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox || e.target.classList.contains('gallery-lightbox-close')) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;

            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateGallery(-1);
                    break;
                case 'ArrowRight':
                    navigateGallery(1);
                    break;
            }
        });
    }

    /**
     * Create lightbox DOM structure
     */
    function createLightbox() {
        var lightbox = document.createElement('div');
        lightbox.className = 'gallery-lightbox';
        lightbox.innerHTML =
            '<div class="gallery-lightbox-content">' +
                '<button class="gallery-lightbox-close" aria-label="Close">&times;</button>' +
                '<button class="gallery-lightbox-nav prev" aria-label="Previous">&#8249;</button>' +
                '<img src="" alt="">' +
                '<button class="gallery-lightbox-nav next" aria-label="Next">&#8250;</button>' +
            '</div>';

        // Navigation button handlers
        var prevBtn = lightbox.querySelector('.prev');
        var nextBtn = lightbox.querySelector('.next');

        prevBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateGallery(-1);
        });

        nextBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navigateGallery(1);
        });

        // Touch swipe support
        var touchStartX = 0;
        var touchEndX = 0;

        lightbox.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightbox.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            var diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    navigateGallery(1); // Swipe left = next
                } else {
                    navigateGallery(-1); // Swipe right = prev
                }
            }
        }

        return lightbox;
    }

    /**
     * Open lightbox with specified image
     */
    function openLightbox(src, alt) {
        var lightbox = document.querySelector('.gallery-lightbox');
        var img = lightbox.querySelector('img');

        img.src = src;
        img.alt = alt || '';

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Close lightbox
     */
    function closeLightbox() {
        var lightbox = document.querySelector('.gallery-lightbox');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    /**
     * Navigate to next/previous image
     * @param {number} direction - 1 for next, -1 for previous
     */
    function navigateGallery(direction) {
        var thumbnails = document.querySelectorAll('.gallery-thumbnail');
        if (thumbnails.length < 2) return;

        var currentIndex = 0;
        thumbnails.forEach(function(thumb, index) {
            if (thumb.classList.contains('active')) {
                currentIndex = index;
            }
        });

        var newIndex = currentIndex + direction;

        // Wrap around
        if (newIndex < 0) newIndex = thumbnails.length - 1;
        if (newIndex >= thumbnails.length) newIndex = 0;

        // Update active thumbnail and lightbox image
        var newThumb = thumbnails[newIndex];
        selectThumbnail(newThumb);

        var lightbox = document.querySelector('.gallery-lightbox');
        if (lightbox.classList.contains('active')) {
            var img = newThumb.querySelector('img');
            openLightbox(img.src.replace('-thumb', ''), img.alt);
        }
    }

    /**
     * Initialize thumbnail click navigation
     */
    function initThumbnailNavigation() {
        var thumbnails = document.querySelectorAll('.gallery-thumbnail');
        var mainImage = document.querySelector('.gallery-main-image img');

        if (!thumbnails.length || !mainImage) return;

        thumbnails.forEach(function(thumb) {
            thumb.addEventListener('click', function() {
                selectThumbnail(this);

                // Update main image
                var thumbImg = this.querySelector('img');
                if (thumbImg) {
                    // Assume full image has same name without -thumb suffix
                    mainImage.src = thumbImg.src.replace('-thumb', '');
                    mainImage.alt = thumbImg.alt;
                }
            });
        });
    }

    /**
     * Mark thumbnail as selected
     */
    function selectThumbnail(thumb) {
        var thumbnails = document.querySelectorAll('.gallery-thumbnail');
        thumbnails.forEach(function(t) {
            t.classList.remove('active');
        });
        thumb.classList.add('active');
    }

    // Expose functions globally if needed
    window.NMGallery = {
        openLightbox: openLightbox,
        closeLightbox: closeLightbox
    };

})();
