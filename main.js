require.config({
    baseUrl: "",
    paths: {
        "i18n":                 "bower_components/patternslib/src/core/i18n",
        "jquery":               "bower_components/jquery/jquery",
        "logging":              "bower_components/logging/src/logging",
        "pat-base":             "bower_components/patternslib/src/core/base",
        "pat-compat":           "bower_components/patternslib/src/core/compat",
        "pat-jquery-ext":       "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":           "bower_components/patternslib/src/core/logger",
        "pat-parser":           "bower_components/patternslib/src/core/parser",
        "pat-registry":         "bower_components/patternslib/src/core/registry",
        "pat-utils":            "bower_components/patternslib/src/core/utils",
        "patterns":             "bower_components/patternslib/bundle",
        "moment":               "bower_components/moment/moment",
        "pat-display-time":     "src/pat-display-time"
    }
});
require(["pat-registry", "pat-display-time"], function(registry, displaytime) {
    window.patterns = registry;
    registry.init();
});
