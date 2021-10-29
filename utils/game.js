const Game = require("../models/game");

// CRUD Operations

//  All games
const allGames = async () => await Game.findAll({});
const addGame = async (game) => await Game.create(game);
const deleteAllGames = async () => await Game.destroy({ truncate: true });

// One Game
const deleteGame = async (id) => await Game.destroy({ where: { id } });
const oneGame = async (id) => {
    let data = [];
    data = await Game.findByPk(id);
    return await Game.findOne({ where: { id } });
};
const editGame = async (name, year, console, genre, publisher, id) => {
    const findGame = await Game.findByPk(id);
    return await Game.update({ name: name || findGame.name, year: year || findGame.year, console: console || findGame.console, genre: genre || findGame.genre, publisher: publisher || findGame.publisher }, { where: { id } });
};

module.exports = {
    allGames,
    addGame,
    deleteAllGames,
    deleteGame,
    oneGame,
    editGame
};