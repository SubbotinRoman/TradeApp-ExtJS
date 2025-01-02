//Главный контроллер приложения
//Управляет основной логикой и навигацией
Ext.define('products.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    //Инициализация контроллера при запуске
    init: function () {
        //Вызываем родительский метод
        this.callParent();
        //Счетчик для нумерации вкладок
        this._itemsNum = 0;
    },

    //Обработчик выхода из системы
    onExit: function () {
        //Удаляем признак авторизации
        localStorage.removeItem("authorized");
        //Уничтожаем текущее представление
        this.getView().destroy();
        //Создаем окно авторизации
        Ext.create({ xtype: 'login' });
    },

    //Добавление новой вкладки с продуктами
    onAddProducts: function () {
        this._addNewTab();
    },

    //Отрисовка ячейки с количеством
    //Красит в красный если количество = 0
    renderNumberCell(value, item) {
        if (value === 0) {
            //Добавляем красный фон для нулевого количества
            item.tdStyle += 'background-color: #ffa3a3';
        }
        return value;
    },

    //Создание новой вкладки с таблицей
    _addNewTab: function () {
        //Получаем панель вкладок
        let panel = this.getView();
        //Увеличиваем счетчик
        let index = ++this._itemsNum;

        //Добавляем новую вкладку
        panel.add([{
            xtype: `tableCnt`
        }]);
        //Делаем новую вкладку активной
        panel.setActiveItem(index);
    },

    //Получение данных из модели представления
    _getData: function () {
        let model = this.getViewModel();
        return model.data;
    },

    //Обработчик клика по ячейке имени
    onCellClick(){
        alert('name click');
    }
});
