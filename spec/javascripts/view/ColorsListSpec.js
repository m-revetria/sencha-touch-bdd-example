Ext.require('SenchaBDD.store.Colors');
Ext.require('SenchaBDD.view.ColorsList');

describe('SenchaBDD.view.ColorsList', function() {

  it('has a list of colors', function() {
    var store = Ext.create('SenchaBDD.store.Colors', {
      data: [
        { color: 'red' },
        { color: 'blue' },
        { color: 'green' }
      ]
    });
    
    var view = Ext.create('SenchaBDD.view.ColorsList', {
      renderTo: 'jasmine_content',
      store: store
    });

    expect(Ext.DomQuery.select('.favorite-color').map(function(el) {
      return el.textContent;
    }).join(', ')).toEqual('red, blue, green');
  });

});