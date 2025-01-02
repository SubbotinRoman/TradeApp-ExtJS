//Контроллер фильтров таблицы
//Управляет фильтрацией данных в таблице
Ext.define('products.view.filters.FiltersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.filters',

    //Обработчик нажатия Enter в полях фильтра
    onFilterKeyPress: function(field, e) {
        //Проверяем что нажата клавиша Enter
        if (e.getKey() === 13) { // Enter key
            //Получаем имя и значение поля
            let name = field.name;
            let value = field.getValue();
            //Получаем хранилище таблицы
            let store = this._getGridStore();
            //Если хранилище не найдено, выводим ошибку и выходим
            if (!store) {
                console.error('Store not found');
                return;
            }

            //Очищаем предыдущий фильтр
            store.clearFilter(true);

            //Если значение пустое, загружаем хранилище без фильтра
            if (!value) {
                store.load();
                return;
            }

            //Применяем фильтрацию
            //Добавляем новый фильтр в зависимости от имени поля
            if (name === 'id') {
                //Для ID используем точное совпадение
                store.addFilter({
                    type: 'string',
                    property: 'id',
                    value: value
                });
            } else if (name === 'name') {
                //Для имени используем частичное совпадение
                store.addFilter({
                    type: 'string',
                    property: 'name',
                    value: value,
                    operator: 'like'
                });
            }

            //Загружаем хранилище с новым фильтром
            store.load();
        }
    },

    //Получение хранилища данных таблицы
    _getGridStore() {
        //Находим таблицу
        let table = this.getView().up('main').down('table');
        //Возвращаем её хранилище
        return table ? table.getStore() : null;
    }
});
