const profileRouter = require("express").Router();
const { uploadProfile, updateProfile, readProfile } = require("../controllers/profile.controller");
const authMiddleWare = require("../middlewares/auth.middleware");
const uploadMiddleware = require("../middlewares/upload.middleware");

profileRouter.get("/:id", authMiddleWare, readProfile);
profileRouter.patch("/:id/:update", authMiddleWare, uploadMiddleware, updateProfile);

module.exports = profileRouter;
