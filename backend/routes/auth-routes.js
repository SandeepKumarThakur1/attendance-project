const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/auth-controller");
const Router = express.Router();

Router.post("/login", loginController);

if (process.env.NODE_ENV === "development") {
  Router.post("/register", registerController);
}

module.exports = Router;
