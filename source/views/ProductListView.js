/**
 * Created by anik on 4/27/14.
 */
enyo.kind({
    name: "ProductListView",

    published: {
        productList: null
    },
    components: [
        {
            name: 'container',
            tag: 'ul'
        }
    ],
    handlers: {
        ondbsynced: "dbSynced"
    },
    dbSynced: function(){
        context = this;
        callback = function(results, context){

            for (var i = 0; i < results.rows.length; i++) {
            row = results.rows.item(i);
            var product = new Product({name: row.name});
            context.productList.add(product);
            }

        };
        Db.getAll(callback, context);
        context.productListChanged();
    },
    create: function () {
        this.inherited(arguments);
        this.setProductList(new ProductList());

    },
    productListChanged: function () {
        me = this;
        me.$.container.destroyComponents();
        _.each(me.productList.models, function (model) {
            me.$.container.createComponent({tag: 'li', kind: "ProductView", model: model}).render();
        });
    }

});
