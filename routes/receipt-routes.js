//requiring dependencies
var db = require("../models");

//get all applications
module.exports = app => {
    app.get("/api/receipts", (req, res) => {
        var query = {};
        // if (req.query.dealer_id) {
        //     query.dealerId = req.query.dealer_id;
        // }
        db.Receipt.findAll({
            where: query,
            include: [db.Donator]
        }).then(dbReceipt => {
            res.json(dbReceipt);
        });
    });

    //get application by application id
    app.get("/api/receipt/:id", (req,res) => {
        db.Receipt.findOne({

            where : {
                id : req.params.id
            }, include : [db.Donator]
        }).then (dbReceipt => {
            res.json(dbReceipt);
        });
    });
    
    //post applications
    app.post("/api/receipts", (req,res) => {

        //created object to insert passport id into dealerId field 
        db.Receipt.create({
            
        }).then(dbReceipt => {
            res.json(dbReceipt);
        });

        //allows update function for member of id
        app.put("/api/receipts/:id", (req, res) => {
            db.Receipt.update(
                req.body, {
                where: { 
                    id: req.params.id, 
                    donatorId : req.user.id
                }
            }).then(dbReceipt => {
                res.json(dbReceipt);
            });
        });

        
        //allows only member of id to delete the form
        app.delete("/api/receipts/:id", (req, res) => {
            db.Receipt.destroy({
                where: {
                    donatorId: req.donator.id,
                    id: req.params.id
                  }
            }).then(dbReceipt => {
                res.json(dbReceipt)
            });
        })
    });
}