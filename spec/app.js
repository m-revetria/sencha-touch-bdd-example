Ext.Loader.setConfig({
    enabled: true,                  // Turn on Ext.Loader
    disableCaching: false           // Turn OFF cache BUSTING
});

Ext.Loader.setPath({
    'SenchaBdd': 'app'              // Set the path for all SenchaBdd.* classes
});

Ext.application({
    name: 'SenchaBdd'               // Create (but don't launch) an application
});
