StartTest(function(t) {
  t.describe("The application", function(t) {

    t.it("It should allow the user to sign in", function(t) {
      t.login("foo", "bar", function() {
        t.expect(true).toBe(true);
      });
    });

    t.it("It should allow the user to sign out", function(t) {
      t.logout(function() {
        t.expect(true).toBe(true);
      });
    });

  });
});