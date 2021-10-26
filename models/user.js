const { DataTypes } = require("sequelize");
const connection = require("../connection");

module.exports = connection.define("Game",
{
    id: {
        type: DataType.INTEGER,
        allowNull: false
    },

    name: {
        type: DataType.STRING,
        allowNull: false
    },

    year: {
        type: DataType.INTEGER,
        allowNull: false
    },

   console: {
    type: DataType.STRING,
    allowNull: false
    },

    genre: {
        type: DataType.STRING,
        allowNull: false
    },

    publisher: {
        type: DataType.STRING,
        allowNull: false
    },
},

{
    indexes: [{unique: true, fields: ["id"]}]

});
