const React = require('react')
const Default = require('./layout/default')

function Show ({trickytreat, recipeBy}) {
    //console log to check data for treats in terminal
    //console.log(treat.name)
    return (
        <Default>
            <h3>{trickytreat.name}</h3>
            <p>
                and it
                {
                    trickytreat.hasGhosts
                    ? <span> boos </span>
                    : <span> boos NOT </span>
                }
                have Ghosts.
            </p>
            <img src={trickytreat.image} alt={trickytreat.name} />
            <p>{trickytreat.getrecipeBy()}</p>
            <a href={`/trickytreats/${trickytreat.id}/edit`}><button>Head-it</button></a>
            <form action={`/trickytreats/${trickytreat.id}?_method=DELETE`} method="POST">
                <input type='submit' value="DONT EAT!!!"/>
            </form>

            <li><a href="/trickytreats">Get lost</a></li>
        </Default>
    )
}

module.exports = Show