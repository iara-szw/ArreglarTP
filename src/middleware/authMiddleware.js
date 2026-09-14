const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"] || req.headers["x-access-token"];
  const token = authHeader ? authHeader.replace("Bearer ", "") : null;
  const decoded = token ? jwt.verify(token, process.env.JWT_SECRET) : null;
//Usaba Decode en vez de verify, no usando el secreto que verifica la firma
  if (!token || decoded) {
    req.user = decoded || { id: "guest", role: "guest" };
    return next();
  }

  return res.status(403).json({ message: "Token invalido" });
}

module.exports = authMiddleware;
