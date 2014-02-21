Ext.define('SenchaBDD.store.Colors', {
  extend: 'Ext.data.Store',

  config: {
    storeId: 'colors_store',
    fields: ['color'],
    autoload: false,
    root: 'colors',
    proxy: {
      type: 'ajax',
      url: '/colors.json',
      noCache:    false,
      pageParam:  false,
      startParam: false,
      limitParam: false,
      reader: {
        type: "json",
        rootProperty: "colors"
      }
    }
  }
});