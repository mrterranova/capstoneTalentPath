//requiring dependencies
var db = require("../models");

//get all applications
module.exports = app => {
    app.get("/api/receipt", (req, res) => {
        var query = {};
        db.Receipt.findAll({
            where: query
        }).then(dbReceipt => {
            res.json(dbReceipt);
        });
    });

    //get application by application id
    app.get("/api/receipt/:id", (req,res) => {
        db.Receipt.findOne({

            where : {
                id : req.params.id
            }
        }).then (dbReceipt => {
            res.json(dbReceipt);
        });
    });
    
    //post applications
    app.post("/api/receipt", (req,res) => {
        db.Receipt.create(req.body).then(dbReceipt => {
            res.json(dbReceipt);
        });

        //allows update function for member of id
        app.put("/api/receipt/:id", (req, res) => {
            db.Receipt.update(
                req.body, {
                where: { 
                    id: req.params.id
                }
            }).then(dbReceipt => {
                res.json(dbReceipt);
            });
        });

        
        //allows only member of id to delete the form
        app.delete("/api/receipt/:id", (req, res) => {
            db.Receipt.destroy({
                where: {
                    id: req.params.id
                  }
            }).then(dbReceipt => {
                res.json(dbReceipt)
            });
        })
    });
}