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
        },
        {
            name: 'addProduct', kind: "Input", onkeypress: "addProductToList", placeholder: "add product name here..."
        }
    ],

    create: function(){
      this.inherited(arguments);
      if(this.productList  == null){
          this.setProductList(new ProductList());
      }
    },
    productListChanged: function () {
        me = this;
        me.$.container.destroyComponents();
        _.each(me.productList.models, function (model) {
            me.$.container.createComponent({tag: 'li', kind: "ProductView", model: model}).render();
        });
    },
    addProductToList: function (inSender, inEvent) {
        if (inEvent.keyCode == 13) {
            var product = new Product({name: inSender.value});
            this.productList.add(product);
            this.productListChanged();
        }
        else return true;
    }
});

