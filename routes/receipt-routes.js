//requiring dependencies
var db = require("../models");

//get all receipts
module.exports = app => {
    app.post('/email', (req, res)=>{
        // const { email, text } = req.body; 
        // sendMail(email, text, function(err, data){
        //     if(err) res.status(500).json({ message: 'Internal Error'})
        //     else res.json({ message: "Email Sent!!"})
        // })
        res.json({message: "Message recieved"})
      })

    app.get("/api/receipt", (req, res) => {
        var query = {};
        db.Receipt.findAll({
            where: query
        }).then(dbReceipt => {
            res.json(dbReceipt);
        });
    });

    //get receipt
    app.get("/api/receipt/:id", (req, res) => {
        db.Receipt.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbReceipt => {
            res.json(dbReceipt);
        });
    });

    //post receipt
    app.post("/api/receipt", (req, res) => {
        db.Receipt.create(req.body).then(dbReceipt => {
            res.json(dbReceipt);
        });
    });

    //allows update receipt
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


    //allows delete receipt
    app.delete("/api/receipt/:id", (req, res) => {
        db.Receipt.destroy({
            where: {
                id: req.params.id
            }
        }).then(dbReceipt => {
            res.json(dbReceipt)
        });
    });
}