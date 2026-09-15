const { users } = require("../data/db");

function listUsers(req, res) {
  //estaba devolviendo el hash de la password en la lista, hay que sacarlo
  const safeUsers = users.map(({ password, ...rest }) => rest);

  return res.status(200).json({
    total: safeUsers.length,
    users: safeUsers
  });
}

module.exports = {
  listUsers
};