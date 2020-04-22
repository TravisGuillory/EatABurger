var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (response) => {
            cb(response);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals,  (response) => {
            cb(response);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.selectAll("burgers", objColVals, condition, (response) => {
            cb(response);
        });
    },
    deleteOne: function(condition, cb) {
        orm.selectAll("burgers", condition, (reaponse) =>{
            cb(res);
        });
    }
}   

module.exports = burger;
