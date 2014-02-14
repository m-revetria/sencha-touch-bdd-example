Ext.require('Ext.data.Model');

afterEach(function () {
    Ext.data.Model.cache = {};      // Clear any cached models
});

var domEl;
beforeEach(function () {            // Reset the div with a new one.
    domEl = document.createElement('div');
    domEl.setAttribute('id', 'jasmine_content');
    var oldEl = document.getElementById('jasmine_content');
    oldEl.parentNode.replaceChild(domEl, oldEl);
});

afterEach(function () {             // Make the test runner look pretty
    domEl.setAttribute('style', 'display:none;');
});