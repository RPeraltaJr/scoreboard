import React from 'react'
import PropTypes from 'prop-types'

export default function Counter({ id, score, changeScore }) {

    return (
        <div className="counter">
            {/* Passes id and value to changeScore method */}
            <button className="counter-action decrement" onClick={() => changeScore(id, -1)}> - </button>
            <span className="counter-score">{ score }</span>
            <button className="counter-action increment" onClick={() => changeScore(id, 1)}> + </button>
        </div>
    );

}

Counter.propTypes = {
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired,
}