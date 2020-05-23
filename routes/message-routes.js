//requiring dependencies
var db = require("../models");

//get all messages
module.exports = app => {
    app.get("/api/message", (req, res) => {
        var query = {};
        db.Message.findAll({}).then(dbMessage => {
            res.json(dbMessage);
        });
    });

    //get message
    app.get("/api/message/:id", (req, res) => {
        db.Message.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbMessage => {
            res.json(dbMessage);
        });
    });

    //post message
    app.post("/api/message", (req, res) => {
        db.Message.create(
            req.body
        ).then(dbMessage => {
            res.json(dbMessage);
        });
    });

    //allows update message
    app.put("/api/message/:id", (req, res) => {
        db.Message.update(
            req.body, {
            where: {
                id: req.params.id,
                FarmerId: req.user.id
            }
        }).then(dbMessage => {
            res.json(dbMessage);
        });
    });


    //allows message deleted
    app.delete("/api/message/:id", (req, res) => {
        db.Message.destroy({
            where: {
                FarmerId: req.user.id,
                id: req.params.id
            }
        }).then(dbMessage => {
            res.json(dbMessage)
        });
    })
}