define(["pat-displaytime"], function(pattern) {

    describe("pat-displaytime", function() {

        beforeEach(function() {
            $("<div/>", {id: "lab"}).appendTo(document.body);
        });

        afterEach(function() {
            $("#lab").remove();
        });

        describe("init", function() {
            it("Should replace the element content", function() {
                $("#lab").html([
                    "<time class=\"pat-displaytime\" datetime=\"2015-01-20T08:00Z\" data-pat-displaytime=\"outputFormat:l\">",
                    "a datetime",
                    "</time>"
                    ].join("\n"));
                var $time = $("#lab .pat-displaytime");
                pattern.init($time);
                var timeText = $time.text;
                var expectedText = "Tue Jan 20 2015 08:00:00 GMT+0000";
                expect(timeText).toBe(expectedText);
            });
        });
    });

});

// jshint indent: 4, browser: true, jquery: true, quotmark: double
