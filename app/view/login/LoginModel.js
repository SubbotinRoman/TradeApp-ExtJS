//Модель данных формы авторизации
//Содержит текстовые данные и значения полей формы
Ext.define('products.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',

    //Данные модели
    data: {
        //Заголовок окна
        title: 'Авторизация',
        //Значение поля логина
        login: {
            value:'',
            label: 'Логин'
        },
        //Значение поля пароля
        password: {
            value:'',
            label: 'Пароль'
        },
        //Текст кнопки
        buttons: {
            enter: 'Войти'
        },
        //Сообщение об ошибке
        message: {
            text: 'Неверный логин или пароль!',
            title: 'Ошибка'
        }
    }
});