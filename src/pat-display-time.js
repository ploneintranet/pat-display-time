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
}(this, function(registry, Parser, moment) {
    'use strict';

    var parser = new Parser('display-time');
    // input datetime options
    parser.add_argument('format', '');
    parser.add_argument('locale', '');
    parser.add_argument('strict', false);

    // output options
    parser.add_argument('from-now', false);
    parser.add_argument('output-format', '');
    parser.add_argument('output-locale', '');


    var displayTime = {
        name: 'display-time',
        trigger: '.pat-display-time',

        init: function patDisplayTimeInit($el, opts) {
            var options = parser.parse($el, opts);

            if (options.strict === 'true') {
                options.strict = true;
            } else {
                options.strict = false;
            }

            this.processDate($el, options);
        },

        processDate: function patDisplayTimeProcessDate($el, options) {
            var dateStr = $el.attr('datetime');
            // var moment = require(moment);
            var date = moment(dateStr, options.format, options.locale, options.strict);
            if (options.fromNow == true) {
                date = date.fromNow();
            } else if (options.output.format.length) {
                date = date.format(options.output.format);
            }
            $el.text(date);
        }
    };
    // Register the pattern object in the registry.
    registry.register(displayTime);
}));
