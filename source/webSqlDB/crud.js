/**
 * Created by anik on 4/29/14.
 */

(function () {
    Db = window.Db || {}

    Db.add = function (product, callback) {
        
        database.transaction(
            function (transaction) {
                transaction.executeSql(
                    (
                        "INSERT INTO product (" +
                            "name " +
                            " ) VALUES ( " +
                            "? " +
                            ");"
                        ),
                    [
                        product.name
                    ],
                    function (transaction, results) {
                        console.log('product inserted');
                        if (callback) {
                            callback(results);
                        }
                    }
                );
            }
        );
    };
    Db.removeAll = function (callback) {
        database.transaction(
            function (transaction) {
                transaction.executeSql(
                    (
                        "DELETE FROM " +
                            "product "
                        ),
                    [],
                    function (transaction, results) {
                        console.log('products removed');
//                    callback();
                    }
                );

            }
        );
    };

    Db.getAll = function (callback, context) {
        database.transaction(function (tx) {
            tx.executeSql('SELECT * FROM product', [], function (tx, results) {
                if(callback){
                    callback(results, context);    
                }
                
            });

        });
    };

    Db.updateLocalDbFromServer =  function(){
        var productList = new ProductList();
        resp = productList.fetch({async:false});
        list = JSON.parse(resp.responseText);
        Db.removeAll(); 
        _.each(list.results, function(model){
            Db.add(model);    
        });

    };

    Db.syncServerWithLocalDb = function(){
        
        callback = function(results){
            for (var i = 0; i < results.rows.length; i++) {
            row = results.rows.item(i);
            var product = new Product({name: row.name});
            product.save(); 
            }
        };
        Db.getAll(callback);
    };


}());

