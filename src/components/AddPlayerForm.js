import React, { useState } from 'react'
import './AddPlayerForm.scss'

export default function AddPlayerForm({ addPlayer }) {

    const [ value, setValue ] = useState('');

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(value); // call to prop method
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value}
                onChange={handleValueChange}
                placeholder="Enter a player's name" 
            />
            <input
                type="submit"
                value="Add Player"
            />
        </form>
    )
}
