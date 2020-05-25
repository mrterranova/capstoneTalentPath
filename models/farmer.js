// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
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
        state : {
            type : DataTypes.STRING, 
            allowNull : false, 
            validate : {
                len : [1-20]
            }
        },
        zip : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                len : [4-10]
            }
        },
        charity:{
            type: DataTypes.STRING,
            allowNull:true
        },
        industry:{
            type: DataTypes.STRING,
            allowNull:true
        }
    });

      Farmer.associate = function(models) {
          Farmer.hasMany(models.Message, {
            onDelete:"Cascade" 
          });
        Farmer.hasMany(models.Product, {
             onDelete:"Cascade" 
           });
        }

    return Farmer;
}