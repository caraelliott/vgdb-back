const router = require("express").Router();
const Wishlist = require("../models/wishlist");
const { allWishes, addWish, deleteAllWishes, deleteWish, oneWish, editWish } = require("../utils/wishlist");

router.get("/", async (req, res) => res.status(200).json({ msg: "All Wishes", data: await allWishes() }));
router.post("/", async (req, res) => res.status(201).json({ msg: "Add a Wish", data: await addWish(req.body) }));
router.delete("/", async (req, res) => res.status(200).json({ msg: "Deleted all Wishes", data: await deleteAllWishes() }));

router.get("/:id", async (req, res) => res.status(200).json({ msg: "One Wish", data: await oneWish(req.params.id, req.body) }));
router.put("/:id", async (req, res) => res.status(201).json({ msg: "Edit Wish", data: await editWish(req.body.name, req.body.year, req.body.console, req.body.genre, req.body.publisher, req.params.id) }))



router.delete("/:id", async (req, res) => {
    deleteWish(req.params.id);
    res.status(200).json({ msg: "Deleted one Wish", data: await deleteWish(req.params.id) })
});

module.exports = router;