var Harness = Siesta.Harness.Browser.SenchaTouch;

Harness.configure({
    title: 'Sencha BDD',
    testClass: SenchaBDD.integration_tests.lib.TestClass,
    preload : [
        '/touch/resources/css/sencha-touch.css',
        '/touch/sencha-touch-all-debug.js'
    ],
    keepNLastResults: 2
});

Harness.start(
    {
        group: 'Sanity',
        hostPageUrl: './',
        performSetup: false,
        items: [
            'integration_tests/010_sanity.t.js',
        ]
    },
    {
        group: 'Session management',
        hostPageUrl: '/.',
        performSetup: false,
        items: [
            'integration_tests/app/view/020_login.t.js',
            'integration_tests/app/view/021_check_fields.t.js'
        ]
    },
    {
        group: 'The Main view',
        hostPageUrl: '/.',
        performSetup: false,
        items: [
            'integration_tests/app/view/030_main.t.js'
        ]
    }
);