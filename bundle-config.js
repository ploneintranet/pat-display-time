define([
    "jquery",
    "pat-registry",
    "prefixfree",
    "pat-ajax",
    "pat-autofocus",
    "pat-autoscale",
    "pat-autosubmit",
    "pat-autosuggest",
    "pat-breadcrumbs",
    "pat-bumper",
    "pat-calendar",
    "pat-carousel",
    "pat-checkedflag",
    "pat-checklist",
    "pat-chosen",
    "pat-clone",
    "pat-collapsible",
    "pat-colour-picker",
    "pat-date-picker",
    "pat-depends",
    "pat-equaliser",
    "pat-expandable",
    "pat-focus",
    "pat-form-state",
    "pat-forward",
    "pat-gallery",
    "pat-image-crop",
    "pat-inject",
    "pat-input-change-events",
    "pat-legend",
    "pat-markdown",
    "pat-menu",
    "pat-modal",
    "pat-navigation",
    "pat-notification",
    "pat-masonry",
    "pat-placeholder",
    "pat-scroll",
    "pat-selectbox",
    "pat-slides",
    "pat-slideshow-builder",
    "pat-sortable",
    "pat-stacks",
    "pat-sticky",
    "pat-subform",
    "pat-switch",
    "pat-syntax-highlight",
    "pat-tabs",
    "pat-toggle",
    "pat-tooltip",
    "pat-url",
    "pat-validation",
    "pat-zoom"
], function($, registry) {
    // Since we are in a non-AMD env, register a few useful utilites
    var window = require("window");
    window.jQuery = $;
    require("imports-loader?this=>window!jquery.browser");

    require(["pat-registry", "pat-display-time"], function(registry, pattern) {
        // your pattern is found via it's name in the filesystem, starting from the
        // requireJS baseUrl option: "pat-display-time"
        window.patterns = registry;
        $(document).ready(function() {
            registry.init();
        });
    });

    return registry;
});