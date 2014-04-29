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

    Db.getAll = function (callback) {
        database.transaction(
            function (transaction) {
                transaction.executeSql(
                    (
                        "SELECT " +
                            "* " +
                            "FROM " +
                            "product " +
                            "ORDER BY " +
                            "name ASC"
                        ),
                    [],
                    function (transaction, results) {
                        console.log(transaction);
                        console.log(results);
                        callback(results);
                    }
                );

            }
        );
    };

}());

