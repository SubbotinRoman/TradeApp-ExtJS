// Модель представления для таблицы продуктов
// Определяет структуру и поведение колонок таблицы
Ext.define('products.view.table.TableModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.table',

    // Конфигурация данных модели
    data: {
        // Описание колонок таблицы
        columns: [
            { 
                text: 'ID',           // Заголовок колонки
                dataIndex: 'id'       // Поле из модели данных
            },
            {
                text: 'Имя',          // Название продукта
                dataIndex: 'name',
                flex: 2,              // Относительная ширина колонки
                listeners: {
                    click: 'onCellClick'  // Обработчик клика по ячейке
                }
            },
            { 
                text: 'Описание',     // Описание продукта
                dataIndex: 'description',
                flex: 3               // Самая широкая колонка
            },
            { 
                text: 'Цена',         // Цена продукта
                dataIndex: 'price',
                flex: 1,
                xtype: 'numbercolumn' // Специальный тип колонки для чисел
            },
            {
                text: 'Количество',   // Количество на складе
                dataIndex: 'number',
                flex: 1,
                renderer: 'renderNumberCell' // Пользовательский рендерер
            }
        ]
    }
});