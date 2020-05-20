module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define("Product" ,{
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
        },
        image : {
            type : DataTypes.BLOB, 
            allowNull: true, 
            validate : {
                len : [1-30]
            }
        },
        product_type : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1-30]
            }
        },
         when_posted: {
            type : DataTypes.DATE, 
            allowNull: false, 
            default: Date.now()
        }, 
        amount : {
            type : DataTypes.DOUBLE, 
            allowNull : false, 
            validate : {
                len : [1-8]
            }
        }, 
        additional_notes : {
            type : DataTypes.TEXT, 
            allowNull : true, 
            validate : {
                len : [1-255]
            }
        }
    });

    return Product;
};