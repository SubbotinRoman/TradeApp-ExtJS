//Главное окно приложения
//Отображает основной интерфейс с таблицей продуктов
Ext.define('products.view.main.Main', {
    //Расширяем класс Ext.tab.Panel
    extend: 'Ext.tab.Panel',
    //Задаем xtype для компонента
    xtype: 'main',
    //Ссылка на компонент
    reference: 'main',

    //Необходимые классы
    requires: [
        'Ext.plugin.Viewport',
        'products.view.main.MainController',
        'products.view.main.MainModel',
        'products.view.main.TableCnt'
    ],

    //Подключаем контроллер и модель
    controller: 'main',
    viewModel: 'main',
    //Подключаем плагин viewport
    plugins: 'viewport',

    //Настройки интерфейса
    ui: 'navigation',

    //Настройки заголовка
    header: {
        //Задаем тип компоновки для заголовка
        layout: {
            type: 'hbox'
        },
        //Заголовок окна
        title: {
            //Привязываем текст заголовка к модели
            bind: {
                text: '{title}'
            }
        },
        //Кнопки в заголовке
        items: [
            {
                //Тип компонента - кнопка
                xtype: 'button',
                //Привязываем текст и иконку кнопки к модели
                bind:{
                    text: '{buttons.add.text}',
                    iconCls: '{buttons.add.iconCls}',
                },
                //Выравнивание иконки кнопки
                iconAlign: 'right',
                //Отступы кнопки
                padding: 10,
                //Стиль кнопки
                style: {
                    borderColor: 'white'
                },
                //Обработчик клика по кнопке
                listeners: {
                    click: 'onAddProducts'
                }
            },
            {
                //Тип компонента - кнопка
                xtype: 'button',
                //Привязываем текст и иконку кнопки к модели
                bind:{
                    text: '{buttons.exit.text}',
                    iconCls: '{buttons.exit.iconCls}',
                },
                //Выравнивание иконки кнопки
                iconAlign: 'right',
                //Отступы кнопки
                padding: 10,
                //Стиль кнопки
                style: {
                    margin: '0px 30px',
                    borderColor: 'white'
                },
                //Обработчик клика по кнопке
                listeners: {
                    click: 'onExit'
                }
            }
        ]
    },
    //Активная вкладка по умолчанию
    activeItem: 0,
    //Содержимое вкладок
    items: [
        {
            //Тип компонента - таблица продуктов
            xtype: 'tableCnt'
        }
    ]
});
