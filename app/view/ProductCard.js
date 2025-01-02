Ext.define('TradingApp.view.ProductCard', {
    extend: 'Ext.window.Window',
    
    constructor: function(config) {
        var record = config.productRecord;
        
        Ext.apply(config, {
            title: 'Карточка товара: ' + record.get('name'),
            width: 500,
            modal: true,
            bodyStyle: {
                backgroundColor: '#ffffff',
                padding: '15px'
            },
            header: {
                style: {
                    backgroundColor: '#0288D1',
                    padding: '10px'
                }
            },
            headerPosition: 'top',
            items: [{
                xtype: 'form',
                border: false,
                bodyStyle: {
                    backgroundColor: '#ffffff'
                },
                defaults: {
                    labelWidth: 120,
                    labelStyle: 'color: #666666;',
                    margin: '5 0'
                },
                items: [{
                    xtype: 'displayfield',
                    fieldLabel: 'ID',
                    value: record.get('id')
                }, {
                    xtype: 'displayfield',
                    fieldLabel: 'Наименование',
                    value: record.get('name')
                }, {
                    xtype: 'numberfield',
                    fieldLabel: 'Цена',
                    name: 'price',
                    value: record.get('price'),
                    minValue: 0,
                    allowDecimals: true,
                    decimalPrecision: 2,
                    hideTrigger: false,
                    keyNavEnabled: true,
                    mouseWheelEnabled: true
                }, {
                    xtype: 'numberfield',
                    fieldLabel: 'Кол-во',
                    name: 'quantity',
                    value: record.get('quantity'),
                    minValue: 0,
                    allowDecimals: false,
                    hideTrigger: false,
                    keyNavEnabled: true,
                    mouseWheelEnabled: true
                }]
            }],
            buttons: [{
                text: 'Сохранить',
                style: {
                    backgroundColor: '#0288D1',
                    borderColor: '#0288D1'
                },
                handler: function() {
                    var win = this.up('window');
                    var form = win.down('form');
                    var values = form.getValues();
                    
                    if (record.get('price') !== parseFloat(values.price) || 
                        record.get('quantity') !== parseInt(values.quantity)) {
                        Ext.Msg.confirm('Подтверждение', 'Данные были изменены. Сохранить изменения?', 
                            function(btn) {
                                if (btn === 'yes') {
                                    record.set('price', parseFloat(values.price));
                                    record.set('quantity', parseInt(values.quantity));
                                    win.close();
                                }
                            }
                        );
                    } else {
                        win.close();
                    }
                }
            }, {
                text: 'Отмена',
                style: {
                    backgroundColor: '#0288D1',
                    borderColor: '#0288D1'
                },
                handler: function() {
                    this.up('window').close();
                }
            }]
        });
        
        this.callParent([config]);
    }
});
