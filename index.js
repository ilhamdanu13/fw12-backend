const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const postgre = require("./src/helpers/db.helper");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(require("express-status-monitor")());

app.use("/assets/upload", express.static("uploads/"));

app.use("/", require("./src/routes"));

postgre.connect((err) => {
  if (err) {
    console.log("database is not connected");
  } else {
    console.log("database is connected");
  }
});

app.get("/", (req, res) => {
  postgre.query("SELECT * FROM users", (error, result) => {
    if (error) {
      return res.status(500).json({
        success: true,
        messages: "Access database failed",
      });
    } else {
      return res.status(200).json({
        success: true,
        messages: "Access database ",
        data: result.rows,
      });
    }
  });
});

app.listen(8888, () => {
  console.log("App listening on port 8888");
});
