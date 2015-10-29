(function (root, factory) {
    // We use AMD (Asynchronous Module Definition) or browser globals to create
    // this module.
    if (typeof define === "function" && define.amd) {
        define([
            "jquery",
            "pat-base",
            "pat-registry",
            "pat-parser",
            "pat-logger",
            "moment"
        ], function() {
            return factory.apply(this, arguments);
        });
    } else {
        // If require.js is not available, you'll need to make sure that these
        // global variables are available.
        factory($, patterns.Base, patterns, patterns.Parser, patterns.logger);
    }
}(this, function($, Base, registry, Parser, logger, moment) {
    "use strict";

    var log = logger.getLogger("pat-display-time");
    log.debug("pattern loaded");

    var parser = new Parser("display-time");

    // input datetime options
    parser.add_argument("format", "");
    parser.add_argument("locale", "");
    parser.add_argument("strict", false);

    // output options
    parser.add_argument("from-now", false);
    parser.add_argument("output-format", "");

    return Base.extend({
        name: "display-time",
        trigger: ".pat-display-time",

        init: function initUndefined () {
            this.options = parser.parse(this.$el);
            log.debug("pattern initialized");
            this.processDate(this.$el, this.options);
        },

        processDate: function patDisplayTimeProcessDate($el, options) {
            var date_str = $el.attr("datetime");
            var date = moment(date_str, options.format, options.locale, options.strict);
            if (options.fromNow === true) {
                date = date.fromNow();
            } else if (options.outputFormat.length) {
                date = date.format(options.outputFormat);
            }
            $el.text(date);
        }
    });
}));
