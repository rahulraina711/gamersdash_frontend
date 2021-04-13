import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './myaccount.scss';
import { domain } from '../../utils';

export default function MyAccount({id}) {
    const loggedUser = useSelector(state=>state.user.id);
    const [user, setUser] = useState({});
    const [editing, setEditing] = useState();

    useEffect(()=>{
        getUserDetails(id);
    },[])

    async function getUserDetails(userId){
        const userRes = await axios.get(domain+"/user/"+userId);
        setUser(userRes.data);
        console.log(user, loggedUser);
        loggedUser===user._id?setEditing("true"):setEditing("false");
    }

    return(
        <div className="main-view">
            <div className="profile">
                <img src={user.profilePic} alt="profile_Pic"/>
                <div className="profile-info">
                    <div className="user-name">
                        {user.name}
                    </div>
                    <div className="user-about">
                        {user.about}
                    </div>
                    <div className="user-occupation">
                        {user.occupation}
                    </div>                   
                    
                    
                </div>
            </div>
            
        </div>
    )
}