module.exports = (sequelize, DataTypes) => {
    var Application = sequelize.define("Application" ,{
        name : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1-30]
            }
        },
        email : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1-30]
            }
        }, 
        amount : {
            type : DataTypes.DOUBLE, 
            allowNull : false, 
            validate : {
                len : [1-8]
            }
        }, 
        date_given : {
            type : DataTypes.DATE, 
            allowNull : false, 
            default : Date.now()
        }
    });

    return Application;
};