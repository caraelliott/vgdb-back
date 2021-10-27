
const Game = require("../models/user");

//  CRUD Operations

//  All Games
const allGames = async () => await Game.findAll({});
const addGame = async (game) => await Game.create(game);
const deleteAllGames = async () => await Game.destroy({ truncate: true });

//  One Game
const deleteGame = async (id) => await Game.destroy({ where: { id } });
const oneGame = async (id) => {
    let data = [];
    data = await Game.findByPk(id);
    return await Game.findOne({ where: { id } });
};
const editGame = async (name, id) => {
    const findGame = await Game.findByPk(id);
    return await Game.update({ name: name || findGame.name, console: console || findGame.console, genre: genre || findGame.genre, publisher: publisher || findGame.publisher });
};

module.exports = {
    allGames,
    addGame,
    deleteAllGames,
    deleteGame,
    oneGame,
    editGame
};