const { DataTypes } = require("sequelize");
const connection = require("../connection");

module.exports = connection.define("User",

    {
        // id: {
        //     primaryKey: true,
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false
        // },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // email: {
        //     type: DataTypes.STRING,
        //     allownull: false
        // },

        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

    {
        indexes: [{ unique: true, fields: ["name"] }]

    }
);

