var db = require("../models");

module.exports = router => {

    //ability to get all produce information
    router.get("/api/produce", (req,res) => {
        db.Farmer.findAll({
            include : [db.Product]
        }).then (dbFarmer => {
            res.json(dbFarmer);
        });
    });

    //ability to get produce information by id
    router.get("/api/produce/:id", (req,res) => {
        db.Farmer.findOne({
            where : {
                id : req.user.id
            }, include : [db.Product]
        }).then (dbFarmer => {
            res.json(dbFarmer);
        });
    });

    //ability to post new produce
    router.post("/api/produce", (req, res) => {
        db.Farmer.create(req.body).then(dbFarmer => {
            res.json(dbFarmer);
        });
    });

    //ability to change produce information
    router.put("/api/produce/:id", (req, res)=> {
        db.Farmer.update(req.body, {
            where: {
                id: req.user.id
            }
        }).then(dbFarmer => {
            res.json(dbFarmer);
        });
    });

    //ability to delete produce information
    router.delete("/api/contact/:id", (req,res) => {
        db.dealer.destroy({
            where: {
                id: req.user.id
            }
        }).then(dbdealer => {
            res.json(dbdealer)
        });
    });
};