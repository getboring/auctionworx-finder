/*
 * AUKSJONARIUS RECIPE: Silktide Cookie Consent (GDPR)
 * Difficulty: Easy
 * Apply via: CMS > Content > Header Scripts (wrap in <script> tags)
 *
 * GDPR-compliant cookie consent for European visitors.
 * Silktide provides a lightweight, customizable consent banner.
 * Sign up at: https://silktide.com/tools/cookie-consent/
 */

(function() {
    'use strict';

    // Default consent settings (auto-accept analytics for returning visitors)
    // IMPORTANT: Modify this based on your legal requirements
    var DEFAULT_CONSENTS = {
        analytics: false,  // Set true to auto-enable analytics cookies
        marketing: false,  // Set true to auto-enable marketing cookies
        functional: true   // Functional cookies typically allowed
    };

    // Check for existing consent
    function getStoredConsent(type) {
        return localStorage.getItem('silktideCookieChoice_' + type);
    }

    function setStoredConsent(type, value) {
        localStorage.setItem('silktideCookieChoice_' + type, value);
    }

    // Norwegian translations for consent banner
    var NB_TRANSLATIONS = {
        title: 'Vi bruker informasjonskapsler',
        description: 'Vi bruker informasjonskapsler for a forbedre din opplevelse pa nettstedet vart.',
        acceptAll: 'Godta alle',
        rejectAll: 'Avvis alle',
        manage: 'Administrer',
        save: 'Lagre valg',
        analytics: 'Analyse',
        analyticsDesc: 'Hjelper oss a forsta hvordan du bruker nettstedet',
        marketing: 'Markedsforing',
        marketingDesc: 'Viser relevante annonser',
        functional: 'Funksjonelle',
        functionalDesc: 'Nodvendig for at nettstedet skal fungere'
    };

    // Apply pre-stored consent (for returning visitors)
    function applyStoredConsent() {
        var analyticsConsent = getStoredConsent('analytics');

        if (analyticsConsent === 'true') {
            // Enable analytics tracking
            enableAnalytics();
        }
    }

    function enableAnalytics() {
        // Fire analytics consent event
        if (typeof window.fr !== 'undefined') {
            window.fr('consent', 'granted');
        }
        if (typeof window.gtag !== 'undefined') {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    }

    // Silktide integration
    function initSilktide() {
        // If Silktide library is loaded
        if (typeof window.CookieConsent !== 'undefined') {
            window.CookieConsent.init({
                language: 'nb',
                translations: {
                    nb: NB_TRANSLATIONS
                },
                onAccept: function(cookies) {
                    if (cookies.analytics) {
                        setStoredConsent('analytics', 'true');
                        enableAnalytics();
                    }
                }
            });
        }
    }

    // Simple fallback consent banner (if Silktide not loaded)
    function createFallbackBanner() {
        if (getStoredConsent('banner_shown')) return;

        var banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = [
            '<div style="position:fixed;bottom:0;left:0;right:0;background:#21354f;color:#fff;padding:16px 24px;z-index:10000;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">',
            '<span>' + NB_TRANSLATIONS.description + '</span>',
            '<div style="display:flex;gap:8px;">',
            '<button onclick="acceptCookies()" style="background:#4a90d9;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;">' + NB_TRANSLATIONS.acceptAll + '</button>',
            '<button onclick="rejectCookies()" style="background:transparent;color:#fff;border:1px solid #fff;padding:8px 16px;border-radius:4px;cursor:pointer;">' + NB_TRANSLATIONS.rejectAll + '</button>',
            '</div>',
            '</div>'
        ].join('');

        document.body.appendChild(banner);

        window.acceptCookies = function() {
            setStoredConsent('analytics', 'true');
            setStoredConsent('banner_shown', 'true');
            enableAnalytics();
            banner.remove();
        };

        window.rejectCookies = function() {
            setStoredConsent('analytics', 'false');
            setStoredConsent('banner_shown', 'true');
            banner.remove();
        };
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            applyStoredConsent();
            initSilktide();
            // Uncomment for fallback banner: createFallbackBanner();
        });
    } else {
        applyStoredConsent();
        initSilktide();
    }
})();
