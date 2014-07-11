Ext.define('SenchaBDD.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'home',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',

        'SenchaBDD.view.ColorsList'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                cls: 'home',
                iconCls: 'home',
                title: 'Welcome',
                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Welcome to Sencha BDD'
                    },
                    {
                        docked: 'bottom',
                        xtype: 'formpanel',
                        height: '60px',

                        items: [
                            {
                                xtype: 'fieldset',

                                items: [
                                    {
                                        xtype: 'button',
                                        itemId: 'logoutbutton',
                                        text: "Sign out"
                                    }
                                ]
                            }
                        ]
                    }
                ],

                html: [
                    "<p>This is a sample project to setup your test environment. ",
                    "We are using <a href='http://jasmine.github.io/2.0/introduction.html' target='_blank'>Jasmine</a> to run automated unity test. ",
                    "For integration tests we use the framework <a href='http://www.bryntum.com/docs/siesta/' target='_blank'>Siesta</a></p>",
                    "<p>Open your terminal and run this command form the root project's directory `rake jasmine init` to start Jasmine server, ",
                    "then open <a href='http://localhost:8888/' target='_blank'>http://localhost:8888/</a> to see the results</p>",
                    "<p>Here <a href='/test.html' target='_blank'>/test.html</a> you can run the integration tests",
                    "</p>"
                ].join("")
            },
            {
                xtype: 'color_list',
                title: 'Colors',
                iconCls: 'star',
                styleHtmlContent: true,
                store: 'colors_store',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    }
                ],

                listeners: {
                    initialize: function(me, eOpts) {
                        me.getStore().load();
                    }
                }
            },
            {
                itemId: 'getstarted',
                iconCls: 'action',
                title: 'Get Started',
                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        html: [
                            "<p>To run the Jasmine tests first you need to run `bundle exec install` to install rake, jasmine and jasmine-phantom. ",
                            "After that, you can run the jasmine server and see the results in <a href='http://localhost:8888' target='_blank'>http://localhost:8888</a> ",
                            " or you can run the test in the terminal. To start up Jasmine server run `rake jasmine init`, for run in terminal execute `rake jasmine:ci`",
                            "</p>",
                            "<p>To run the Siesta tests, you just need to open the test page <a href='/test.html' target='_blank'>/test.html</a>. ",
                            "In that page you run all tests and see the results",
                            "</p>"
                        ].join('')
                    }
                ]
            }
        ]
    }
});
