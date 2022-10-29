const React = require("react");
const Default = require("./layout/Default.jsx");

function New({ recipes }) {
  return (
    <Default>
      <h2> Add a new treat</h2>
      <form action="/treats" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="recipe">Recipe</label>
        <select name="recipe" id="recipe">
          {recipes.map((recipe) => {
            return (
              <option value={recipe.id} key={recipe.id}>
                {recipe.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="hasGhost">Has Ghost</label>
        <input type="checkbox" name="hasGhost" id="hasGhost" defaultChecked />
        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}

module.exports = New;
