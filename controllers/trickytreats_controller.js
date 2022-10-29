const express = require("express");
const trickytreats = express.Router();
const TrickyTreat = require("../models/trickytreat.js");
const Recipe = require("../models/recipe.js");
const trickytreatSeedData = require("../models/seed.js");

//INDEX//
trickytreats.get("/", async (req, res) => {
  const foundRecipes = await Recipe.find().lean();
  const foundTreats = await TrickyTreat.find().lean();
  console.log(foundTreats);
  res.render("index", {
    treats: foundTreats,
    recipes: foundRecipes,
    title: "Severed Index Finger Page",
  });
});

//NEW//
trickytreats.get("/new", (req, res) => {
  Recipe.find().then((foundRecipes) => {
    res.render("new", {
      recipes: foundRecipes,
    });
  });
});

//SHOW//
trickytreats.get("/:id", (req, res) => {
  TrickyTreat.findById(req.params.id)
    .populate("recipe")
    .then((foundTrickyTreat) => {
      res.render("show", {
        trickytreat: foundTrickyTreat,
      });
    })
    .catch((err) => {
      res.send("404");
    });
});

//EDIT//
trickytreats.get("/:id/edit", (req, res) => {
  Recipe.find().then((foundRecipes) => {
    Treat.findById(req.params.id).then((foundTreat) => {
      res.render("edit", {
        treat: foundTreat,
        recipes: foundRecipes,
      });
    });
  });
});

//UPDATE//
trickytreats.put("/:id", (req, res) => {
  if (req.body.hasGhost === "on") {
    req.body.hasGhost = true;
  } else {
    req.body.hasGhost = false;
  }
  TrickyTreat.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedTrickyTreat) => {
      console.log(updatedTrickyTreat);
      res.redirect(`/trickytreats/${req.params.id}`);
    }
  );
});

//CREATE//
trickytreats.post("/", (req, res) => {
  // if (!req.body.image) {
  //   req.body.image = undefined;
  // }
  console.log(req.body);
  if (req.body.hasGhost === "on") {
    req.body.hasGhost = "true";
  } else {
    req.body.hasGhost = "false";
  }
  TrickyTreat.create(req.body);
  res.redirect("/treats");
});

//DELETE//
trickytreats.delete("/:id", (req, res) => {
  Treat.findByIdAndDelete(req.params.id).then((deletedTreat) => {
    res.status(303).redirect("/treats");
  });
});

//SEED ROUTE//
trickytreats.get("/data/seed", (req, res) => {
  TrickyTreat.insertMany(trickytreatSeedData).then((createTrickyTreats) => {
    res.redirect("/trickytreats");
  });
});

module.exports = trickytreats;
