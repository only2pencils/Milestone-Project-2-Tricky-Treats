const React = require("react");
const Default = require("./layout/default.jsx");

function Show({ recipe }) {
  return (
    <Default>
      <h3>{recipe.name}</h3>
      <p>
        {recipe.name} has been with us until you ATE it!{" "}
        {recipe.startDate.getFullYear()}
      </p>
      <p>
        About {recipe.name}: {recipe.bio}
      </p>
      <h3>Treats {recipe.name} has recipe</h3>
      <ul>
        {recipe.treats.map((treat) => {
          return <li key={treat.id}>{treat.name}</li>;
        })}
      </ul>
      <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
      </form>
    </Default>
  );
}

module.exports = Show;
