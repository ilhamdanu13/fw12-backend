const errorHandler = (err, res) => {
  if (err.message.includes('unique constraint "email"')) {
    return res.status(400).json({
      success: false,
      message: "Email already exists!",
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
    message: "Something went wrong!",
  });
};

module.exports = errorHandler;
