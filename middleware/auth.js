require("dotenv").config();
const bcrypt = require("bcrypt");
const ExtractJWT = require("passport-jwt").ExtractJwt;
const JWTStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

const register = async (name, password, next) => {
    try {
        if (!name || !password) {
            throw new Error("Please provide all user info")
        }
        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
        const passwordHash = await bcrypt.hash(password, salt);
        try {
            const user = await User.create({ name, passwordHash });
            console.log(user)
            next(null, user);
        } catch (error) {
            console.log(error)
            next(error, {});
        }
    } catch (error) {
        next(error);
    }
};

const login = async (name, password, next) => {
    try {
        const user = await User.findOne({ where: { name } });
        if (!user) {
            return next(null, { msg: "Incorrect Username" })
        }
        const match = await bcrypt.compare(password, user.passwordHash);
        return match ? next(null, user) : next(null, null, { msg: "Incorrect Password" });
    } catch (error) {
        next(error);
    }
};

const verify = (token, next) => {
    try {
        next(null, token.user);
    } catch (error) {
        next(error);
    }
};

const verifyStrategy = new JWTStrategy({
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret token")
}, verify);

const registerStrategy = new LocalStrategy({ usernameField: "name", passwordField: "password" }, register);
const loginStrategy = new LocalStrategy({ usernameField: "name", passwordField: "password" }, login);

module.exports = {
    verifyStrategy,
    registerStrategy,
    loginStrategy
};