var db = require("../models");

module.exports = router => {

    //get all farmers
    router.get("/api/farm", (req,res) => {
        console.log("You are in farmer get")
        db.Farmer.findAll({
            include : [db.Product]
        }).then (dbFarmer => {
            res.json(dbFarmer);
        });
    });

    
    //get farmer
    router.get("/api/farm/:id", (req,res) => {
        db.Farmer.findOne({
            where : {
                id : req.params.id
            }, include : [db.Product]
        }).then (dbFarmer => {
            res.json(dbFarmer);
        });
    });

    //post farmer
    router.post("/api/farm", (req, res) => {
        console.log("you are posting farmer")
        console.log(req.body)
        db.Farmer.create(req.body).then(dbFarmer => {
            res.json(dbFarmer);
        });
    });
    //update farmer
    router.put("/api/farm/:id", (req, res)=> {
        db.Farmer.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(dbFarmer => {
            res.json(dbFarmer);
        });
    });

    //delete farmer
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