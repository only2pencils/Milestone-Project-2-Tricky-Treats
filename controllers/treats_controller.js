const express = require("express");
const treats = express.Router();
const Treat = require("../models/treat.js");
const Recipe = require("../models/recipe.js");
const treatSeedData = require("../models/seed.js");

//INDEX//
treats.get("/", async (req, res) => {
  const foundRecipes = await Recipe.find().lean();
  const foundTreats = await Treat.find().limit(2).lean();
  console.log(foundTreats);
  res.render("index", {
    treats: foundTreats,
    recipes: foundRecipes,
    title: "Severed Index Finger Page",
  });
});

//NEW//
treats.get("/new", (req, res) => {
  Recipe.find().then((foundRecipes) => {
    res.render("new", {
      recipes: foundRecipes,
    });
  });
});

//SHOW//
treats.get("/:id", (req, res) => {
  Treat.findById(req.params.id)
    .populate("recipe")
    .then((foundTreat) => {
      res.render("show", {
        treat: foundTreat,
      });
    })
    .catch((err) => {
      res.send("404");
    });
});

//EDIT//
treats.get("/:id/edit", (req, res) => {
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
treats.put("/:id", (req, res) => {
  if (req.body.hasGhost === "on") {
    req.body.hasGhost = true;
  } else {
    req.body.hasGhost = false;
  }
  Treat.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedTreat) => {
      console.log(updatedTreat);
      res.redirect(`/treats/${req.params.id}`);
    }
  );
});

//CREATE//
treats.post("/", (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGhost === "on") {
    req.body.hasGhost = true;
  } else {
    req.body.hasGhost = false;
  }
  Treat.create(req.body);
  res.redirect("/treats");
});

//DELETE//
treats.delete("/:id", (req, res) => {
  Treat.findByIdAndDelete(req.params.id).then((deletedTreat) => {
    res.status(303).redirect("/treats");
  });
});

//SEED ROUTE//
treats.get("/data/seed", (req, res) => {
  Treat.insertMany(treatSeedData).then((createTreats) => {
    res.redirect("/treats");
  });
});

module.exports = treats;
