// require mongoose
const mongoose = require("mongoose");
// create shorthand for the Schema constructor
const { Schema } = mongoose;

// schema written here
const treatSchema = new Schema({
  name: { type: String, required: true },
  hasGhost: Boolean,
  image: { type: String, default: "http://placehold.it/500x500.png" },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  },
});

//helper method//
treatSchema.methods.getRecipeBy = function () {
  return `${this.name} was cursed with love by ${this.baker.name}, who has been terrorizing us since ${this}`;
};

const Treat = mongoose.model("Treat", treatSchema);
module.exports = Treat;
