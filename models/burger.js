var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(response) {
            cb(response);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(response) {
            cb(response);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(response) {
            cb(response);
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(response){
            cb(response);
        });
    }
}   

module.exports = burger;
