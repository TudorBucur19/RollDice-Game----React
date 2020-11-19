import React from 'react';
import './buttons.styles.css';

//import Dice from './images/dice-5.png';





export class RollDice extends React.Component {
  state= {
    dice: 5
  }
    
  // rollDice = () => {
  //   this.setState({dice: Math.trunc(Math.random()*6)+1});
    
  //   console.log('Button clicked', this.state.dice)
  // };
  
  render(){      
      return(
        <div>   
            <button className="btn btn--roll">
            🎲Roll dice
            </button>
        </div> 
      )
    }
};