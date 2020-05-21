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

    

    return Donator;
};