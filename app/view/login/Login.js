//Окно авторизации
//Отображает форму входа в систему
Ext.define('products.view.login.Login', {
    extend: 'Ext.container.Container',
    xtype: 'login',

    //Необходимые классы
    requires: [
        'Ext.plugin.Viewport',
        'products.view.login.LoginController',
        'products.view.login.LoginModel',
        'Ext.form.Panel'
    ],

    //Подключаем контроллер и модель
    controller: 'login',
    viewModel: 'login',
    plugins: 'viewport',

    //Компоненты окна
    bodyPadding: 10,
    layout: 'center',
    items: [
        {
            xtype: 'form',
            reference: 'form',
            bodyPadding: 50,
            width: 550,
            //Привязка заголовка к модели
            title: {
                bind: {
                    text: '{title}'
                }
            },
            //Форма авторизации
            items: [{
                xtype: 'textfield',
                name: 'login',
                allowBlank: false,
                msgTarget: 'side',
                blankText: 'Это поле обязательно для заполнения',
                //Привязка к модели
                bind: {
                    fieldLabel: '{login.label}',
                    value: '{login.value}'
                }
            }, {
                xtype: 'textfield',
                name: 'password',
                inputType: 'password',
                allowBlank: false,
                msgTarget: 'side',
                blankText: 'Это поле обязательно для заполнения',
                //Привязка к модели
                bind: {
                    fieldLabel: '{password.label}',
                    value: '{password.value}'
                }
            }],
            //Кнопки формы
            buttons: [{
                //Привязка текста к модели
                bind:{
                    text: '{buttons.enter}'
                },
                formBind: true,
                //Обработчик нажатия
                listeners: {
                    click: 'onEnter'
                }
            }]
        }
    ]
});
