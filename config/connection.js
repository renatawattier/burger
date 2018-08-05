var mysql = require("mysql");

// Set up DB connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });    
};


// Make connection to DB.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});
  
// Export connection for ORM to use.
module.exports = connection;