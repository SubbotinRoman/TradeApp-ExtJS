//Модель данных окна редактирования продукта
//Содержит данные продукта и отслеживает изменения
Ext.define('products.view.productWindow.ProductWindowModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productWindow',

    //Данные модели
    data: {
        //Заголовок окна
        title: 'Карточка товара',
        //Текущие данные продукта
        product: null,
        //Исходные данные продукта
        initialProduct: null,
        //Сообщения при отсутствии изменений
        noChanges: {
            title: 'Информация',
            text: 'Нет изменений для сохранения'
        },
        //Описание полей продукта
        items: {
            id: {
                label: 'ID'
            },
            name: {
                label: 'Название'
            },
            price: {
                label: 'Цена'
            },
            number: {
                label: 'Количество'
            }
        },
        //Текст кнопок
        buttons: {
            cancel: 'Отмена',
            save: 'Сохранить'
        }
    }
});