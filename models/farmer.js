// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
console.log("FARMER");
module.exports = (sequelize, DataTypes) => {
    var Farmer = sequelize.define("Farmer", {
        first_name: {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [1-15]
            }
        },
        last_name : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [1-15]
            }
        },
        business_entity : {
            type : DataTypes.STRING,
            allowNull: true,
            validate : {
                len : [1-20]
            }
        },
        farm_type :{
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [1-20]
            }
        },
        address : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [1-20]
            }
        },
        city : {
            type : DataTypes.STRING, 
            allowNull : false, 
            validate : {
                len : [1-30]
            }
        },
        zip : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                len : [4-10]
            }
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                isEmail: true,

            }
        }, 
        hashed_password : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                
            }
        }
    });

    Farmer.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
      // In this case, before a User is created, we will automatically hash their password
      Farmer.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });

    return Farmer;
};