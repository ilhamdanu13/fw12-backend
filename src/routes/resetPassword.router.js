const resetPasswordRouter = require("express").Router();
const { readAllResetPassword, readResetPassword, createResetPassword, updateResetPassword, deleteResetPassword } = require("../controllers/resetPassword.controller");

resetPasswordRouter.get("/", readAllResetPassword);

resetPasswordRouter.get("/:id", readResetPassword);

resetPasswordRouter.post("/", createResetPassword);

resetPasswordRouter.patch("/:id", updateResetPassword);

resetPasswordRouter.delete("/:id", deleteResetPassword);

module.exports = resetPasswordRouter;
