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
        }
    });

    return Farmer;
};