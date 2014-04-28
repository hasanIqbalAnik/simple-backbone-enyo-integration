/**
 * Created by anik on 4/24/14.
 */
//
var Product = Backbone.Model.extend({
    defaults: {
        name: "Not specified yet"
    },
    initialize: function(){
        console.log("Product Initialized");
    }
});