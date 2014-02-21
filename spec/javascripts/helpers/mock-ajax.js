var defaultAjax = {
  async: Ext.Ajax.getAsync(),
  request: Ext.Ajax.request,
  onComplete: Ext.Ajax.onComplete,
  createResponse: Ext.createResponse
};

function useMockAjax() {
  Ext.Ajax.setAsync(false);

  Ext.Ajax.request = function(data) {
    if (Ext.Ajax.fireEvent('beforerequest', Ext.Ajax, data) !== false) {
      xhr = new XMLHttpRequest();
      xhr.readyState = 4;
      var request = Ext.Object.merge({
        xhr: xhr,
        options: data
      }, Ext.Ajax.expectedResult);
      return this.onComplete(request);
    }

    return {};
  };

  Ext.Ajax.onComplete = function(request) {
    response = this.createResponse(request);
    this.fireEvent('requestcomplete', this, response, request.options);
    Ext.callback(request.options.callback, request.options.scope, [request.options, response.success, response]);
  };

  Ext.Ajax.createResponse = function(request) {
    return {
     responseText : request.responseText,
     responseXML  : request.responseXML,
     getAllResponseHeaders : function() { return ''; },
     status : request.status,
     statusText : request.statusText,
     success: (request.status >= 200 && request.status < 300)
   };
  };
}

function disabledMockAjax() {
  Ext.Ajax = Ext.Object.merge(Ext.Ajax, defaultAjax);
}
