//Панель фильтров для таблицы продуктов
Ext.define('products.view.filters.Filters', {
    extend: 'Ext.form.Panel',
    xtype: 'filters',
    reference: 'filters',

    requires: [
        'products.view.filters.FiltersController',
        'products.view.filters.FiltersModel'
    ],

    controller: 'filters',
    viewModel: 'filters',

    padding: '20 0',
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    cls: 'app-filters',
    //Поля фильтрации
    items: [
        {
            xtype: 'textfield',
            name: 'id',
            width: 200,
            emptyText: 'Введите ID товара...',
            labelAlign: 'top',
            enableKeyEvents: true,
            bind: {
                fieldLabel: '{id.label}',
                value: '{id.value}'
            },
            listeners: {
                keypress: 'onFilterKeyPress'
            }
        },
        {
            xtype: 'textfield',
            name: 'name',
            width: 250,
            margin: '0 0 0 20',
            emptyText: 'Введите название товара...',
            labelAlign: 'top',
            enableKeyEvents: true,
            bind: {
                fieldLabel: '{name.label}',
                value: '{name.value}'
            },
            listeners: {
                keypress: 'onFilterKeyPress'
            }
        }
    ]
});
