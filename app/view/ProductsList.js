// app/view/ProductsList.js
Ext.define('TradingApp.view.ProductsList', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.productslist',
  store: 'Products',
  
  columns: [{
      text: 'ID',
      dataIndex: 'id',
      width: 40
  },{
      text: 'Имя',
      dataIndex: 'name',
      flex: 1,
      renderer: function(value, metaData, record) {
          return '<a href="#" onclick="showProductCard(' + record.getId() + ')">' + value + '</a>';
      }
  },{
      text: 'Описание',
      dataIndex: 'description',
      flex: 2
  },{
      text: 'Цена',
      dataIndex: 'price',
      align: 'right',
      renderer: Ext.util.Format.numberRenderer('0.00')
  },{
      text: 'Количество',
      dataIndex: 'quantity',
      align: 'right',
      renderer: function(value) {
          return value ? value : '<span style="color: red;">0</span>';
      }
  }],
  
  tbar: [{
      xtype: 'textfield',
      emptyText: 'Поиск по идентификатору...',
      enableKeyEvents: true,
      listeners: {
          specialkey: 'filterById'
      }
  },{
      xtype: 'textfield',
      emptyText: 'Поиск по описанию...',
      enableKeyEvents: true,
      listeners: {
          specialkey: 'filterByDescription'
      }
  }],
  
  bbar: {
      xtype: 'pagingtoolbar',
      displayInfo: true
  }
});