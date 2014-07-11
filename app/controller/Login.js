Ext.define('SenchaBDD.controller.Login', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      loginView: 'login',
      loginButton: 'login #loginbutton'
    },

    control: {
      loginButton: {
        tap: 'onLoginButtonTap'
      }
    }
  },

  onLoginButtonTap: function(sender, e, eOpts) {
    var ufield = this.getLoginView().down('emailfield');
    var pfield = this.getLoginView().down('passwordfield');

    var username = ufield.getValue();
    var password = pfield.getValue();

    if (!username) {
      ufield.setCls('x-field-invalid');
    } else {
      ufield.setCls('x-field');
    }

    if (!password) {
      pfield.setCls('x-field-invalid');
    } else {
      pfield.setCls('x-field');
    }

    if (username === "foo" && password === "bar") {
      var home = Ext.create('SenchaBDD.view.Main');
      Ext.Viewport.add([home]);
      Ext.Viewport.animateActiveItem(home, {
        type: 'flip'
      });
      this.getLoginView().setValues({ usuario: '', contraseña: '' });
    } else {
      Ext.Msg.alert("Error", "User/password not valid. Try with user foo and password bar");
    }
  }
});