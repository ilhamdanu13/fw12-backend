// endpoint users
const routes = require("express").Router();

routes.use("/users", require("./users.router"));

// export router so that can use in index.js
module.exports = routes;
