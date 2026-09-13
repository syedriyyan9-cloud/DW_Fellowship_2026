const express = require("express");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const app = express();
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  return res.render("home");
});

app.post("/uploads", upload.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});

app.listen(8000, () => console.log("Server started"));
