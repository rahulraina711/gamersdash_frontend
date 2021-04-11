import React from 'react';
import './gamecard.scss';

export default function GameCard({name, image}) {
    
    return(
        <div className="game-card">
            <div className="game-image" >
                <img src={image} alt="bacDrop"/>
            </div>
            <div className="game-title">
                {name}
            </div>
        </div>
    )
}