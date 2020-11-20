import logo from './logo.svg';
import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {Player} from './components/player.jsx';


class App extends React.Component {

  state = {
    playing: true,
    activePlayer: 0,
    scores: [0, 0],
    currentScore: [0, 0],
    dice: 0
   }

  reset = () =>{
    this.setState({
      playing: true,
      activePlayer: 0,
      scores: [0, 0],
      currentScore: [0, 0],
      dice: 0
    });
   };


  rollDice = () => {    
      const {activePlayer, currentScore, playing} = this.state;
      let currentDice = Math.trunc(Math.random()*6)+1;
      if(currentDice !== 1){
        if(playing){
        currentScore[activePlayer] += currentDice;            
        this.setState({dice: currentDice, currentScore: currentScore})
        }
      } else {
        this.setState({dice: currentDice});
        this.switchPlayer();
      }
    };

  switchPlayer = () => {
    let active = this.state.activePlayer;
    active = active === 0 ?  1: 0;
    this.setState({activePlayer: active, currentScore: [0, 0]});
  }

  btnHold = () => { 
    const {activePlayer, scores, currentScore} = this.state;
    let score = scores[activePlayer];
    score += currentScore[activePlayer];  
    scores[activePlayer] = score;
    this.setState({scores: scores});
    if(scores[activePlayer] >= 20){
      this.setState({playing: false});
      console.log("winner");
    }
    this.switchPlayer();        
  };

  
  
  render(){

  return (
    <div className="App">
      <main className = "main">
        <img src={`../images/dice-${this.state.dice}.png`} 
        alt="Playing dice" 
        className={this.state.dice === 0 ? "dice hidden" : "dice"} />
        <button className="btn btn--new" onClick={this.reset}>🔄 New game</button>
        <button className="btn btn--roll" onClick={this.rollDice}>🎲Roll dice</button>
        <button className="btn btn--hold" onClick={this.btnHold}>📥 Hold</button>
        <Player 
          score = {this.state.scores[0]}
          currentScore = {this.state.currentScore[0]}
          className ={this.state.activePlayer === 0 ? "player  player--active" : "player"}
          id = "0"
        />
        <Player 
          score = {this.state.scores[1]}
          currentScore = {this.state.currentScore[1]}
          className = {this.state.activePlayer === 0 ? "player" : "player player--active"}
          id = "1"
        />
      </main>
    </div>
  
  );
  }    
}

export default App;
