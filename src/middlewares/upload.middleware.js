const multer = require("multer");
const errorHandler = require("../helpers/errorHandler.helper");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");

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
  limits: { fileSize: 2000000 },
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
