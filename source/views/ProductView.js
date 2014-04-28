/**
 * Created by anik on 4/27/14.
 */
enyo.kind({
    name: "ProductView",

    components: [
        {name: 'name', content: 'product name goes here'}
    ],
    published: {
        product: null
    },
    create: function () {
        this.inherited(arguments);
        if (this.model) {
            this.setProduct(this.model);
        }
    },
    productChanged: function () {
        this.$.name.setContent(this.getProduct().get('name'));
    }


});