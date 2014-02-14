describe('SenchaBDD.model.User', function() {
  
  it('exists', function() {
    var model = Ext.create('SenchaBDD.model.User');
    expect(model.$className).toEqual('SenchaBDD.model.User');
  });

  it('has data', function() {
    var user = Ext.create('SenchaBDD.model.User', {
      name: 'Homer J. Simpson',
      email: 'homer@j.simpson',
      age: 39
    });
    expect(user.get('name')).toEqual('Homer J. Simpson');
    expect(user.get('email')).toEqual('homer@j.simpson');
    expect(user.get('age')).toEqual(39);
  });

  it('has default value', function() {
    var user = Ext.create('SenchaBDD.model.User');
    expect(user.get('age')).toEqual(18);
  });

  it('require an email address', function() {
    var user = Ext.create('SenchaBDD.model.User');
    var errors = user.validate();

    expect(errors.isValid()).toBeFalsy();
    expect(errors.getByField('email')[0].getMessage()).toEqual('must be present');
  });

});
