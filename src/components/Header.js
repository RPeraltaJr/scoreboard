import React from 'react'
import './Header.scss'

export default function Header({ title, totalPlayers }) {
    return (
        <header>
            <h1>{ title }</h1>
            <span className="stats">Players: { totalPlayers }</span> 
        </header>
    )
}
