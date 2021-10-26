const { DataTypes } = require("sequelize");
const connection = require("../connection");

module.exports = connection.define("User",
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    },
},

{
    indexes: [{unique: true, fields: ["id"]}]

});

