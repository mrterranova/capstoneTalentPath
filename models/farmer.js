// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
console.log("FARMER");
module.exports = function(sequelize, DataTypes) {
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
        amount_requested : {
            type : DataTypes.DOUBLE, 
            allowNull: false, 
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
        }
    });

      Farmer.associate = function(models) {
        Farmer.hasMany(models.Product, {
             onDelete:"Cascade" 
           });
        Farmer.belongsTo(models.User, {
            foreignKey : {
              allowNull : true
            }, onDelete: "Cascade",
            constraints: false
          });
          Farmer.hasMany(models.Message, {
            onDelete:"Cascade" 
          });
        }

    return Farmer;
}