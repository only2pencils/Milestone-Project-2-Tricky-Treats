//DEPENDENCIES//
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//CONFIGURATION//
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

//MIDDLEWARE//
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//ROUTES//
app.get("/", (req, res) => {
  res.send("Trick, Treat or Tricky Treat?");
});

//TREATS//
const treatsController = require("./controllers/treats_controller.js");
app.use("/treats", treatsController);

//RECIPES//
const recipesController = require("./controllers/recipes_controller.js");
app.use("/recipes", recipesController);

//404 PAGE//
app.get("*", (req, res) => {
  res.send("404");
});

//LISTEN//
app.listen(PORT, () => {
  console.log("nomming at port");
});
