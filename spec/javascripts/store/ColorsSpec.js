var unitText = '{"colors": [{"color":"red"},{"color":"blue"},{"color":"green"}]}';

Ext.require('SenchaBDD.store.Colors');
describe('SenchaBDD.store.Colors', function() {

  beforeEach(function() {
    Ext.Ajax.expectedResult = ajaxResponses.colors;
    useMockAjax();
    store = Ext.create('SenchaBDD.store.Colors');
  });

  afterEach(function() {
    disabledMockAjax();
  });

  it('calls out to the proper url', function() {

    store.load(function(records, operation, success) {
      expect(operation.getRequest().getUrl()).toEqual('/colors.json');
      // This is valid when using cache in the store's proxy
      //expect(operation.getRequest().getUrl()).toMatch(/\/colors\.json\?_dc=\d+/);
    }, this);
  });

  it('populate the collection', function() {
    store.load(function(records, operation, success) {
      expect(store.getCount()).toEqual(3);
      expect(store.getAt(0).get('color')).toEqual('red');
      expect(store.getAt(1).get('color')).toEqual('blue');
      expect(store.getAt(2).get('color')).toEqual('green');
    }, this);
  });

});