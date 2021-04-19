import React from 'react';
import {Route, BrowserRouter, Switch, useParams} from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import App from './App';
import ViewGame from './Components/GamesSection/ViewGames';
import Social from './Components/SocialMedia/Social';
import Store from './Components/Store/Store';
import MyAccount from './Components/MyAccount/MyAccount';
import Calendar from './Components/Calendar/Calendar';
import Cart from './Components/Store/Components/Cart';

function Router(){

    function UserChild (){
        let {id} = useParams();
        return(
            <MyAccount id={id} />
        )
    }

    return(
        <BrowserRouter>
            <Navbar />
                <Switch>
                    <Route exact path="/"><App /></Route>
                    
                    <Route path="/games"><ViewGame /></Route>
                    <Route path="/social"><Social/></Route>
                    <Route path="/store"><Store/></Route>
                    <Route path="/user/:id" children={<UserChild/>}></Route>
                    <Route path="/auth/success"><Calendar /></Route>
                    <Route path="/cart"><Cart /></Route>
                </Switch>
        </BrowserRouter>
    )
}

export default Router;