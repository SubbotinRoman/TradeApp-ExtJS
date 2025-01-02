Ext.define('products.view.main.TableCnt', {
    extend: 'Ext.container.Container',
    xtype: 'tableCnt',
    reference: 'tableCnt',

    requires: [
        'products.view.filters.Filters',
        'products.view.table.Table'
    ],

    title: 'products',
    closable: true,
    padding: '0 40',
    items: [
        {
            xtype: 'filters'
        },
        {
            xtype: 'table'
        }
    ]
});
