//importing files
// var db = require("../models");

// module.exports = router => {

//     //get all contacts
//     router.get("/api/produce", (req,res) => {
//         db.Farmer.findAll({
//             include : [db.Product, db.Farmer]
//         }).then (dbProduce => {
//             res.json(dbProduce);
//         });
//     });

//     //get contacts by id - primary function in passport attached to login info
//     router.get("/api/produce/:id", (req,res) => {
//         db.Farmer.findOne({
//             where : {
//                 id : req.user.id
//             }, include : [db.Product, db.Farmer]
//         }).then (dbProduce => {
//             res.json(dbProduce);
//         });
//     });

//     //ability to make contact information
//     router.post("/api/produce", (req, res) => {
//         db.Farmer.create(req.body).then(dbProduce => {
//             res.json(dbProduce);
//         });
//     });

//     //ability to change contact information
//     router.put("/api/produce/:id", (req, res)=> {
//         db.Farmer.update(req.body, {
//             where: {
//                 id: req.user.id
//             }
//         }).then(dbProduce => {
//             res.json(dbProduce);
//         });
//     });

//     //ability to delete contact information
//     router.delete("/api/contact/:id", (req,res) => {
//         db.dealer.destroy({
//             where: {
//                 id: req.user.id
//             }
//         }).then(dbdealer => {
//             res.json(dbdealer)
//         });
//     });

// };