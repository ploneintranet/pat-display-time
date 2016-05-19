require.config({
    baseUrl: "src",
    paths: {
        // Add any other dependencies here. For external libraries, also add
        // them to bower.json
        "jquery":                       "bower_components/jquery/dist/jquery",
        "jquery.browser":               "bower_components/jquery.browser/dist/jquery.browser",
        "logging":                      "bower_components/logging/src/logging",
        "pat-base":                     "bower_components/patternslib/src/core/base",
        "pat-compat":                   "bower_components/patternslib/src/core/compat",
        "pat-jquery-ext":               "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":                   "bower_components/patternslib/src/core/logger",
        "pat-mockup-parser":            "bower_components/patternslib/src/core/mockup-parser",
        "pat-parser":                   "bower_components/patternslib/src/core/parser",
        "pat-registry":                 "bower_components/patternslib/src/core/registry",
        "pat-utils":                    "bower_components/patternslib/src/core/utils",
        "underscore":                   "bower_components/underscore/underscore",
        "moment":                       "bower_components/moment/moment",
        "moment-locale-de":             "bower_components/moment/locale/de",
        "moment-locale-nl":             "bower_components/moment/locale/nl",
        "moment-locale-it":             "bower_components/moment/locale/it",
        "moment-locale-da":             "bower_components/moment/locale/da",
        "moment-timezone-data":         "src/moment-timezone-data"
    },
    "shim": {
        "logging": { "exports": "logging" }
    }
});

require(["pat-registry", "pat-display-time"], function(registry, pattern) {
    // your pattern is found via it's name in the filesystem, starting from the
    // requireJS baseUrl option: "pat-display-time"
    window.patterns = registry;
    $(document).ready(function() {
        registry.init();
    });
});
