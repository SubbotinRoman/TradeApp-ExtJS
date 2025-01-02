//Модель данных окна подтверждения сохранения
//Содержит текст сообщений и описание изменений
Ext.define('products.view.saveConfirmation.SaveConfirmationModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.saveConfirmation',

    //Данные модели
    data: {
        //Заголовок окна
        title: 'Подтверждение',
        //Текст сообщения
        message: 'Сохранить изменения?',
        //Текст кнопок
        buttons: {
            yes: 'Да',
            no: 'Нет'
        },
        //Список изменений
        changes: []
    },

    //Вычисляемые свойства
    formulas: {
        //Формирование текста сообщения со списком изменений
        message: function(get) {
            //Получаем список изменений
            const changes = get('changes');
            if (!changes || !changes.length) return '';

            //Формируем текст сообщения
            let message = '<ul>';
            changes.forEach(function(change) {
                message = message.concat(`<li>${change.text}</li>`);
            });
            message = message.concat('</ul>');
            return message;
        }
    }
});