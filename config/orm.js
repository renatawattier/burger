//selectAll()
//insertOne()
//updateOne()

var connection = require("./connection");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM " + tableName
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    insertOne: function(tableName, cols, vals, cb) {
        var queryString = "INSERT INTO " + tableName + "(" + cols + ") VALUES (" + vals + ")"
        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(tableName, colToSet, valToSet, whereToSet, whereVal, cb) {
        var queryString = "UPDATE " + tableName + " SET " + colToSet + "=" + valToSet + " WHERE " + whereToSet + "=" + whereVal;
        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;