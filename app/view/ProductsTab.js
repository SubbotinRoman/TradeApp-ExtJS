// Определяем класс вкладки с товарами
Ext.define('TradingApp.view.ProductsTab', {
    extend: 'Ext.panel.Panel',
    
    title: 'Товары',
    closable: true,
    layout: 'border',
    
    // Инициализация компонента
    initComponent() {
        // Создаем хранилище данных
        const store = Ext.create('TradingApp.store.Products');
        
        // Методы фильтрации
        const filterById = (value) => {
            if (value) {
                store.clearFilter();
                store.filter('id', parseInt(value, 10));
            } else {
                store.clearFilter();
            }
        };

        const filterByName = (value) => {
            if (value) {
                store.clearFilter();
                store.filter('name', value.toLowerCase(), true, false);
            } else {
                store.clearFilter();
            }
        };
        
        // Конфигурация компонента
        Ext.apply(this, {
            items: [{
                // Верхняя панель с фильтрами
                region: 'north',
                height: 80,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                bodyPadding: 10,
                items: [{
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        labelWidth: 120,
                        margin: '0 10 5 0'
                    },
                    items: [{
                        // Фильтр по ID
                        xtype: 'textfield',
                        fieldLabel: 'ID товара',
                        width: 250,
                        listeners: {
                            specialkey: (field, e) => {
                                if (e.getKey() === e.ENTER) {
                                    filterById(field.getValue());
                                }
                            }
                        }
                    }, {
                        // Фильтр по описанию
                        xtype: 'textfield',
                        fieldLabel: 'Описание товара',
                        width: 400,
                        listeners: {
                            specialkey: (field, e) => {
                                if (e.getKey() === e.ENTER) {
                                    filterByName(field.getValue());
                                }
                            }
                        }
                    }]
                }]
            }, {
                // Таблица с товарами
                region: 'center',
                xtype: 'grid',
                store,
                viewConfig: {
                    stripeRows: true,
                    getRowClass: (record) => record.get('quantity') === 0 ? 'zero-quantity' : ''
                },
                columns: [{
                    text: 'ID',
                    dataIndex: 'id',
                    width: 70
                }, {
                    text: 'Имя',
                    dataIndex: 'name',
                    flex: 1
                }, {
                    text: 'Описание',
                    dataIndex: 'description',
                    flex: 2
                }, {
                    text: 'Цена',
                    dataIndex: 'price',
                    width: 100,
                    align: 'right',
                    renderer: (value) => value.toFixed(2)
                }, {
                    text: 'Кол-во',
                    dataIndex: 'quantity',
                    width: 100,
                    align: 'right',
                    renderer: (value) => {
                        if (value === 0) {
                            return '<div style="background-color: red; color: black; padding: 2px 5px; text-align: right;">' + value + '</div>';
                        }
                        return value;
                    }
                }]
            }]
        });
        
        this.callParent(arguments);
        
        // Загружаем данные
        store.load();
    }
});
