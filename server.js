
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql");
// const dbConfig = require("./config/keys");
// // const api = require("./routes/api");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// const port = process.env.PORT || 5000;  
// // const connection = mysql.createConnection(dbConfig);  

// const connection = require("./models");
// //setting up express app to handle data
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// //static directory
// app.use(express.static("public"));
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// //parts that I am adding in...
// // app.use()

// connection.connect(err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("sucess");
//   }
// });

// // app.use("/api", api);

// //
// app.listen(port, () => {
//   console.log("Server Listening on port " + port);
// });

//Dependencies
const express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

//setting up express app
const app = express();
let PORT = process.env.PORT || 5000;

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
// require("./routes/application-routes.js")(app);
// require("./routes/dealer-routes.js")(app);
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);
// require("./routes/quotes-routes.js")(app);

//syncing sequelize models and starting express app

db.sequelize.sync({force: true}).then( function() {
    app.listen(PORT, function() {
        console.log("==> 🌎 App listening on PORT "+ PORT);
    });
});