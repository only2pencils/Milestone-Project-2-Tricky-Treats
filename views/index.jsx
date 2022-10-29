const React = require('react')
const Default = require('./layout/default')

function Index ({trickytreats, recipes, title}) {
    return (
        <Default title={title}>
            <h2>Severed-Index Finger Page</h2>
            <h3>Recipes</h3>
            <ul>
                {
                    recipes.map((recipe)=> {
                        return (
                            <li key={recipe._id}>
                                <a href={`/recipes/${recipe._id}`}>{recipe.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Tricky Treats</h3>
            <div className='newButton'>
                <a href="/trickytreats/new"><button>Mummify a new treat</button></a>
            </div>
            {
                trickytreats.map((trickytreat, index) => {
                    return (
                        <li key={trickytreat._id}>
                            <a href={`/trickytreats/${trickytreat._id}`}>
                            {trickytreat.name}
                            </a>
                        </li>
                    )
                })
            }
        </Default>
    )
}
module.exports = Index