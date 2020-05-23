//requiring dependencies
var db = require("../models");

//get all applications
module.exports = app => {
    app.get("/api/message", (req, res) => {
        var query = {};
        db.Message.findAll({}).then(dbMessage => {
            res.json(dbMessage);
        });
    });

    //get application by application id
    app.get("/api/message/:id", (req,res) => {
        db.Message.findOne({
            where : {
                id : req.params.id
            }
        }).then (dbMessage => {
            res.json(dbMessage);
        });
    });
    
    //post applications
    app.post("/api/message", (req,res) => {
        //created object to insert passport id into dealerId field 
        db.Message.create(
            req.body
        ).then(dbMessage => {
            res.json(dbMessage);
        });

        //allows update function for member of id
        app.put("/api/message/:id", (req, res) => {
            db.Message.update(
                req.body, {
                where: { id: req.params.id, 
                    FarmerId : req.user.id}
            }).then(dbMessage => {
                res.json(dbMessage);
            });
        });

        
        //allows only member of id to delete the form
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
    });
}