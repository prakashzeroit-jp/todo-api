const jwt = require("jsonwebtoken");
const authModel = require("../models/authModel");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await authModel.findById(decode.id).select("-password");
      return next();
    } catch (error) {
      res
        .status(401)
        .json({ success: false, message: "Not authorized token failed" });
    }

    if (!token) {
      res
        .status(401)
        .json({ success: false, message: "Not authorized no provide token" });
    }
  }
};

module.exports = { protect };