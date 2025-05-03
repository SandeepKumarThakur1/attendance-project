const { employeeModel } = require("../models/employee-model");
const { tokenChecker } = require("../utils/tokenGenerator");

module.exports.isAuthenticated = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const isValidToken = tokenChecker(token);
  
    if (!isValidToken) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized",
      });
    }

    const user = await employeeModel.findOne({ _id:isValidToken.id });
    if (!user) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized",
      });
    }

    req.user = user;
    next();

  } catch (err) {
    next(err);
  }
};

module.exports.isAdmin = (req, res, next) => {
  try {
    const { role } = req.user;
    if (!role) {
      return res.status(400).json({
        status: 400,
        message: "Unauthorized",
      });
    }

    if (role !== "admin") {
      return res.status(403).json({
        status: 403,
        message: "Unauthorized",
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};
