import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {newGamesURL} from '../../utils';
import axios from 'axios';
import GameCard from './Component/GameCard';
import './viewgame.scss';
import {Button, CircularProgress} from '@material-ui/core';

export default function ViewGame() {

    const user = useSelector(state => state.user);
    const history = useHistory();
    const [gamesList, setGamesList] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [loading, setLoading] = useState(true);
    //console.log(popularGamesURL());

    useEffect(()=>{
        fetchPopularGames(newGamesURL());
    },[])

    const fetchPopularGames =async (url) => {
        const rawgResponse = await axios.get(url);
        setGamesList([...gamesList,...await rawgResponse.data.results]);
        setNextPage(rawgResponse.data.next);
        setLoading(false);
        
    }
    function renderGameCard() {
        let newGameList = [...gamesList];
        return newGameList.map((game,idx) => {
            return <GameCard key={idx} name={game.name} image={game.background_image} id={game.id}/>
        })
    }

    function loadMore(){
        setLoading(true);
        fetchPopularGames(nextPage);
    }

    return(
        <div className="games-parent">
            <div className="games-display-area">{user.auth? renderGameCard():history.push("/")}</div>
            {loading && <CircularProgress color="secondary" />}
            {!loading && <Button variant="contained" color="primary" onClick={loadMore}>Load More</Button>}
        </div>
        
    )
}