Ext.require('SenchaBDD.store.Colors');

describe('SenchaBDD.store.Colors', function() {

  var store;
  
  beforeEach(function() {
    jasmine.Ajax.useMock();
    clearAjaxRequests();
    store = Ext.create('SenchaBDD.store.Colors');
  });

  afterEach(function() {
    jasmine.Ajax.uninstallMock();
  });

  it('calls out to the proper url', function() {
    store.load();
    var request = mostRecentAjaxRequest();
    expect(request.url).toMatch(/\/colors\.json\?_dc=\d+/);
  });

});