/**
 * Created by anik on 4/27/14.
 */
var ProductList = Backbone.Collection.extend({
	url: 'http://localhost:8000/products/',
    model: Product
});

