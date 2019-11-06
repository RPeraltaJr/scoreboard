import React from 'react'
import PropTypes from 'prop-types'
import './AddPlayerForm.scss'

export default function AddPlayerForm({ addPlayer }) {

    // with refs, render is called only once
    const playerInput = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addPlayer(playerInput.current.value); // call to prop method
        e.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                ref={playerInput}
                placeholder="Enter a player's name" 
            />
            <input
                type="submit"
                value="Add Player"
            />
        </form>
    )
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func.isRequired,
}