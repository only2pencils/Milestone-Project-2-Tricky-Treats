const React = require('react')
const Default = require('./layout/default')

function Show ({treat, recipeBy}) {
    //console log to check data for treats in terminal
    //console.log(treat.name)
    return (
        <Default>
            <h3>{treat.name}</h3>
            <p>
                and it
                {
                    treat.hasGhosts
                    ? <span> boos </span>
                    : <span> boos NOT </span>
                }
                have Ghosts.
            </p>
            <img src={treat.image} alt={treat.name} />
            <p>{treat.getrecipeBy()}</p>
            <a href={`/treats/${treat.id}/edit`}><button>Eat It!!!</button></a>
            <form action={`/treats/${treat.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DONT EAT!!!"/>
            </form>

            <li><a href="/treats">Get lost</a></li>
        </Default>
    )
}

module.exports = Show