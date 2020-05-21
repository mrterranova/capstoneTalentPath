module.exports = (sequelize, DataTypes) => {
    let Product = sequelize.define("Product", {
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 20]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1 - 30]
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [4 - 10]
            }
        },
        whenCrops_due: {
            type: DataTypes.DATE,
            allowNull: false,
            default: Date.now()
        },
        help_type: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1 - 255]
            }
        },
        product_type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1 - 30]
            }
        },
        when_posted: {
            type: DataTypes.DATE,
            allowNull: true,
            default: Date.now()
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
                len: [1 - 8]
            }
        },
        additional_notes: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1 - 255]
            }
        }
    });
    Product.associate = models => {
        Product.belongsTo(models.Farmer, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Product;
}