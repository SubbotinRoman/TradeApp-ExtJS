// Определение модели данных для продукта
// Содержит все поля, которые описывают один продукт
Ext.define('products.store.Product', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},          // Уникальный идентификатор продукта
        {name: 'name',  type: 'string'},       // Название продукта
        {name: 'description', type: 'string'}, // Описание продукта
        {name: 'price', type: 'float'},        // Цена продукта
        {name: 'number', type: 'int'}          // Количество продукта на складе
    ]
});

// Хранилище данных для списка продуктов
// Использует memory proxy для работы с данными в памяти
Ext.define('products.store.Products', {
    extend: 'Ext.data.Store',
    alias: 'store.products',
    model: 'products.store.Product',
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
