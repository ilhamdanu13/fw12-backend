const multer = require("multer");
const errorHandler = require("../helpers/errorHandler.helper");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split(".");
    const ext = extension[extension.length - 1];
    const name = `${new Date().getDate()}_${new Date().getTime()}.${ext}`;
    cb(null, name);
  },
});

const maxSize = 1 * 1024 * 1024;
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg, .jpeg format allowed"));
    }
  },
  limits: { fileSize: maxSize },
});

const uploadMiddleware = upload.single("picture");
module.exports = (req, res, next) => {
  uploadMiddleware(req, res, (err) => {
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }
    next();
  });
};
