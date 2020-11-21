import React from 'react';
import './player.css';


export const Player = ({className, score, currentScore}) => {
                
      return(
      <section className={className}>
        <h2 className="name" >Player</h2>
        <p className="score" >{score}</p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" >{currentScore}</p>
        </div>
      </section>
      )    
};

 
