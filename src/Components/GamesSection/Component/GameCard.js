import React from 'react';
import { Link } from 'react-router-dom';
import './gamecard.scss'

export default function GameCard({name, image, id}) {
//    const history = useHistory();

    // function toDetails(){
    //     history.push("/games/"+id);
    // }
    
    return(
        <div className="game-card">
            <div className="game-image">
                <Link to={"/gamedetails/"+id}><img src={image} alt="bacDrop"/></Link> 
            </div>
            <div className="game-title">
                {name}
            </div>
        </div>
    )
}
