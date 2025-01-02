// app/controller/Main.js
Ext.define('TradingApp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: ['LoginForm', 'MainWindow', 'ProductsList', 'ProductCard'],
    
    refs: [{
        ref: 'mainWindow',
        selector: 'viewport'
    },{
        ref: 'productTabPanel',
        selector: '#productTabPanel'
    },{
        ref: 'productsGrid',
        selector: 'productslist'
    },{
        ref: 'productCard',
        selector: 'productcard'
    }],
    
    init: function() {
        this.control({
            'loginform button': {
                click: 'onLoginClick'
            },
            'button[text="Товары"]': {
                click: 'onShowProducts'
            },
            'button[text="Выход"]': {
                click: 'onLogout'
            },
            'productslist textfield': {
                specialkey: 'onSpecialKey'
            },
            'productcard button[text="Отмена"]': {
                click: 'onCancelEdit'
            },
            'productcard button[text="Сохранить"]': {
                click: 'onSaveEdit'
            }
        });
    },
    
    onLoginClick: function(button) {
        // Код из предыдущего примера...
    },
    
    onShowProducts: function() {
        // Код из предыдущего примера...
    },
    
    onLogout: function() {
        // Код из предыдущего примера...
    },
    
    onSpecialKey: function(field, e) {
        // Код из предыдущего примера...
    },
    
    showProductCard: function(record) {
        var card = Ext.create('TradingApp.view.ProductCard'),
            form = card.down('form');
        
        form.loadRecord(record);
        card.show();
    },
    
    onCancelEdit: function() {
        this.getProductCard().close();
    },
    
    onSaveEdit: function() {
        var card = this.getProductCard(),
            form = card.down('form'),
            record = form.getRecord(),
            currentValues = form.getValues(),
            changed = form.isDirty(); // Проверяем, были ли изменения в форме
        
        if (changed) {
            Ext.Msg.confirm('Подтверждение', 'Есть измененные данные. Сохранить?', function(choice) {
                if (choice === 'yes') {
                    record.set(currentValues);
                    record.save();
                    card.close();
                }
            });
        } else {
            card.close();
        }
    }
});