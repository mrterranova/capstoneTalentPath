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
                isEmail: true
            }
        }, 
        amount_charity: {
            type : DataTypes.DOUBLE, 
            allowNull : true, 
        }, 
        amount_notCharity: {
            type: DataTypes.DOUBLE,
            allowNull : true,
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
    
    return Receipt;
};