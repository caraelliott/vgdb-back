require("dotenv").config();

const express = require("express");
const passport = require("passport");
const app = express();

const connection = require("./connection");
const { registerStrategy, loginStrategy, verifyStrategy } = require("./middleware/auth");

const User = require("./models/user");
const Game = require("./models/game");
const Wishlist = require("./models/wishlist");

const userRouter = require("./routes/user");
const gameRouter = require("./routes/game");
const wishlistRouter = require("./routes/wishlist");


app.use(express.json());
app.use(passport.initialize());

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);

app.use("/users", userRouter);
app.use("/games", gameRouter);
app.use("/wishlists", wishlistRouter);

app.listen(process.env.HTTP_PORT, async () => {
    connection.authenticate();
    await User.sync({ alter: true });
    await Game.sync({ alter: true });
    await Wishlist.sync({ alter: true });
    console.log("App Online");
});