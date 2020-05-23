//Dependencies
const express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

//setting up express app
const app = express();
let PORT = process.env.PORT || 4956;

//importing databases from models
let db = require("./models");

//setting up express app to handle data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//static directory
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//      Routes
//====================
require("./routes/farmer-routes.js")(app);
require("./routes/user-routes.js")(app);
require("./routes/product-routes.js")(app);
require("./routes/receipt-routes.js")(app)

//syncing sequelize models and starting express app

db.sequelize.sync({force: true}).then( function() {
    app.listen(PORT, function() {
        console.log(PORT);
    });
});