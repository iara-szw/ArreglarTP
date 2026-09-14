const jwt = require("jsonwebtoken");

function signToken(user) {
  return jwt.sign(
    { role: user.role },
    process.env.JWT_SECRETT || "super-secret",
    { expiresIn: "2h" }
  );
}
//vencia el token en 2s
//estaba mal el export, decia export y tenia que ser exports
module.exports = {
  signToken
};
