import {Link, useHistory} from 'react-router-dom'
import './navbar.scss';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';

function Navbar(){
    const user = useSelector(state=> state.user)
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

    return(
        <>
        
        <div className="nav-bar">
            <div className="first">
                <div className="logo"><a href="/">LOGO</a></div>
                {user.auth&&(<div className="nav-links" onClick={handleClick}>
                    <Avatar id="profile" alt="Profile Pic" src={user.profilePic}/>
                </div>)}
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                    <label style={{padding:15}}>Hello {user?.name}</label>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={()=>{handleClose();logout()}}>Logout</MenuItem>
                </Menu>
            </div>
            {user.auth&&(<div className="second">
                <div className="nav-links">
                    <Link to="/games" >Game DB</Link>
                    <Link to="/store" >Store</Link>
                    <Link to="/social" >Social</Link>
                </div>
            </div>)}       
        </div>
        </>
    )
}

export default Navbar;