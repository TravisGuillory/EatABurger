var connection = require('../config/connection');


var orm = {
    selectAll: function (table, cb) {
        var dbQuery = `SELECT * FROM ${table};`;
        console.log(dbQuery);
        connection.query(dbQuery, (err, response) => {
            if (err) {
                throw err;
            }
            cb(response)
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var dbQuery =
            `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)}) `;

        console.log(dbQuery);
        connection.query(dbQuery, vals, (err, response)=> {
            if (err) {
                throw err;
            }
            cb(response);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var dbQuery = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(dbQuery);
        connection.query(dbQuery, (err, response) => {
            if (err) {
                throw (err);
            }
            cb(response);
        });
    },
    deleteOne: function (table, condition, cb) {
        var dbQuery = `DELETE FROM ${table} WHERE ${condition}`;
        console.log(dbQuery);
        connection.query(dbQuery, (err, response) => {
            if (err) {
                throw err;
            }
            cb(response);
        });
    }
};
module.exports = orm;




// -- Helper function for converting string to sql syntax.
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ['name='Lana Del Grey'']
            // e.g. {sleepy: true} => ['sleepy=true']
            arr.push(key + '=' + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}