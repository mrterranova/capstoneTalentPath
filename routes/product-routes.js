//requiring dependencies
var db = require("../models");

//get all applications
module.exports = app => {
    app.get("/api/produce", (req, res) => {
        var query = {};
        // if (req.query.dealer_id) {
        //     query.dealerId = req.query.dealer_id;
        // }
        db.Application.findAll({
            where: query,
            include: [db.Donator]
        }).then(dbProduct => {
            res.json(dbProduct);
        });
    });

    //get application by application id
    app.get("/api/produce/:id", (req,res) => {
        db.Product.findOne({

            where : {
                id : req.params.id
            }, include : [db.Donator]
        }).then (dbProduct => {
            res.json(dbProduct);
        });
    });
    
    //post applications
    app.post("/api/produce", (req,res) => {

        //created object to insert passport id into dealerId field 
        db.Product.create({

        }).then(dbProduct => {
            res.json(dbProduct);
        });

        //allows update function for member of id
        app.put("/api/produce/:id", (req, res) => {
            db.Product.update(
                req.body, {
                where: { id: req.params.id, 
                    farmerId : req.user.id}
            }).then(dbProduct => {
                res.json(dbProduct);
            });
        });

        
        //allows only member of id to delete the form
        app.delete("/api/produce/:id", (req, res) => {
            db.Product.destroy({
                where: {
                    donatorId: req.user.id,
                    id: req.params.id
                  }
            }).then(dbProduct => {
                res.json(dbProduct)
            });
        })
    });
}