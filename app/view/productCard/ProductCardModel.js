Ext.define('products.view.productCard.ProductCardModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.productCard',

    data: {
        title: 'Карточка товара',
        items: {
            id: {
                label: 'ID'
            },
            name: {
                label: 'Наименование'
            },
            price: {
                label: 'Цена'
            },
            number: {
                label: 'Количество'
            }
        },
        buttons: {
            save: {
                text: 'Сохранить'
            },
            cancel: {
                text: 'Отмена'
            }
        },
        message: {
            save: {
                title: 'Сохранение',
                text: 'Данные были изменены. Сохранить изменения?'
            }
        }
    }
});
