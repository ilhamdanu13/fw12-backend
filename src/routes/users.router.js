// define method
const usersRouter = require("express").Router();

const { readAllUsers, createUser, updateUser, deleteUser } = require("../controllers/users.controller");

// access users controller
usersRouter.get("/", readAllUsers);

// post method to access users controller
usersRouter.post("/", createUser);

// update method to access users controller
usersRouter.patch("/", updateUser);

// delete method
usersRouter.delete("/", deleteUser);

// export router so that can use in index.js
module.exports = usersRouter;

// install nodemon to update servers.
// npm i -d nodemon
