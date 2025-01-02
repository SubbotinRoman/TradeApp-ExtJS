const items = [
    {
        id: 1,
        name: 'Смартфон Galaxy A54',
        description: 'Samsung Galaxy A54 5G 8/256GB, черный, Android 13',
        price: 34999,
        number: 15
    },
    {
        id: 2,
        name: 'Ноутбук Honor',
        description: 'Honor MagicBook X15 i5/16/512 Space Gray, 15.6", IPS, Intel Core i5',
        price: 49999,
        number: 8
    },
    {
        id: 3,
        name: 'Кофемашина Philips',
        description: 'Philips Series 2200 EP2231/40, автоматическая, черный',
        price: 42999,
        number: 0
    },
    {
        id: 4,
        name: 'Умная колонка Яндекс',
        description: 'Яндекс Станция Мини 2, умная колонка с Алисой, черный',
        price: 4999,
        number: 23
    },
    {
        id: 5,
        name: 'Робот-пылесос Xiaomi',
        description: 'Xiaomi Robot Vacuum S10+, робот-пылесос с влажной уборкой',
        price: 29999,
        number: 12
    },
    {
        id: 6,
        name: 'Умные часы Apple Watch',
        description: 'Apple Watch Series 9 GPS 41mm, алюминий цвета «сияющая звезда»',
        price: 39999,
        number: 0
    },
    {
        id: 7,
        name: 'Наушники Sony',
        description: 'Sony WH-1000XM5, беспроводные накладные наушники с шумоподавлением',
        price: 36999,
        number: 5
    }
];

// Основной компонент таблицы продуктов
// Отображает список продуктов в виде сетки с возможностью сортировки и фильтрации
Ext.define('products.view.table.Table', {
    extend: 'Ext.grid.Panel',
    xtype: 'table',
    reference: 'table',

    // Подключаем необходимые классы
    requires: [
        'products.view.table.TableController',
        'products.view.table.TableModel',
        'products.store.Products',
        'products.view.productWindow.ProductWindow'
    ],

    // Привязываем контроллер и модель представления
    controller: 'table',
    viewModel: 'table',
    
    // Настройки прокрутки
    scrollable: true,
    scrollFlags: {
        y: true
    },
    
    // Стили и компоновка
    cls: 'app-table',
    layout: 'fit',

    // Привязка колонок из модели
    bind: {
        columns: '{columns}'
    },

    // Панель пагинации внизу таблицы
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: true,
        displayMsg: 'Отображаются записи {0} - {1} из {2}',
        emptyMsg: 'Нет данных для отображения',
        beforePageText: 'Страница',
        afterPageText: 'из {0}',
        firstText: 'Первая страница',
        prevText: 'Предыдущая страница',
        nextText: 'Следующая страница',
        lastText: 'Последняя страница',
        refreshText: 'Обновить'
    }],

    // Инициализация компонента
    initComponent: function() {
        var me = this;
        
        // Создаем хранилище данных
        me.store = Ext.create('products.store.Products', {
            data: items.map(item => ({ ...item })),
            pageSize: 25,
            remoteSort: true,
            remoteFilter: true
        });
        
        me.callParent();
    },

    // Обработчики событий
    listeners:{
         resize: 'onResize'
    }
});
