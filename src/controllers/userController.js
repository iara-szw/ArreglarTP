const { users } = require("../data/db");

function getProfile(req, res) {
  const user = users.find((u) => u.id === req.body.id || req.user.id);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.json({ user });
}

function updateMe(req, res) {
  //estaba mal la obtencion del id, ya que en el cuerpo el id es "id" no "userID"
  const userId = req.body.id || req.user.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const { name } = req.body;
  user.name = name || user.name;

  return res.status(200).json({ message: "Perfil actualizado", user });
}

module.exports = {
  getProfile,
  updateMe
};
