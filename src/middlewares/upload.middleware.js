const multer = require("multer");
const errorHandler = require("../helpers/errorHandler.helper");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     const extension = file.originalname.split(".");
//     const ext = extension[extension.length - 1];
//     const name = `${new Date().getDate()}_${new Date().getTime()}.${ext}`;
//     cb(null, name);
//   },
// });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Cluezzy",
    format: async (req, file) => path.extname(file.originalname).slice("1"),
    public_id: (req, file) => {
      const randomNumber = Math.round(Math.random() * 90000);
      const name = `${new Date().getDate()}_${randomNumber}`;
      return name;
    },
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, callback) => {
    const format = ["jpg", "png", "jpeg"];
    const extension = file.originalname.split(".");
    const cekFormatFile = format.includes(extension[extension.length - 1]);
    if (!cekFormatFile) {
      return callback(new Error("Format picture not valid"));
    } else {
      return callback(null, true);
    }
  },
});

// const maxSize = 1 * 1024 * 1024;
// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg, .jpeg format allowed"));
//     }
//   },
//   limits: { fileSize: maxSize },
// });

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
