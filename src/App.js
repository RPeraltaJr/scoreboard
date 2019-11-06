import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Player from './components/Player'
import './App.scss'

export default function App() {
  
  const [ players, setPlayers ] = useState([]);

  useEffect(() => { 
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const result = await response.json();
      setPlayers(result);
    }
    fetchData();
  }, []);

  const handleRemovePlayer = (id) => {
    // return all players where player.id does not equal passed id
    setPlayers(players.filter(player => player.id !== id)); 
  }

  return (
    <div className="scoreboard">

      <Header title="Scoreboard" totalPlayers={players.length} />

      {/* Players list */}
      {players.map( player =>
        <Player 
          name={player.name}
          id={player.id}
          key={player.id.toString()} 
          removePlayer={handleRemovePlayer}           
        />
      )}

    </div>
  );
  
}