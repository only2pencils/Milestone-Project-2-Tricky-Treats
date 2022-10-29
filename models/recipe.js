//dependencies//
const mongoose = require("mongoose");
// const Treat = require("./treat");
const { Schema } = mongoose;

//schema//
const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      enum: [
        "Dracula",
        "Frankenstein",
        "PumpkinHead",
        "Witch",
        "Oogie Boogie",
        "Crapper the unfriendly ghost",
      ],
    },
    startDate: {
      type: Date,
      required: true,
    },
    bio: String,
  },
  { toJSON: { virtuals: true } }
);

//virtuals//
recipeSchema.virtual("brebas", {
  ref: "Treat",
  localField: "_id",
  foreignField: "recipe",
});

//hooks//
recipeSchema.post("findOneAndDelete", function () {
  Treat.deleteMany({ recipe: this._conditions._id }).then((deleteStatus) => {
    console.log(deleteStatus);
  });
});

//model and export//
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
