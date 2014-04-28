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
            var product = new Product({name: inSender.value});
            this.$.productListView.productList.add(product);
            this.$.productListView.productListChanged();
            inSender.setValue("");

        }
    }

});