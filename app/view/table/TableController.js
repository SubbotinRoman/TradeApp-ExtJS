// Контроллер для управления таблицей продуктов
Ext.define('products.view.table.TableController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.table',

    // Обработчик изменения размера таблицы
    // Автоматически подстраивает высоту таблицы под размер контейнера
    onResize (){
        let view = this.getView();
        let cnt = view.up();
        let fullHeight = cnt.getHeight();
        
        // Вычитаем высоту всех остальных компонентов
        let items = cnt.getRefItems();
        items.forEach(item=>{
            if(item.xtype === 'table') return;
            fullHeight -= item.getHeight();
        });

        // Добавляем небольшой отступ для надежности
        fullHeight -= 20;
        fullHeight > 0 ? fullHeight : 0;
        view.setHeight(fullHeight);
    },

    // Функция отрисовки ячейки с количеством
    // Если количество = 0, окрашивает ячейку в красный цвет
    renderNumberCell(value, item) {
        if (value === 0 && item) {
            item.tdStyle += 'background-color: #ffa3a3';
        }
        return value;
    },

    // Обработчик клика по ячейке с именем продукта
    // Открывает окно редактирования продукта
    onCellClick(){
        let itemData = arguments[5].data;
        let index = arguments[2];
        let window = Ext.create({
            xtype: 'productWindow',
            product: itemData,
            onAction: action =>{
                switch(action){
                    case 'close':
                        window.close();
                        break;
                    case 'save':
                        this._save(window,index);
                        window.close();
                        break;
                }
            }
        });
        window.show();
        this._window = window;
    },

    // Внутренний метод для сохранения изменений продукта
    // Показывает диалог подтверждения, если были изменения
    _save(window, index){
        let card = window.down('productCard');
        let newItem = card.getViewModel().data.product;
        let oldItem = this.getView().getStore().getAt(index).data;

        // Проверяем, были ли изменены цена или количество
        if (oldItem.number !== newItem.number || oldItem.price !== newItem.price) {
            Ext.Msg.show({
                title: 'Подтверждение',
                message: 'Данные были изменены. Сохранить изменения?',
                buttons: Ext.Msg.OKCANCEL,
                buttonText: {
                    ok: 'Да',
                    cancel: 'Нет'
                },
                icon: Ext.Msg.QUESTION,
                fn: function(btn) {
                    if (btn === 'ok') {
                        let grid = this.getView();
                        let store = grid.getStore();
                        var record = store.getAt(index);
                        record.set('number', newItem.number);
                        record.set('price', newItem.price);
                        store.reload();
                        window.close();
                    }
                },
                scope: this
            });
        } else {
            window.close();
        }
    }
});
