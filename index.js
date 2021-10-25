require("dotenv").config();

const express = require("express");
const passport = require("passport");
const app = express();

const connection = require("./connection");
const User = require("./models/user");
const userRouter = require("./routes/user");
