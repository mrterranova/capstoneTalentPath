module.exports = (sequelize, DataTypes) => {
    let Message = sequelize.define("Message", {
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
        phone : {
            type: DataTypes.INTEGER, 
            allowNull: true, 
            validate : {
                len : [9]
            }
        }, 
        email : {
            type : DataTypes.STRING, 
            allowNull: true, 
            validate : {
                isEmail: true
            }
        },
        zip : {
            type : DataTypes.INTEGER, 
            allowNull : false,
            validate : {
                len : [5-10]
            }
        },
        message : {
            type : DataTypes.TEXT, 
            allowNull : false, 
            validate : {
               len:  [1-255]
            }
        }
    });
    Message.associate = models => {
        Message.belongsTo(models.Farmer, {
            foreignKey: {
                as: "products",
                allowNull: false
            }
        });
    }
    return Message;
}