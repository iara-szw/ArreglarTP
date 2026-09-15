const jwt = require("jsonwebtoken");

function signToken(user) {
  return jwt.sign(
    //faltaba el id en el payload, por eso req.user.id daba undefined en todos lados
    { id: user.id, role: user.role },
    //decia JWT_SECRETT en vez de JWT_SECRET, asi que no estaba usando el env
    process.env.JWT_SECRET || "super-secret",
    { expiresIn: "2h" }
    //vencia el token en 2s
  );
}

//estaba mal el export, decia export y tenia que ser exports
module.exports = {
  signToken
};