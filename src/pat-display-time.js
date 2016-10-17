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
        factory($, patterns.Base, patterns, patterns.Parser, patterns.logger, moment);
    }
}(this, function($, Base, registry, Parser, logger, moment) {
    "use strict";

    var log = logger.getLogger("pat-display-time");
    log.debug("pattern loaded");

    var parser = new Parser("display-time");

    // input datetime options
    parser.add_argument("format", "");
    parser.add_argument("locale", "en");
    parser.add_argument("strict", false);

    // output options
    parser.add_argument("from-now", false);
    parser.add_argument("no-suffix", false);
    parser.add_argument("output-format", "");

    return Base.extend({
        name: "display-time",
        trigger: ".pat-display-time",

        init: function initUndefined () {
            this.options = parser.parse(this.$el);
            log.debug("pattern initialized");
            this.processDate();
        },

        processDate: function patDisplayTimeProcessDate() {

            var date_str = this.$el.attr("datetime");
            var date = moment(date_str, this.options.format, this.options.strict)
                .locale(this.options.locale);
            if (this.options.fromNow === true) {
                date = date.fromNow(this.options.noSuffix);
            } else if (this.options.outputFormat.length) {
                date = date.format(this.options.outputFormat);
            }
            this.$el.text(date);
        }
    });
}));
