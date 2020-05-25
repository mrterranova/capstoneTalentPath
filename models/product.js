module.exports = (sequelize, DataTypes) => {
    let Product = sequelize.define("Product", {
        whenCrops_due: {
            type: DataTypes.DATE,
            allowNull: false,
            default: Date.now()
        },
        product: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1 - 30]
            }
        },
        product_type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1 - 30]
            }
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                len: [1 - 8]
            }
        },
        charity : {
            type: DataTypes.BOOLEAN, 
            allowNull : false
        }
    });
    Product.associate = models => {
        Product.belongsTo(models.Farmer, {
            foreignKey: {
                as: "products",
                allowNull: false
            }
        });
    }
    return Product;
}