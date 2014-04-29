/**
 * Created by anik on 4/29/14.
 */
var add = function (productName, callback) {
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
var remove = function (callback) {
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
                    callback();
                }
            );

        }
    );
};

var getAll = function (callback) {
    database.transaction(function (transaction) {
        transaction.executeSql(
            (
                "select * from product"
                ),
            [],
            function (transaction, results) {
                callback(results);
                console.log('products fetched')
            });
    });
};
