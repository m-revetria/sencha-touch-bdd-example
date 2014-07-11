Class('SenchaBDD.integration_tests.lib.TestClass', {
  isa: Siesta.Test.SenchaTouch,

  methods: {
    login: function (user, pwd, next) {
      var me = this;

      this.chain(
        { waitFor: 'componentQueryVisible', args: '#loginbutton' },
        function(next) {
          me.cq1('textfield[name=username]').setValue(user);
          me.cq1('passwordfield').setValue(pwd);
          next();
        },
        { tap: '>> #loginbutton'},
        { waitFor: 'CQ', args: 'home'},
        next
      );
    },

    logout: function(next) {
      var me = this;

      this.chain(
        { waitFor: 'CQ', args: 'home' },
        { waitFor: 'componentVisible', args: '#logoutbutton' },
        { tap: '>> #logoutbutton' },
        { waitFor: 'CQ', args: 'login' },
        next
      );
    }
  }
});
