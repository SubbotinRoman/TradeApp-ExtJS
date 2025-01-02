function getView(){
    let isAuthorized = localStorage.getItem("authorized");
    return isAuthorized ? 'products.view.main.Main': 'products.view.login.Login';
}
Ext.application({
    name: 'products',

    extend: 'products.Application',

    requires: [
        'products.view.login.Login',
        'products.view.main.Main'
    ],
    mainView: getView()
});
