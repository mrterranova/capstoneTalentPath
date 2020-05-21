//importing files
var db = require("../models");

module.exports = router => {

    //get all donator information
    router.get("/api/patrons", (req,res) => {
        db.Donator.findAll({
            include : [db.Receipt]
        }).then (dbPatron => {
            res.json(dbPatron);
        });
    });

    //get donator information by id
    router.get("/api/patron-dash/:id", (req,res) => {
        db.Donator.findOne({
            where : {
                id : req.user.id
            }, include : [db.Receipt]
        }).then (dbPatron => {
            res.json(dbPatron);
        });
    });

    //ability to create new donator
    router.post("/api/patrons", (req, res) => {
        db.Donator.create(req.body).then(dbPatron => {
            res.json(dbPatron);
        });
    });

    //ability to change donator information
    router.put("/api/patron-dash/:id", (req, res)=> {
        db.Donator.update(req.body, {
            where: {
                id: req.user.id
            }
        }).then(dbPatron => {
            res.json(dbPatron);
        });
    });

    //ability to delete donator
    router.delete("/api/patron-dash/:id", (req,res) => {
        db.Donator.destroy({
            where: {
                id: req.user.id
            }
        }).then(dbPatron => {
            res.json(dbPatron)
        });
    });

};