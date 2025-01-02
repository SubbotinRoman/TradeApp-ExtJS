// Определяем класс главного окна приложения
Ext.define('TradingApp.view.MainWindow', {
    extend: 'Ext.container.Viewport',
    
    layout: 'border',
    
    // Конфигурация компонентов
    items: [{
        // Верхняя панель
        region: 'north',
        height: 80,
        xtype: 'container',
        layout: 'vbox',
        cls: 'main-header',
        items: [{
            // Заголовок приложения
            xtype: 'component',
            html: '<div style="color: white; font-size: 18px; padding: 10px;">Учет товаров</div>'
        }, {
            // Панель инструментов
            xtype: 'toolbar',
            flex: 1,
            style: {
                backgroundColor: 'transparent',
                padding: '0 10px'
            },
            items: [{
                // Кнопка "Товары"
                text: 'Товары',
                scale: 'medium',
                cls: 'transparent-button',
                handler: () => {
                    const tabPanel = Ext.getCmp('mainTabPanel');
                    const newTab = Ext.create('TradingApp.view.ProductsTab');
                    tabPanel.add(newTab);
                    tabPanel.setActiveTab(newTab);
                }
            }, {
                // Кнопка "Выход"
                text: 'Выход',
                scale: 'medium',
                cls: 'transparent-button',
                handler: function() {
                    this.up('viewport').destroy();
                    const loginForm = Ext.getCmp('loginForm');
                    loginForm.getForm().reset();
                    loginForm.show();
                }
            }]
        }]
    }, {
        // Панель вкладок
        region: 'center',
        xtype: 'tabpanel',
        id: 'mainTabPanel',
        style: {
            backgroundColor: '#ffffff'
        },
        tabBar: {
            style: {
                backgroundColor: '#424242'
            }
        },
        items: []
    }]
});
