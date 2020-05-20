module.exports = (sequelize, DataTypes) => {
    var Application = sequelize.define("Application" ,{
        years_inBusiness : {
            type : DataTypes.INTEGER, 
            allowNull: false, 
            validate : {
                len : [1]
            }
        },
        businessOpen_years : {
            type : DataTypes.INTEGER, 
            allowNull: false, 
            validate : {
                len : [1]
            }
        }, 
        additional_addresses: {
            type : DataTypes.STRING, 
            allowNull: true, 
            validate : {
                len : [1]
            }
        }, 
        previous_insuranceName : {
            type : DataTypes.STRING, 
            allowNull: true, 
            validate : {
                len : [1]
            }
        }, 
        previous_insuranceYears : {
            type : DataTypes.STRING, 
            allowNull: true, 
            validate : {
                len : [1]
            }
        }, 
        previous_insuranceClaims : {
            type : DataTypes.STRING, 
            allowNull: true, 
            validate : {
                len : [1]
            }
        },
        num_employees : {
            type : DataTypes.INTEGER, 
            allowNull: false, 
            validate : {
                len : [1]
            }
        }, 
        drivers_license : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1]
            }
        }, 
        dob_employees : {
            type : DataTypes.STRING, 
            allowNull: false, 
        }, 
        furnished : {
            type : DataTypes.BOOLEAN, 
            allowNull: false, 
        }, 
        employee_title : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1]
            }
        }, 
        recent_accidents : {
            type : DataTypes.BOOLEAN, 
            allowNull: false, 
        }, 
        business_nature : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1]
            }
        }, 
        insurance_type : {
            type : DataTypes.STRING, 
            allowNull: false,
            defaultValue: "BASIC",
            validate : {
                len : [1]
            }
        }, 
        miles_driven : {
            type : DataTypes.STRING, 
            allowNull: false, 
            validate : {
                len : [1]
            }
        }, 
        num_lotCars : {
            type : DataTypes.INTEGER, 
            allowNull: true, 
            validate : {
                len : [1]
            }
        }, 
        lot_worth : {
            type : DataTypes.INTEGER, 
            allowNull: true, 
            validate : {
                len : [1]
            }
        }, 
        num_plates : {
            type : DataTypes.INTEGER, 
            allowNull: false, 
            validate : {
                len : [1]
            }
        }, 
        lot_protection : {
            type : DataTypes.STRING, 
            allowNull: true, 
            validate : {
                len : [1]
            }
        },
        watching : {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        completed : {
            type : DataTypes.BOOLEAN, 
            allowNull : true
        }
    });

//     Application.associate = models => {
//         Application.belongsTo(models.dealer, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     Application.hasMany(models.Quotes, {
//         foreignKey: {
//             allowNull: false
//         }
//     }); 

// }
    return Application;
};