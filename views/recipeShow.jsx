const React = require('react')
const Default = require('./layout/default')

function Show ({recipe}) {
    return (
        <Default>
            <h3>{recipe.name}</h3>
            <p>{recipe.name} Has been with us until you ATE it! {recipe.startDate.getFullYear()}</p>
            <p>About {recipe.name}: {recipe.bio}</p>
            <h3>Tricky Treats {recipe.name} has recipe</h3>
            <ul>
                {
                    recipe.trickytreats.map((trickytreat)=> {
                        return (
                            <li key={trickytreat.id}>
                                {trickytreat.name}
                            </li>
                        )
                    })
                }
            </ul>
            <form action={`/recipes/${recipe._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE"/>
            </form>
        </Default>
    )
}

module.exports = Show