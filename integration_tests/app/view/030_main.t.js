StartTest(function(t) {
  t.describe("The \"Home\" view", function(t) {

    t.it("It should appear after the user sign in", function(t) {
      t.chain(
        { waitFor: 'componentQueryNotFound', args: 'home' },
        function(next) {
          t.login("foo", "bar", next);
        }
      );
      
    });

    t.it("It should start in the \"Welcome\" tab", function(t) {
      t.chain(
        { waitFor: 'componentVisible', args: 'home container[cls=home]'}
      );
    });

    t.it("It should allow to see the \"Colors\" tab", function(t) {
      t.chain(
        { waitFor: 'componentVisible', args: 'home button[iconCls=star]' },
        { tap: '>> home button[iconCls=star]', args: '' },
        { waitFor: 'componentVisible', args: 'home color_list' }
      );
    });

    t.it("It should allow to see the \"Get Started\" tab", function(t) {
      t.chain(
        { waitFor: 'componentVisible', args: 'home button[iconCls=action]' },
        { tap: '>> home button[iconCls=action]', args: '' },
        { waitFor: 'componentVisible', args: 'home #getstarted' }
      );
    });

    t.it("It should allow to come back to \"Welcome\" tab", function(t) {
      t.chain(
        { waitFor: 'componentVisible', args: 'home button[iconCls=home]' },
        { tap: '>> home button[iconCls=home]', args: '' },
        { waitFor: 'componentVisible', args: 'home container[cls=home]' }
      );
    });

    t.it("It should allow the user to sign out", function(t) {
      t.logout();
    });

  });
});