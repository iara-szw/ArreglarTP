const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"] || req.headers["x-access-token"];
  const token = authHeader ? authHeader.replace("Bearer ", "") : null;

  //la condicion vieja dejaba pasar como "guest" cuando no habia token, tenia que rechazar
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    //usaba decode en vez de verify, no usando el secreto que verifica la firma
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    //jwt.verify tira error si el token esta vencido o es invalido, faltaba el catch
    return res.status(403).json({ message: "Token invalido" });
  }
}

module.exports = authMiddleware;