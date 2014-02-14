Ext.define('SenchaBDD.store.Colors', {
  extend: 'Ext.data.Store',

  config: {
    storeId: 'colors_store',
    fields: ['color'],
    autoload: true,
    proxy: {
      type: 'ajax',
      url: '/colors.json'
    }
  }
});