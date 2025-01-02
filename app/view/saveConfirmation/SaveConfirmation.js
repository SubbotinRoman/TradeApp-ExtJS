//Окно подтверждения сохранения изменений
Ext.define('products.view.saveConfirmation.SaveConfirmation', {
    extend: 'Ext.window.Window',
    xtype: 'saveConfirmation',
    reference: 'saveConfirmation',

    requires: [
        'products.view.saveConfirmation.SaveConfirmationModel'
    ],

    modal: true,
    closable: false,
    bodyPadding: 50,
    bind:{
        title: '{title}',
        html: '{message}'
    },
    cls: 'save-confirm',
    constructor(config){
        let onAction = config.onAction;
        this.viewModel = Ext.create('products.view.saveConfirmation.SaveConfirmationModel');
        this.viewModel.set('changes', config.changes);

        this.buttons = [
            {
                bind:{
                    text: '{buttons.no}'
                },
                listeners: {
                    click: ()=>onAction('no')
                }
            },
            {
                bind:{
                    text: '{buttons.yes}'
                },
                listeners: {
                    click: ()=>onAction('yes')
                }
            }
        ]

        this.callParent(arguments);
        return this;
    },
    items:[]
});
