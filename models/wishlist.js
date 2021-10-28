const { DataTypes } = require("sequelize");
const connection = require("../connection");

module.exports = connection.define("Wishlist",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        console: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publisher: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        indexes: [{ unique: true, fields: ["name"] }]
    });