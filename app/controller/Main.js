Ext.define('SenchaBDD.controller.Main', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      homeView: 'home',
      logoutButton: 'home #logoutbutton'
    },

    control: {
      logoutButton: {
        tap: 'onLogoutButtonTap'
      }
    }
  },

  onLogoutButtonTap: function(sender, e, eOpts) {
    Ext.Viewport.animateActiveItem(Ext.Viewport.down('login'), {
      type: 'flip',
      direction: 'left'
    });
  }
});