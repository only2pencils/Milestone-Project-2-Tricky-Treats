const React = require("react");
const Default = require("./layout/default.jsx");

function Index({ treats, recipes, title }) {
  return (
    <Default title={title}>
      <h2>Severed Index Finger Page</h2>
      <h3>Recipes</h3>
      <ul>
        {recipes.map((recipes) => {
          return (
            <li key={recipe._id}>
              <a href={`/recipes/${recipe._id}`}>{recipe.name}</a>
            </li>
          );
        })}
      </ul>
      <h3>Treats</h3>
      <div className="newButton">
        <a href="/treats/new">
          <button>Mummify a new treat</button>
        </a>
      </div>
      {treats.map((treat, index) => {
        return (
          <li key={treat._id}>
            <a href={`/treats/${treat._id}`}>{treat.name}</a>
          </li>
        );
      })}
    </Default>
  );
}
module.exports = Index;
