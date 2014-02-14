Ext.define('SenchaBDD.view.ColorsList', {
  extend: 'Ext.dataview.List',
  xtype: 'color_list',
  config: {
      scrollable: 'vertical',
      itemTpl: '<div class="favorite-color">{color}</div>'
  }
});