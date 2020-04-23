const mysql = require("mysql2");


if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "1Gumbo@cash2!",
        database: "burgers_db"
    });
};

// -- Connect to the data base and handle connection error
connection.connect((err) =>{
    if(err){
        console.error("Error connecting: " + err.stack);
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
