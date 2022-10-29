// require mongoose
const mongoose = require("mongoose");
// create shorthand for the Schema constructor
const { Schema } = mongoose;

// schema written here
const trickytreatSchema = new Schema({
  name: { type: String, required: true },
  hasGhost: Boolean,
  image: { type: String, default: "http://placehold.it/500x500.png" },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  },
});

//helper method//
trickytreatSchema.methods.getRecipeBy = function () {
  return `${this.name} was cursed with love by ${this.recipe.name}, who has been terrorizing us since ${this}`;
};

const TrickyTreat = mongoose.model("TrickyTreat", trickytreatSchema);
module.exports = TrickyTreat;
