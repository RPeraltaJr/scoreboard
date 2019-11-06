import React from 'react'
import Counter from './Counter'

export default function Player({ id, name, removePlayer, score, changeScore }) {
    
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                { name }
            </span>

            <Counter score={score} id={id} changeScore={changeScore} />
        </div>
    )
}
