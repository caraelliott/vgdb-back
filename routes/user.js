const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
// const Game = require("../models/game");
const passport = require("passport");

const session = { session: false };

const profile = (req, res, next) => {
    res.status(200).json({ msg: "Profile", user: req.user, token: req.query.secret_token });
};

const register = (req, res, next) => {
    req.user.name ? res.status(201).json({ msg: "Registered", user: [req.user] }) : res.status(401).json({ msg: "User already exists" });
};

const login = async (req, res, next) => {
    passport.authenticate("login", async (err, user, info) => {
        try {
            if (err) {
                res.status(500).json({ msg: "Internal Server Error" });
            } else if (!user) {
                res.status(401).json(info);
            } else {
                const loginFn = (error) => {
                    if (error) {
                        return next(error);
                    } else {
                        const userData = { id: user.id, name: user.name };
                        const data = { user, token: jwt.sign({ user: userData }, process.env.SECRET_KEY) };
                        res.status(200).json(data);
                    }
                };
                req.login(user, session, loginFn)
            }
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
};

router.get("/", passport.authenticate("jwt", session), profile);
router.post("/register", passport.authenticate("register", session), register);
router.post("/login", login);

module.exports = router;