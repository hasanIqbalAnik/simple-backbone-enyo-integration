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
        Db.getAll(this.buildList, this);
        console.log('init called');
    },

    addProductToList: function (inSender, inEvent) {
        if (inEvent.keyCode == 13) {
            var product = new Product({name: inSender.value});
            this.addProductToDb(inSender.value);
            this.$.productListView.productList.add(product);
            this.$.productListView.productListChanged();
            inSender.setValue("");
        }
    },

    addToLocalStorage: function (productName) {
        if (localStorage.getItem(productName)) {
            console.log('product already exists');
        }
        else {
            localStorage.setItem(productName, JSON.stringify(productName));
        }
    },
    addProductToDb: function (productName) {
        Db.add(productName);
    },
    buildList: function (results, context) {
        for (var i = 0; i < results.rows.length; i++) {
            row = results.rows.item(i);
            console.log(row.name);
            var product = new Product({name: row.name});
            context.$.productListView.productList.add(product);
            context.$.productListView.productListChanged();
        }

    }

});