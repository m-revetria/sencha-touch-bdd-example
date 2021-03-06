/*

Siesta 2.0.5
Copyright(c) 2009-2013 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
Ext.define('Siesta.Harness.Browser.UI.TreeFilterField', {
    extend      : 'Ext.form.field.Trigger',
    alias       : 'widget.treefilter',
    
    filterGroups        : false,
    
    store               : null,
    
    filterField         : 'text',
    
    hasAndCheck         : null,
    andChecker          : null,
    andCheckerScope     : null,
    
    trigger1Cls         : 'x-form-clear-trigger',
    
    triggerLeafCls      : 'tr-filter-trigger-leaf',
    triggerGroupCls     : 'tr-filter-trigger-group',

    
    initComponent : function () {
        var me = this;

        Ext.apply(this, {
            trigger2Cls     : this.triggerLeafCls,
            
            onTrigger1Click : function() {
                me.reset()
            },
            
            onTrigger2Click : function() {
                me.setFilterGroups(!me.getFilterGroups())
            },
            
            listeners       : {
                change          : this.onFilterChange,
                specialkey      : this.onFilterSpecialKey,
                scope           : this,
                
                buffer          : 400
            }
        })
    
        this.callParent(arguments);
    },
    
    
    afterRender : function () {
        this.callParent(arguments)
        
        if (this.filterGroups) {
            this.triggerEl.item(1).addCls(this.triggerGroupCls)
            this.triggerEl.item(1).removeCls(this.triggerLeafCls)
        }
    },
    
    
    onFilterSpecialKey : function(field, e, t) {
        if (e.keyCode === e.ESC) {
            field.reset();
        }
    },
    
    
    setFilterGroups : function (value) {
        if (value != this.filterGroups) {
            this.filterGroups   = value
            
            if (this.rendered) {
                var el      = this.triggerEl.item(1)
                
                if (value) {
                    el.addCls(this.triggerGroupCls)
                    el.removeCls(this.triggerLeafCls)
                } else {
                    el.removeCls(this.triggerGroupCls)
                    el.addCls(this.triggerLeafCls)
                }
            }
            
            this.refreshFilter()
            
            this.fireEvent('filter-group-change', this)
        }
    },
    
    
    getFilterGroups : function () {
        return this.filterGroups
    },
    
    
    refreshFilter : function () {
        this.onFilterChange(this, this.getValue())
    },
    
    
    onFilterChange : function (field, newValue) {
        if (newValue || this.hasAndCheck && this.hasAndCheck()) {
            var field           = this.filterField
            var parts           = newValue.split(/\s*\|\s*/);
            var regexps         = []
            var lengths         = []
            
            for (var i = 0; i < parts.length; i++) {
                // ignore empty
                if (parts[ i ]) {
                    regexps.push(
                        Ext.Array.map(parts[ i ].split(/\s+/), function (token) { return new RegExp(Ext.String.escapeRegex(token), 'i') })
                    )
                    lengths.push(regexps[ regexps.length - 1 ].length)
                }
            }
            
            var andChecker      = this.andChecker
            var andCheckerScope = this.andCheckerScope || this
            
            this.store.filterTreeBy({
                filter  : function (node) {
                    if (andChecker && !andChecker.call(andCheckerScope, node)) return false
                    
                    var title       = node.get(field)
                    
                    for (var p = 0; p < regexps.length; p++) {
                        var groupMatch  = true
                        
                        // blazing fast "for" loop! :)
                        for (var i = 0; i < lengths[ p ]; i++)
                            if (!regexps[ p ][ i ].test(title)) {
                                groupMatch  = false
                                break
                            }
                            
                        if (groupMatch) return true
                    }
                        
                    return false
                },
                fullMathchingParents    : this.filterGroups
            })
        } else {
            this.store.clearTreeFilter()
        }
    }
})
