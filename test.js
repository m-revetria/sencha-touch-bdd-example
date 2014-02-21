var Harness = Siesta.Harness.Browser.SenchaTouch;

Harness.configure({
    title: 'Sencha BDD',
    preload : [
        '/touch/resources/css/sencha-touch.css',
        '/touch/sencha-touch-all-debug.js'
    ],
    keepNLastResults: 2
});

Harness.start(
    {
        group: 'Control de configuracion',
        hostPageUrl: './',
        performSetup: false,
        items: [
            'integration-tests/010_sanity.t.js',
        ]
    }
);