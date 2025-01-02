// Форма карточки продукта
// Отображает и позволяет редактировать данные продукта
Ext.define('products.view.productCard.ProductCard', {
    // Наследуемся от базовой формы ExtJS
    extend: 'Ext.form.Panel',
    // Регистрируем компонент с именем productCard
    xtype: 'productCard',

    // Отступы внутри формы
    bodyPadding: 50,

    // Настройки по умолчанию для всех полей формы
    defaults: {
        // Сообщения об ошибках будут показываться справа от поля
        msgTarget: 'side',
        // Текст ошибки для обязательных полей
        blankText: 'Это поле обязательно для заполнения'
    },

    // Список полей формы
    items: [{
        // Поле только для отображения (нередактируемое)
        xtype: 'displayfield',
        name: 'id',
        // Привязка к данным из ViewModel
        bind: {
            fieldLabel: '{items.id.label}',
            value: '{product.id}'
        }
    }, {
        // Поле только для отображения названия товара
        xtype: 'displayfield',
        name: 'name',
        bind: {
            fieldLabel: '{items.name.label}',
            value: '{product.name}'
        }
    }, {
        // Числовое поле для ввода цены
        xtype: 'numberfield',
        name: 'price',
        // Минимальное значение цены
        minValue: 0,
        // Шаг изменения цены
        step: 100,
        // Поле обязательно для заполнения
        allowBlank: false,
        // Запрещаем отрицательные значения
        allowNegative: false,
        bind: {
            fieldLabel: '{items.price.label}',
            value: '{product.price}'
        }
    }, {
        // Числовое поле для ввода количества
        xtype: 'numberfield',
        name: 'number',
        // Минимальное количество
        minValue: 0,
        // Шаг изменения количества
        step: 1,
        // Поле обязательно для заполнения
        allowBlank: false,
        // Запрещаем дробные числа
        allowDecimals: false,
        // Запрещаем отрицательные значения
        allowNegative: false,
        bind: {
            fieldLabel: '{items.number.label}',
            value: '{product.number}'
        }
    }]
});
