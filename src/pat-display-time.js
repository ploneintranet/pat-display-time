(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            'pat-base',
            'pat-registry',
            'pat-parser',
            'moment'
            ], function() {
                return factory.apply(this, arguments);
            });
        } else {
            factory(Base, root.patterns, root.patterns.Parser);
        }
}(this, function(Base, registry, Parser, moment) {
    'use strict';
    var parser = new Parser('display-time');
    // input datetime options
    parser.add_argument('format', '');
    parser.add_argument('locale', '');
    parser.add_argument('strict', false);

    // output options
    parser.add_argument('outputFormat', '');
    parser.add_argument('outputLocale', '');
    parser.add_argument('fromNow', false);

    return Base.extend({
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
            if (options.outputFormat.length) {
                date = date.format(options.outputFormat);
            }
            if (options.fromNow) {
                date = date.fromNow();
            }
            $el.text(date);
        }
    });
}));
