const express = require("express");
const recipe = express.Router();
const Recipe = require("../models/recipe.js");
const recipeSeedData = require("../models/recipe_seed.js");

//index//
recipe.get("/", (req, res) => {
  Recipe.find()
    .populate("tricky treats")
    .then((foundRecipes) => {
      res.send(foundRecipes);
    });
});

//show//
recipe.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .populate({
      path: "recipes",
      options: { limit: 3 },
    })
    .lean()
    .then((foundRecipe) => {
      res.render("recipeShow", {
        recipe: foundRecipe,
      });
    });
});

//delete//
recipe.delete("/:id", (req, res) => {
  Recipe.findByIdAndDelete(req.params.id).then((deletedRecipe) => {
    res.status(303).redirect("/trickytreats");
  });
});

module.exports = recipe;
