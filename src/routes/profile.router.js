const profileRouter = require("express").Router();
const { uploadProfile, updateProfile } = require("../controllers/profile.controller");
const authMiddleWare = require("../middlewares/auth.middleware");
const uploadMiddleware = require("../middlewares/upload.middleware");

profileRouter.patch("/:id/:update", authMiddleWare, uploadMiddleware, updateProfile);

module.exports = profileRouter;
