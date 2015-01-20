(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([
            "pat-registry",
            "pat-parser",
            "moment"
            ], function() {
                return factory.apply(this, arguments);
            });
        } else {
            factory(root.patterns, root.patterns.Parser);
        }
}(this, function(registry, Parser) {
    "use strict";
    // This pattern's name is pat-displaytime. It is activated on a DOM
    // element by giving the element the HTML class "pat-displaytime".
    //
    // For example:
    // <time class="pat-displaytime" datetime="2015-01-20T08:00Z">20 January 2015, 08:00</time>

    var parser = new Parser("displaytime");

    var displaytime = {
        name: "displaytime",
        trigger: ".pat-displaytime",

        init: function patDisplayTimeInit($el, opts) {
            var options = parser.parse($el, opts);
            this.processDate($el, options);
        },

        processDate: function patDisplayTimeProcessDate($el, options) {
            var datestr = $el.attr('datetime');
            var date = moment(datestr);
            $el.text(date);
        }
    };
    // Register the pattern object in the registry.
    registry.register(displaytime);
}));
