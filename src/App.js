import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {Player} from './components/player.jsx';


class App extends React.Component {

  state = {
    playing: true,
    activePlayer: 0,
    scores: [0, 0],
    currentScore: 0,
    dice: 0
   };

  reset = () =>{
    this.setState({
      playing: true,
      activePlayer: 0,
      scores: [0, 0],
      currentScore: 0,
      dice: 0
    });
   };


  rollDice = () => {
    if(this.state.playing){    
      let {activePlayer, currentScore} = this.state;
      let currentDice = Math.trunc(Math.random()*6)+1;
      if(currentDice !== 1){        
        currentScore += currentDice;            
        this.setState({dice: currentDice, currentScore: currentScore});        
      } else {
        this.setState({dice: currentDice});
        this.switchPlayer();
      }
    }
    };

  switchPlayer = () => {
    let active = this.state.activePlayer;
    active = active === 0 ?  1 : 0;
    this.setState({activePlayer: active, currentScore: 0});
  }

  btnHold = () => {
    if(this.state.playing){
    const {activePlayer, scores, currentScore} = this.state;
    let score = scores[activePlayer];
    score += currentScore;  
    scores[activePlayer] = score;
    this.setState({scores: scores});
    if(scores[activePlayer] >= 20){
      this.setState({playing: false, dice: 0});
    };
    this.switchPlayer(); 
  };       
  };

  
  getClassNames = (activePlayer) => {
    const {scores} = this.state;
    let classes = "player";
    if(activePlayer === this.state.activePlayer){
      classes += " player--active";
    }else{
      classes = "player";
    }
    classes += scores[activePlayer] >= 20 ? " player--winner" : "";
    return classes;
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
          currentScore = {this.state.activePlayer === 0 ? this.state.currentScore : 0}
          className ={this.getClassNames(0)}
        />
        <Player 
          score = {this.state.scores[1]}
          currentScore = {this.state.activePlayer === 1 ? this.state.currentScore : 0}
          className = {this.getClassNames(1)}
        />
      </main>
    </div>
  
  );
  }    
}

export default App;
