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

