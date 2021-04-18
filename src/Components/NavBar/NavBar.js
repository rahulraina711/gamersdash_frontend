import {Link, useHistory} from 'react-router-dom'
import './navbar.scss';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import logo from './logo.png';

function Navbar(){
    const user = useSelector(state=> state.user.user)
    const [games, setGames] = useState(true);
    const [store, setStore] = useState(false);
    const [social, setSocial] = useState(false);
    const [anchorEl, setAnchorEl] = useState();
    const history = useHistory();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      function logout(){
        localStorage.removeItem('auth_token');
        history.push("/");
    }
    function gamesOn(){
        setGames(true);
        setSocial(false);
        setStore(false);
    };
    function storeOn(){
        setGames(false);
        setSocial(false);
        setStore(true);

    };
    function socialOn() {
        setGames(false);
        setSocial(true);
        setStore(false);
    };

    function myAccount(){
        history.push("/user/"+user.id);
    }

    return(
        <>
        
        <div className="nav-bar">
            <div className="first">
                <div className="logo"><a href="/">
                     <img src={logo} alt="logo"/>
                    </a></div>
                {user.auth&&(<div className="nav-links" onClick={handleClick}>
                    <Avatar id="profile" alt="Profile Pic" src={user.profilePic}/>
                </div>)}
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                    <label style={{padding:15}}>Hello {user?.name}</label>
                    <MenuItem onClick={myAccount}>My account</MenuItem>
                    <MenuItem onClick={()=>{handleClose();logout()}}>Logout</MenuItem>
                </Menu>
            </div>
            {user.auth&&(<div className="second">
                <div className="nav-links">
                    {games?<Link className="active" to="/games" >Game DB</Link> : <Link to="/games" onClick={gamesOn}>Game DB</Link>}
                    {store?<Link className="active" to="/store" >Store</Link>:<Link to="/store" onClick={storeOn}>Store</Link>}
                    {social?<Link className="active" to="/social" >Social</Link>:<Link to="/social" onClick={socialOn}>Social</Link>}
                </div>
            </div>)}       
        </div>
        </>
    )
}

export default Navbar;