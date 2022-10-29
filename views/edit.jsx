const React = require("react");
const Default = require("./layout/default.jsx");

function Edit({ trickytreat, recipes }) {
  return (
    <Default>
      <h2>Head-it a Tricky Treat</h2>
      <form
        action={`/trickytreats/${trickytreat.id}?_method=PUT`}
        method="POST"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          defaultValue={trickytreat.name}
        />
        <label htmlFor="image">Eye-mage</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={trickytreat.image}
        />
        <label htmlFor="recipe">Recipe</label>
        <select name="recipe" id="recipe" defaultValue={trickytreat.recipe}>
          {recipe.map((recipe) => {
            return (
              <option value={recipe.id} key={recipe.id}>
                {recipe.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="hasGhosts">Has Ghost?</label>
        <input
          type="checkbox"
          name="hasGhost"
          id="hasGhost"
          defaultChecked={trickytreat.hasGhost}
        />
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

module.exports = Edit;
