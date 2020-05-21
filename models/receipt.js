module.exports = (sequelize, DataTypes) => {
    let Receipt = sequelize.define("Receipt" ,{
        first_name : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1-30]
            }
        },
        last_name : {
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
        donation_to : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len: [1-35]
            }
        },
        date_given : {
            type : DataTypes.DATE, 
            allowNull : false, 
            default : Date.now()
        }
    });
    
    Receipt.associate = models => {
        Receipt.belongsTo(models.Donator, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Receipt;
};