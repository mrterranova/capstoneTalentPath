var db = require("../models");

module.exports = router => {

    //ability to get all produce information
    router.get("/api/farm", (req,res) => {
        db.Farmer.findAll({
            include : [db.Product]
        }).then (dbFarmer => {
            res.json(dbFarmer);
        });
    });

    
    //ability to get produce information by id
    router.get("/api/farm/:id", (req,res) => {
        db.Farmer.findOne({
            where : {
                id : req.user.id
            }, include : [db.Product]
        }).then (dbFarmer => {
            res.json(dbFarmer);
        });
    });

    //ability to post new produce
    router.post("/api/farm", (req, res) => {
        console.log(req.body)
        db.Farmer.create(req.body).then(dbFarmer => {
            res.json(dbFarmer);
        });
    });
    //ability to change produce information
    router.put("/api/farm/:id", (req, res)=> {
        db.Farmer.update(req.body, {
            where: {
                id: req.user.id
            }
        }).then(dbFarmer => {
            res.json(dbFarmer);
        });
    });

    //ability to delete produce information
    router.delete("/api/farm/:id", (req,res) => {
        db.Farmer.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbFarmer => {
            res.json(dbFarmer)
        });
    });
};