import React from 'react'

export default function Stats({ players }) {

    const totalPlayers = players.length;
    const totalPoints = players.reduce((total, player) => {
        return total + player.score;
    }, 0); // initial value of 0

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{ totalPlayers }</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    )
}
