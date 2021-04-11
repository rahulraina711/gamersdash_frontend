import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {popularGamesURL} from '../../utils';
import axios from 'axios';
import GameCard from './Component/GameCard';
import './viewgame.scss';

export default function ViewGame() {

    const user = useSelector(state => state.user);
    const history = useHistory();
    const [gamesList, setGamesList] = useState([]);
    const [nextPage, setNextPage] = useState("");
    //console.log(popularGamesURL());

    useEffect(()=>{
        fetchPopularGames(popularGamesURL());
    },[])

    const fetchPopularGames =async (url) => {
        const rawgResponse = await axios.get(url);
        setGamesList([...gamesList,...await rawgResponse.data.results]);
        setNextPage(rawgResponse.data.next);
        
    }
    function renderGameCard() {
        let newGameList = [...gamesList];
        return newGameList.map((game,idx) => {
            return <GameCard key={idx} name={game.name} image={game.background_image}/>
        })
    }

    function loadMore(){
        fetchPopularGames(nextPage);
    }

    return(
        <div className="games-parent">
            <div className="games-display-area">{user.auth? renderGameCard():history.push("/")}</div>
            <button onClick={loadMore}>Load More</button>
        </div>
        
    )
}