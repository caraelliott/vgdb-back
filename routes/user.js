const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Game = require("../models/game");
const passport = require("passport");

const session = { session: false };

module.exports = router;