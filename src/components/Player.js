import React from 'react'
import PropTypes from 'prop-types'
import Counter from './Counter'
import Icon from './Icon'

export default function Player({ id, name, removePlayer, score, changeScore, isHighScore }) {
    
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                <Icon isHighScore={isHighScore} />
                { name }
            </span>

            <Counter score={score} id={id} changeScore={changeScore} />
        </div>
    )
}

Player.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    removePlayer: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired,
}