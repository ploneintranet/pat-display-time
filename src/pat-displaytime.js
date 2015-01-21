(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'pat-registry',
            'pat-parser',
            'moment'
            ], function() {
                return factory.apply(this, arguments);
            });
        } else {
            factory(root.patterns, root.patterns.Parser);
        }
}(this, function(registry, Parser) {
    'use strict';

    var parser = new Parser('displaytime');
    // input datetime options
    parser.add_argument('format', '');
    parser.add_argument('locale', '');
    parser.add_argument('strict', false);

    // output options
    parser.add_argument('outputFormat', '');
    parser.add_argument('outputLocale', '');

    var displaytime = {
        name: 'displaytime',
        trigger: '.pat-displaytime',

        init: function patDisplayTimeInit($el, opts) {
            var options = parser.parse($el, opts);
            switch (options.strict) {
                // change 'true' to true
                case 'true': options.strict = true;
                             break;
                // anything else is false
                default: options.strict = false;
            }
            this.processDate($el, options);
        },

        processDate: function patDisplayTimeProcessDate($el, options) {
            var datestr = $el.attr('datetime');
            // var moment = require(moment);
            var date = moment(datestr, options.format, options.locale, options.strict);
            if (options.outputFormat.length) {
                date = date.format(options.outputFormat);
            }
            $el.text(date);
        }
    };
    // Register the pattern object in the registry.
    registry.register(displaytime);
}));
