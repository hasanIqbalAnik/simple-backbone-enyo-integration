/**
 * Created by anik on 4/29/14.
 */
database.transaction(
    function (transaction) {
        transaction.executeSql(
            "CREATE TABLE IF NOT EXISTS product (" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name TEXT NOT NULL" +
                ");"
        );

    }
);