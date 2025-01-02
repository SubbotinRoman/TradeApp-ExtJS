//Контроллер формы авторизации
//Управляет процессом входа в систему
Ext.define('products.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    //Обработчик нажатия кнопки входа
    onEnter: function () {
        //Проверяем корректность логина и пароля
        if (!this._checkPassword()) {
            //При ошибке авторизации
            //Показываем сообщение об ошибке
            this._openMsg();
            return;
        }
        //При успешной авторизации
        //Сохраняем признак авторизации
        localStorage.setItem("authorized", true);
        //Уничтожаем окно логина
        this.getView().destroy();
        //Создаем главное окно приложения
        Ext.create({ xtype: 'main' });
    },
    //Проверяем корректность логина и пароля
    _checkPassword: function () {
        //Получаем значения полей
        let data = this._getData();
        //Проверяем логин
        if (data.login.value !== 'admin') {
            return false;
        }
        //Проверяем пароль
        if (data.password.value !== 'padmin') {
            return false;
        }
        return true;
    },
    //Получаем данные из модели представления
    _getData: function () {
        //Получаем модель представления
        let model = this.getViewModel();
        //Возвращаем данные модели
        return model.data;
    },
    //Показываем сообщение об ошибке
    _openMsg: function () {
        //Получаем данные из модели представления
        let data = this._getData();
        //Получаем конфигурацию сообщения
        let config = data.message;

        //Показываем сообщение
        Ext.Msg.alert({
            title: config.title,
            message: config.text
        });
    }
});
