#sencha-touch-bdd-example

This is an example of how to use automated tests in a Sencha Touch projects using Jasmine for unity tests and Siesta for integration tests.

##Run the tests

### Jasmine unity tests

Before run jasmine tests you need to install the used gems: rake, jasmine, jasmine-phantom.

    bundle exec install

In order to start Jasmine server, run the following command:

    rake jasmine init

to run the tests in the terminal:

    rake jasmine:ci

### Siesta integration tests

Deploy the proyecto in some application server. If you have Sencha CMD installed you can run

    sencha web start

to start sencha server in the port 1841. The test page for run the integration tests is http://localhost:1841/test.html if
you are usin sencha server with the default port.

##Reference
The Jasmine examples was made following the tutorial [Sencha Touch BDD Part 1](http://pivotallabs.com/sencha-touch-bdd-part-1) wrote by Ken Mayer. Thanks!

The Siesta examples was made following this other tutorial included in its documentation: [Testing a Sencha Touch application](http://www.bryntum.com/docs/siesta/#!/guide/testing_sencha_touch_app)
