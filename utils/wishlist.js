const Wishlist = require("../models/wishlist");

const allWishes = async () => await Wishlist.findAll({});
const addWish = async (wishlist) => await Wishlist.create(wishlist);
const deleteAllWishes = async () => await Wishlist.destroy({ truncate: true });

const deleteWish = async (id) => await Wishlist.destroy({ where: { id } });
const oneWish = async (id) => {
    let data = [];
    data = await Wishlist.findByPk(id);
    return await Wishlist.findOne({ where: { id } });
};
const editWish = async (name, id) => {
    const findWish = await Wish.findByPk(id);
    return await Wish.update({ name: name || findWish.name, console: console || findWish.console, genre: genre || findWish.genre, publisher: publisher || findWish.publisher })
};

module.exports = {
    allWishes,
    addWish,
    deleteAllWishes,
    deleteWish,
    oneWish,
    editWish
};