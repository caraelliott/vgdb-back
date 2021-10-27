const router = require("express").Router();
const Game = require("../models/game");
const { allGames, addGame, deleteAllGames, deleteGame, oneGame, editGame } = require("../utils/game");

router.get("/", async (req, res) => res.status(200).json({ msg: "All Games", data: await allGames() }));
router.post("/", async (req, res) => res.status(201).json({ msg: "Add a Game", data: await addGame(req.body) }));
router.delete("/", async (req, res) => res.status(200).json({ msg: "Delete all Games", data: await deleteAllGames() }));

router.get("/:id", async (req, res) => res.status(200).json({ msg: "One Game", data: await oneGame(req.params.id, req.body) }));

// router.put("/:id", async (req, res, id) => {
//     console.log("OI!")
//     const game = allGames(req.params.id);
//     if (!game) return res.status(404).json({});
//     game.name = req.body.name;
//     res.json(game)

// });

router.delete("/:id", async (req, res) => {
    deleteGame(req.params.id);
    res.status(200).json({ msg: "Delete One Game", data: await deleteGame(req.params.id) });
});

module.exports = router;