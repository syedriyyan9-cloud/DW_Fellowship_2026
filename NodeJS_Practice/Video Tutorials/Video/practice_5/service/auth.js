const userState = new Map();

function setUser(id, user) {
  userState.set(id, user);
}

function getUser(id) {
  return userState.get(id);
}

module.exports = {
  setUser,
  getUser,
};
