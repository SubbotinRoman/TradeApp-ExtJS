//Модель данных главного окна
Ext.define('products.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    //Данные модели
    data: {
        title: 'Учет товаров',
        buttons: {
            exit: {
                text: 'Выход',
                iconCls: 'x-fa fa-home'
            },
            add: {
                text: 'Товары',
                iconCls: 'x-fa fa-plus-circle'
            }
        }
    }
});