const { users } = require("../data/db");

function getProfile(req, res) {
  //estaba mezclado con req.body.id, asi que no agarra bien el id para comparar
  const user = users.find((u) => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  //no hay que devolver el hash de la password
  const { password, ...safeUser } = user;
  return res.json({ user: safeUser });
}

function updateMe(req, res) {
  //dejaba que cualquiera mande un id en el body y edite el perfil de otro, saque el req.body.id
  const user = users.find((u) => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const { name } = req.body;
  user.name = name || user.name;

  const { password, ...safeUser } = user;
  return res.status(200).json({ message: "Perfil actualizado", user: safeUser });
}

module.exports = {
  getProfile,
  updateMe
};