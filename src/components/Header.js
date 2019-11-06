import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'
import Stopwatch from './Stopwatch'
import './Header.scss'

export default function Header({ title, players }) {
    return (
        <header>
            <Stats players={players} />
            <h1>{ title }</h1>
            <Stopwatch />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    })).isRequired,
}

Header.defaultProps = {
    title: 'Scoreboard'
}