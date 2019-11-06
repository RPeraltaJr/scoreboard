import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Player from './components/Player'
import AddPlayerForm from './components/AddPlayerForm'
import './App.scss'

export default function App() {
  
  const [ players, setPlayers ] = useState([]);

  useEffect(() => { 
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const result = await response.json();
      result.map(player => { 
        player.score = 0; // add custom property of score to each player
        return player; 
      }); 
      setPlayers(result);
      // console.log(result);
    }
    fetchData();
  }, []);

  const handleScoreChange = (id, delta) => {
    setPlayers(players.map(player => {
      // find player
      if( player.id === id ) { 
        // stop numbers from being negative
        if ( player.score === 0 && Math.sign(delta) === -1 ) { 
            player.score = 0;
        } else {
            player.score += delta;
        }
      }
      return player;
    }));
    // console.log(id, delta);
  }

  const handleAddPlayer = (name) => {
    let newPlayer = {
      id: players.slice(-1)[0].id + 1, // get id value of last element in array and then add 1
      name,
      score: 0,
    }
    setPlayers([...players, newPlayer]);
  }

  const handleRemovePlayer = (id) => {
    // return all players where player.id does not equal passed id
    setPlayers(players.filter(player => player.id !== id)); 
  }

  return (
    <div className="scoreboard">

      <Header title="Scoreboard" players={players} />

      {/* Players list */}
      {players.map( player =>
        <Player 
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()} 
          removePlayer={handleRemovePlayer} 
          changeScore={handleScoreChange}          
        />
      )}

      <AddPlayerForm addPlayer={handleAddPlayer} />

    </div>
  );
  
}