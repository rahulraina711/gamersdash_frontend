import React from 'react';
import {Route, BrowserRouter, Switch, useParams} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import App from './App';
import ViewGame from './Components/GamesSection/ViewGames';

function Router(){

    // function Child (){
    //     let {id} = useParams();
    //     return(
    //         <MovieDetails id={id} />
    //     )
    // }

    // function SearchChild (){
    //     let{id} = useParams();
    //     return(
    //         <Search id={id}/>
    //     )   
    // }
    //<Route path="/movie/:id" children={<Child />}></Route>
    // <Route path="/search/:id" children={<SearchChild />}></Route>

    return(
        <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact path="/"><App /></Route>
                    
                    <Route path="/games"><ViewGame /></Route>
                    
                </Switch>
        </BrowserRouter>
    )
}

export default Router;