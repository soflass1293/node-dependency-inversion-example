const db = require("./database");

const getUsersFactory = ({ db }) => async () => {
  return await db.get();
};

const getUsers = getUsersFactory({ db });

const getUserFactory = ({ users }) => async ({ id }) => {
  const p = await users;
  return p.find(user => user.id === id);
};

const getUser = getUserFactory({ users: getUsers() });

const getNameFactory = ({ getUser }) => async ({ id }) => {
  const u = await getUser({ id });
  return u.name;
};

const getName = getNameFactory({ getUser });

module.exports = { getUsers, getUser, getName };
