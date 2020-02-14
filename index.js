const { getName, getUser, getUsers } = require("./users");

(async () => {
  console.log(await getUsers());
  console.log(await getUser({ id: 1 }));
  console.log(await getName({ id: 2 }));
})();
