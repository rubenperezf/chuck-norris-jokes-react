import React from 'react'

const Joke = props => {
    return (
        <div className="jokes">
            <h1>{props.joke}</h1>
            <h2>{props.catagories}</h2>
        </div>
    )
}

export default Joke