//requiring dependencies
var db = require("../models");

//get all applications
module.exports = app => {
    app.get("/api/produce", (req, res) => {
        var query = {};
        // if (req.query.dealer_id) {
        //     query.dealerId = req.query.dealer_id;
        // }
        db.Product.findAll({}).then(dbProduct => {
            res.json(dbProduct);
        });
    });

    //get application by application id
    app.get("/api/produce/:id", (req,res) => {
        db.Product.findOne({
            where : {
                id : req.params.id
            }
        }).then (dbProduct => {
            res.json(dbProduct);
        });
    });
    
    //post applications
    app.post("/api/produce", (req,res) => {
        //created object to insert passport id into dealerId field 
        db.Product.create(req.body).then(dbProduct => {
            res.json(dbProduct);
        });

        //allows update function for member of id
        app.put("/api/produce/:id", (req, res) => {
            db.Product.update(
                req.body, {
                where: { id: req.params.id, 
                    FarmerId : req.user.id}
            }).then(dbProduct => {
                res.json(dbProduct);
            });
        });

        
        //allows only member of id to delete the form
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
    });
}