/**
 * Главный класс приложения
 * Создается при вызове Ext.application() в app.js
 * Здесь определяются основные настройки приложения
 */
Ext.define('products.Application', {
    extend: 'Ext.app.Application',

    name: 'products',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true // Включаем всплывающие подсказки для десктопной версии
        }
    },

    stores: [
        // Глобальные хранилища данных
    ],

    // Обработчик обновления приложения
    onAppUpdate: function () {
        Ext.Msg.confirm('Обновление приложения', 'Доступно обновление приложения. Перезагрузить?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
