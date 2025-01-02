Ext.define('products.view.filters.FiltersModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.filters',

    data: {
        id: {
            label: 'ID товара',
            value: ''
        },
        name: {
            label: 'Поиск по названию',
            value: ''
        }
    }
});