//requiring dependencies
var db = require("../models");

//get all produce
module.exports = app => {
    app.get("/api/produce", (req, res) => {
        var query = {};
        db.Product.findAll({}).then(dbProduct => {
            res.json(dbProduct);
        });
    });

    //get produce
    app.get("/api/produce/:id", (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbProduct => {
            res.json(dbProduct);
        });
    });

    //post produce
    app.post("/api/produce", (req, res) => {
        db.Product.create(req.body).then(dbProduct => {
            res.json(dbProduct);
        });
    });

    //allows update produce
    app.put("/api/produce/:id", (req, res) => {
        db.Product.update(
            req.body, {
            where: {
                id: req.params.id,
                FarmerId: req.user.id
            }
        }).then(dbProduct => {
            res.json(dbProduct);
        });
    });


    //allows delete produce
    app.delete("/api/produce/:id", (req, res) => {
        db.Product.destroy({
            where: {
                FarmerId: req.user.id,
                id: req.params.id
            }
        }).then(dbProduct => {
            res.json(dbProduct)
        });
    })
}