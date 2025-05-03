const express = require("express");
const {
  createLeave,
  allLeaves,
  leaveApprove,
  leaveReject,
} = require("../controllers/leave-controllers");
const { isAdmin } = require("../middlewares/isAuthenticated");
const Router = express.Router();

Router.post("/", createLeave);
Router.get("/:id", allLeaves);
Router.patch("/:id/approve", isAdmin, leaveApprove);
Router.patch("/:id/reject", isAdmin, leaveReject);

module.exports = Router;
