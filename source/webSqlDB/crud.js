/**
 * Created by anik on 4/29/14.
 */

(function () {
    Db = window.Db || {}

    Db.add = function (productName, callback) {
        // Insert a new girl.
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
                        productName
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
    Db.remove = function (callback) {
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
                callback(results, context);
            });

        });
    };


}());

