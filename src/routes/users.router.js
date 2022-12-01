// define method
const usersRouter = require("express").Router();

const upploadMiddleware = require("../middlewares/upload.middleware");
// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const { readAllUsers, createUser, updateUser, deleteUser, readUser } = require("../controllers/users.controller");

usersRouter.get("/", readAllUsers); // query String

usersRouter.get("/:id", readUser);

usersRouter.post("/", createUser); // query String, Body

usersRouter.patch("/:id", upploadMiddleware, updateUser); // query String, Body

usersRouter.delete("/:id", deleteUser); // query String

module.exports = usersRouter;

// install nodemon to update servers.
// npm i -d nodemon
