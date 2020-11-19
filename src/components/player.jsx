import React from 'react';
import './player.css';
import {RollDice} from './rollDiceButton';



export class Player extends React.Component {

                
      render(){
      return(
      <section className={this.props.className}>
        <h2 className="name" >Player</h2>
        <p className="score" >{this.props.score}</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id={this.props.id}>{this.props.currentScore}</p>
        </div>
      </section>
      )
    }
}

 
