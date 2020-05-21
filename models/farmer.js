module.exports = (sequelize, DataTypes) => {
    var Farmer = sequelize.define("Farmer", {
        farm_name : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1-20]
            }
        },
        location : {
            type : DataTypes.STRING, 
            allowNull : false, 
            validate : {
                len : [1-30]
            }
        }
    });

    return Farmer;
};