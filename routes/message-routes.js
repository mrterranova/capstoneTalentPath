//requiring dependencies
var db = require("../models");

//get all produce
module.exports = app => {
    app.get("/api/message", (req, res) => {
        var query = {};
        db.Message.findAll({}).then(dbProduct => {
            res.json(dbProduct);
        });
    });

    //get produce
    app.get("/api/message/:id", (req, res) => {
        db.Message.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbProduct => {
            res.json(dbProduct);
        });
    });

    //post produce
    app.post("/api/message", (req, res) => {
        db.Message.create(req.body).then(dbProduct => {
            res.json(dbProduct);
        });
    });

    //allows update produce
    app.put("/api/message/:id", (req, res) => {
        db.Message.update(
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
    app.delete("/api/message/:id", (req, res) => {
        db.Message.destroy({
            where: {
                FarmerId: req.user.id,
                id: req.params.id
            }
        }).then(dbProduct => {
            res.json(dbProduct)
        });
    })
}