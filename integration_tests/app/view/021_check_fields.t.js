StartTest(function(t) {
  t.describe("The sign in form", function(t) {

    t.it("It should validate that every required fields is set", function(t) {
      t.chain(
        function(next) {
          t.cq1('emailfield').setValue("");
          t.cq1('passwordfield').setValue("");
          next();
        },
        { tap: '>> #loginbutton' },
        { waitFor: 'componentVisible', args: 'sheet' },
        { waitFor: 'CQ', args: 'emailfield[cls=x-field-invalid]' },
        { waitFor: 'CQ', args: 'passwordfield[cls=x-field-invalid]' },
        { tap: '>> #ok' },
        { waitFor: 'componentNotVisible', args: 'sheet' }
      );
    });

    t.it("It should validate that email field has been entered", function(t) {
      t.chain(
        function(next) {
          t.cq1('emailfield').setValue("");
          t.cq1('passwordfield').setValue("bar");
          next();
        },
        { tap: '>> #loginbutton' },
        { waitFor: 'componentVisible', args: 'sheet' },
        { waitFor: 'CQ', args: 'emailfield[cls=x-field-invalid]' },
        { waitFor: 'CQNotFound', args: 'passwordfield[cls=x-field-invalid]' },
        { tap: '>> #ok' },
        { waitFor: 'componentNotVisible', args: 'sheet' }
      );
    });

    t.it("It should validate that the password field has been entered", function(t) {
      t.chain(
        function(next) {
          t.cq1('emailfield').setValue("foo");
          t.cq1('passwordfield').setValue("");
          next();
        },
        { tap: '>> #loginbutton' },
        { waitFor: 'componentVisible', args: 'sheet' },
        { waitFor: 'CQNotFound', args: 'emailfield[cls=x-field-invalid]' },
        { waitFor: 'CQ', args: 'passwordfield[cls=x-field-invalid]' },
        { tap: '>> #ok' },
        { waitFor: 'componentNotVisible', args: 'sheet' }
      );
    });

    t.it("It should validate the entered credentials", function(t) {
      t.chain(
        function(next) {
          t.cq1('emailfield').setValue("foo");
          t.cq1('passwordfield').setValue("barz");
          next();
        },
        { tap: '>> #loginbutton' },
        { waitFor: 'componentVisible', args: 'sheet' },
        { waitFor: 'CQNotFound', args: 'emailfield[cls=x-field-invalid]' },
        { waitFor: 'CQNotFound', args: 'passwordfield[cls=x-field-invalid]' },
        { tap: '>> #ok' },
        { waitFor: 'componentNotVisible', args: 'sheet' }
      );
    });

  });
});
