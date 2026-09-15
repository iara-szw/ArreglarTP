const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { listUsers } = require("../controllers/adminController");

const router = express.Router();

//no habia ningun chequeo de admin aca, cualquiera pegaba a /all y veia todos los usuarios aunque fuese user y no admin 
function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Acceso solo para administradores" });
  }
  return next();
}

router.get("/all", authMiddleware, requireAdmin, listUsers);

module.exports = router;