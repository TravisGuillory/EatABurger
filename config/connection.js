const mysql = require('mysql2');


if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB.URL);
}else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '*',
        database: 'burgers_db'
    });
};

// -- Connect to the data base and handle connection error
connection.connect((err) =>{
    if(err){
        console.error('Error connecting: ' + err.stack);
    }
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;
