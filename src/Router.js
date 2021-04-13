import React from 'react';
import {Route, BrowserRouter, Switch, useParams} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import App from './App';
import ViewGame from './Components/GamesSection/ViewGames';
import Social from './Components/SocialMedia/Social';
import Store from './Components/Store/Store';
import GameDetails from './Components/GamesSection/Component/GameDetails';
import MyAccount from './Components/MyAccount/MyAccount';

function Router(){

    function Child (){
        let {id} = useParams();
        return(
            <GameDetails id={id} />
        )
    }

    function UserChild (){
        let {id} = useParams();
        return(
            <MyAccount id={id} />
        )
    }

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
                    <Route path="/gamedetails/:id" children={<Child/>}></Route>

                    <Route path="/social"><Social/></Route>
                    <Route path="/store"><Store/></Route>
                    <Route path="/user/:id" children={<UserChild/>}></Route>


                    
                </Switch>
        </BrowserRouter>
    )
}

export default Router;