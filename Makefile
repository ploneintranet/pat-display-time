BOWER       ?= node_modules/.bin/bower
HTTPSERVE   ?= node_modules/.bin/http-server
JSHINT 		?= node_modules/.bin/jshint
PHANTOMJS	?= node_modules/.bin/phantomjs
SOURCES		= $(wildcard src/*.js)

all:: designerhappy

stamp-npm: package.json
	npm install
	touch stamp-npm

stamp-bower: stamp-npm
	$(BOWER) install
	touch stamp-bower

clean::
	rm -f stamp-npm stamp-bower
	rm -rf node_modules bower_components ~/.cache/bower

make serve::
	$(HTTPSERVE) -p 4001

designerhappy:: stamp-npm stamp-bower
	printf "\n\n Designer, you can be happy now.\n Go to http://localhost:4001/ to see a demo \n\n\n\n"
	$(HTTPSERVE) -p 4001

#########################
#						#
#   TESTS				#
#						#
#########################

jshint: stamp-npm
	$(JSHINT) --config jshintrc $(SOURCES)

check:: jshint
	$(PHANTOMJS) node_modules/phantom-jasmine/lib/run_jasmine_test.coffee tests/TestRunner.html

.PHONY: clean check jshint
