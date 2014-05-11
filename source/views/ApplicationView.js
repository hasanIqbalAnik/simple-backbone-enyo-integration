/**
 * Created by anik on 4/28/14.
 */
enyo.kind({

    name: "ApplicationView",
    components: [
        {kind: "onyx.InputDecorator", components: [
            {kind: "onyx.Input", placeholder: "Enter product name...", onkeypress: "addProductToList"}
        ]},
        {
            name: "productListView", kind: "ProductListView"
        }
    ],
    constructor: function () {
        this.inherited(arguments);
        if(appIsOnline('localhost:8000')){
            Db.updateLocalDbFromServer();
        }
        Db.getAll(this.buildList, this);
    },

    addProductToList: function (inSender, inEvent) {
        if (inEvent.keyCode == 13) {
            this.addProductToDb(inSender.value);
            inSender.setValue("");
        }
    },

    addProductToDb: function (productName) {
        var product = new Product({name: productName});
        var productList = new ProductList();
        Db.add({name: product.get('name')});
        productList.create({name: productName});
        this.$.productListView.productList.add(product);
        this.$.productListView.productListChanged();
    },
    buildList: function (results, context) {
        for (var i = 0; i < results.rows.length; i++) {
            row = results.rows.item(i);
            var product = new Product({name: row.name});
            context.$.productListView.productList.add(product);
        }
        context.$.productListView.productListChanged();

    }
    

});