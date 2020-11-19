import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {Player} from './components/player.jsx';
//import {RollDice} from './components/rollDiceButton.jsx';



class App extends React.Component {

  state = {
    score1: 0,
    score2: 0,
    currentScore1: 0,
    currentScore2: 0,
    dice: 0
   }

  rollDice = () => {
    let currentDice = Math.trunc(Math.random()*6)+1;
    let currentScore = this.state.currentScore1;
    currentScore += currentDice;
    console.log(currentDice);      
    this.setState({dice: currentDice, currentScore1: currentScore})
  };

  btnHold = () => {
    let score = this.state.score1;
    let currentScore1 = this.state.currentScore1;
    score += currentScore1;
    this.setState({score1: score,  currentScore1: 0 })
  }
  
  render(){

  return (
    <div className="App">
      <main className = "main">
        <img src={`../images/dice-${this.state.dice}.png`} alt="Playing dice" className="dice" />
        <button className="btn btn--new">🔄 New game</button>
        <button className="btn btn--roll" onClick={this.rollDice}>🎲Roll dice</button>
        <button className="btn btn--hold" onClick={this.btnHold}>📥 Hold</button>
        <Player 
          score = {this.state.score1}
          currentScore = {this.state.currentScore1}
          className = "player  player--active"
          id = "0"
        />
        <Player 
          score = {this.state.score2}
          currentScore = {this.state.currentScore2}
          className = "player"
          id = "1"
        />
      </main>
    </div>
  
  );
  }    
}

export default App;
