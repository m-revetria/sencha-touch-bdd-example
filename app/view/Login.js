Ext.define('SenchaBDD.view.Login', {
  extend: 'Ext.form.Panel',
  xtype: 'login',

  requires: [
    'Ext.field.Email',
    'Ext.field.Password',
    'Ext.form.FieldSet'
  ],

  config: {

    items: [
      {
        xtype: 'fieldset',

        items: [
          {
            xtype: 'emailfield',
            name: 'username',
            required: true
          },
          {
            xtype: 'passwordfield',
            name: 'password',
            required: true
          },
          {
            xtype: 'button',
            itemId: 'loginbutton',
            text: "Sign in"
          }
        ]
      }
    ]
  }
});