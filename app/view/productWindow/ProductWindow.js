// Окно редактирования продукта
Ext.define('products.view.productWindow.ProductWindow', {
    // Наследуемся от базового окна ExtJS
    extend: 'Ext.window.Window',
    // Регистрируем компонент с именем productWindow
    xtype: 'productWindow',
    reference: 'productWindow',

    // Подключаем необходимые классы
    requires: [
        'products.view.productWindow.ProductWindowModel',
        'products.view.productWindow.ProductWindowController',
        'products.view.productCard.ProductCard',
        'products.view.saveConfirmation.SaveConfirmation'
    ],

    // Подключаем контроллер и модель представления
    controller: 'productWindow',
    viewModel: {
        type: 'productWindow'
    },

    // Настройки окна
    modal: true, // Модальное окно (блокирует работу с основным окном)
    closable: false, // Запрещаем закрытие окна по крестику
    width: 400,
    height: 400,
    layout: 'fit', // Растягиваем содержимое на всё окно

    // Инициализация компонента
    initComponent: function() {
        var me = this;
        
        // Копируем данные товара в модель представления
        me.getViewModel().setData({
            product: Ext.clone(me.initialConfig.product),
            initialProduct: Ext.clone(me.initialConfig.product)
        });
        
        // Устанавливаем заголовок окна
        me.title = 'Карточка товара: ' + me.initialConfig.product.name;
        
        // Добавляем форму карточки товара и кнопки
        me.items = [{
            xtype: 'productCard',
            reference: 'productCard',
            viewModel: me.getViewModel(),
            // Кнопки внизу формы
            buttons: [{
                bind: {
                    text: '{buttons.cancel}'
                },
                handler: function() {
                    me.initialConfig.onAction('close');
                }
            }, {
                bind: {
                    text: '{buttons.save}'
                },
                handler: function() {
                    me.getController().onSave({
                        callback: me.initialConfig.onAction
                    });
                }
            }]
        }];
        
        // Вызываем родительский метод инициализации
        me.callParent();
    }
});
