// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    var Donator = sequelize.define("Donator", {
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
        email : {
            type : DataTypes.STRING,
            allowNull : false, 
            validate : {
                isEmail: true,
            }
        }
    });
    Donator.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
      // In this case, before a User is created, we will automatically hash their password
      Donator.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });


    return Donator;
};