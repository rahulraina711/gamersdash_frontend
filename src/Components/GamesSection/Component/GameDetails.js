import { useEffect, useState } from 'react';
import './gamedetails.scss';
import {gameDetailsURL} from '../../../utils';
import axios from 'axios';

export default function GameDetails(props){
    const [game,setGame] = useState({});
    useEffect(()=>{
        fetchandRenderDetails();
    },[]);

    async function fetchandRenderDetails(){
        const detailsResponse = await axios.get(gameDetailsURL(props.id));
        const gameDetails = detailsResponse.data;
        // document.getElementById("description").innerHTML=gameDetails.description;
        return setGame(gameDetails);
    }

    return(
        <div className="container">
            <div className="main-container" >
            <img className="poster" src={game.background_image} alt="poster"/>
            <div className="details-card">
                <div className="name">{game.name}</div>
                <div dangerouslySetInnerHTML={{__html: game.description}} id="description"/>
                <div className="extras">
                    <p>Rating: {game.rating}</p> 
                    <p>Visit :<a href={game.website}>website</a> for more details.</p>
                </div>
            </div>
        </div>
        </div>
    )
}