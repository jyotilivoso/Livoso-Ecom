// authMiddleware.js
const UserModel = require('../models/UserModel');

const authMiddleware = async (req, res, next) => {
  try {
    const email = req.body.email; // Or from token if using JWT
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; 
    next();
  } catch (err) {
    console.error("Auth error", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = authMiddleware;
