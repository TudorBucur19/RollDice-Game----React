import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {Player} from './components/player.jsx';
//import {RollDice} from './components/rollDiceButton.jsx';



class App extends React.Component {

  state = {
    activePlayer: 0,
    scores: [0, 0],
    // score1: 0,
    // score2: 0,
    currentScore: 0,
    //currentScore2: 0,
    dice: 0
   }

  rollDice = () => {    
      let currentDice = Math.trunc(Math.random()*6)+1;
      let currentScore = this.state.currentScore;
      currentScore += currentDice;
      console.log(currentDice);      
      this.setState({dice: currentDice, currentScore: currentScore})
    };

  switchPlayer = () => {
    let active = this.state.activePlayer;
    active = active === 0 ?  1: 0;
    this.setState({activePlayer: active});
    this.setState({currentScore: 0});
    // de adaugat sa modifice si clasa de css: active
  }

  btnHold = () => { 
    const {activePlayer, scores, currentScore} = this.state;
    let score = scores[activePlayer];
    score += currentScore;  
    scores[activePlayer] = score;
    this.setState({scores: scores});
    this.switchPlayer();
        
  };

  
  
  render(){

  return (
    <div className="App">
      <main className = "main">
        <img src={`../images/dice-${this.state.dice}.png`} alt="Playing dice" className="dice" />
        <button className="btn btn--new">🔄 New game</button>
        <button className="btn btn--roll" onClick={this.rollDice}>🎲Roll dice</button>
        <button className="btn btn--hold" onClick={this.btnHold}>📥 Hold</button>
        <Player 
          score = {this.state.scores[0]}
          currentScore = {this.state.currentScore}
          className = "player  player--active"
          id = "0"
        />
        <Player 
          score = {this.state.scores[1]}
          currentScore = {this.state.currentScore}
          className = "player"
          id = "1"
        />
      </main>
    </div>
  
  );
  }    
}

export default App;
