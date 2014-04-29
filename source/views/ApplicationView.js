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

    addProductToList: function (inSender, inEvent) {
        if (inEvent.keyCode == 13) {
            Db.getAll(this.buildList);
            var product = new Product({name: inSender.value});
//            this.addProductToDb(inSender.value);
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
    buildList: function (results) {
//        _.each(
//            results.rows,
//            function (rowIndex) {
//                var row = results.rows.item(rowIndex);
//                console.log(row.name);
//            }
//        );
    }

});