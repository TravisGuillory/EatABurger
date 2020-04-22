var express = require("express");
var burger = require("../models/burger");

const router = express.Router();


router.get('/', (req, res) => {
    burger.selectAll((data) => {
        var handlebarsObj = {
            burgers: data
        };
        console.log(handlebarsObj);
        res.render('index', handlebarsObj);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne(
        ['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
            // -- Send back the ID of the new burger
            res.json({
                id: result.insertId
            });
        }

    );
});
router.put('api/burgers/:id', (req, res) => {
    var condition = 'id = ' + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
    });
});
router.delete('/api/burgers/:id', (req, res) => {
    var condition = "id = " + req.params.id;
    console.log('condtion ', condition);
    burger.deleteOne(condition, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;