Ext.define('SenchaBDD.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'name', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'age', type: 'number', defaultValue: 18 }
        ],

        validations: [
          { field: 'email', type: 'presence' }
        ]
    }
});
