import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Player from './components/Player/Player'
import AddPlayerForm from './components/AddPlayerForm/AddPlayerForm'
import './App.scss'

export default function App() {
  
  const [ players, setPlayers ] = useState([]);

  // * Fetch users
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

  // * Score change
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

  // * Add player
  const handleAddPlayer = (name) => {
    if( name.trim() !== '' ) {
      let newPlayer = {
        id: players.slice(-1)[0].id + 1, // get id value of last element in array and then add 1
        name,
        score: 0,
      }
      setPlayers([...players, newPlayer]);
    }
  }

  // * Remove player
  const handleRemovePlayer = (id) => {
    // return all players where player.id does not equal passed id
    setPlayers(players.filter(player => player.id !== id)); 
  }

  // * High score
  const getHighScore = () => {
    const scores = players.map( player => player.score ); // get all player scores
    const highScore = Math.max(...scores); // get max score value
    if (highScore) {
      return highScore;
    } 
    return null;
  }
  const highScore = getHighScore();


  return (
    <div className="scoreboard">

      <Header players={players} />

      {/* Players list */}
      {players.map( player =>
        <Player 
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()} 
          removePlayer={handleRemovePlayer} 
          changeScore={handleScoreChange} 
          isHighScore={highScore === player.score}
        />
      )}

      <AddPlayerForm addPlayer={handleAddPlayer} />

    </div>
  );
  
}