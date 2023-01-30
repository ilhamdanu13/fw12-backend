const errorHandler = (err, res) => {
  console.log(err);
  if (err.message.includes('unique constraint "email"')) {
    return res.status(400).json({
      success: false,
      message: "Email already exists!",
    });
  }
  if (err.message.includes('unique constraint "phoneNumber"')) {
    return res.status(400).json({
      success: false,
      message: "Phone number already used!",
    });
  }
  if (err.message.includes("violates foreign key constraint")) {
    if (err.message.includes("fk_movieId")) {
      return res.status(400).json({
        success: false,
        message: "movieId not found",
      });
    }
    if (err.message.includes("fk_genreId")) {
      return res.status(400).json({
        success: false,
        message: "genreId not found",
      });
    }
  }
  return res.status(500).json({
    success: false,
    message: "Something wrong in backend!",
  });
};

module.exports = errorHandler;
