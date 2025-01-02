//Контроллер окна редактирования продукта
//Управляет редактированием данных продукта
Ext.define('products.view.productWindow.ProductWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productWindow',

    //Обработчик сохранения изменений
    onSave: function(param) {
        //Получаем модель представления
        var vm = this.getView().getViewModel();
        //Получаем текущие данные продукта
        var product = vm.get('product');
        //Получаем исходные данные продукта
        var initial = vm.get('initialProduct');
        //Объект для хранения изменений
        var changes = [];
        var hasChanges = false;

        // Проверяем изменения
        //Проверяем каждое поле на изменения
        if (Number(product.price) !== Number(initial.price)) {
            //Сохраняем старое и новое значение
            hasChanges = true;
            changes.push({
                field: 'Цена',
                oldValue: Number(initial.price).toLocaleString('ru-RU'),
                newValue: Number(product.price).toLocaleString('ru-RU'),
                text: 'Цена изменится с ' + Number(initial.price).toLocaleString('ru-RU') + ' на ' + Number(product.price).toLocaleString('ru-RU')
            });
        }

        if (Number(product.number) !== Number(initial.number)) {
            //Сохраняем старое и новое значение
            hasChanges = true;
            changes.push({
                field: 'Количество',
                oldValue: Number(initial.number).toLocaleString('ru-RU'),
                newValue: Number(product.number).toLocaleString('ru-RU'),
                text: 'Количество изменится с ' + Number(initial.number).toLocaleString('ru-RU') + ' на ' + Number(product.number).toLocaleString('ru-RU')
            });
        }

        //Устанавливаем флаг наличия изменений
        //Если изменений нет, закрываем окно
        if (!hasChanges) {
            Ext.Msg.alert('Информация', 'Нет изменений для сохранения');
            return;
        }

        //Создаем окно подтверждения сохранения
        var confirmWin = Ext.create('products.view.saveConfirmation.SaveConfirmation', {
            changes: changes,
            onAction: function(actionId) {
                if (actionId === 'yes') {
                    param.callback('save');
                }
                confirmWin.destroy();
            }
        });
        confirmWin.show();
    }
});
