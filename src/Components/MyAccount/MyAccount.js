/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './myaccount.scss';
import { domain } from '../../utils';
import { Button , Modal, TextField} from '@material-ui/core';

export default function MyAccount({id}) {
    const AXIOS = axios.create({
        baseURL: domain,
        headers:{
            Authorization:localStorage.getItem('auth_token')
        }
    })
    const loggedUser = useSelector(state=>state.user.user);
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [about, setAbout] = useState('');
    const [user, setUser] = useState({});
    const [editing, setEditing] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
  
    const handleClose = () => {
        setOpen(false);
      };

    useEffect(()=>{
        getUserDetails(id);
    },[])

    async function handleSave (){
        const changeData = {
            name,
            about,
            occupation
        }
        const newData = await AXIOS.patch("/user/"+userId, changeData);
        console.table(newData);
        getUserDetails(userId);
        handleClose();
    }

    const body = (
        <div className="modal-body">
            <div className="modal-content">
                <div className="n-r">
                    <TextField label="Display Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="a-r">
                    <TextField label="About" variant="outlined" value={about} onChange={(e)=>setAbout(e.target.value)} />
                </div>
                <div className="o-r">
                    <TextField label="Occupation" variant="outlined" value={occupation} onChange={(e)=>setOccupation(e.target.value)} />   
                </div>
                <div className="btn-r">
                    <Button variant="outlined" color="primary" onClick={handleSave}>Save</Button>
                    <Button variant="outlined" color="secondary" onClick={handleClose}>Cancel</Button>
                </div>
            </div>
        </div>
    )

    async function getUserDetails(userId){
        const userRes = await axios.get(domain+"/user/"+userId);
        setUser(userRes.data);
        setUserId(userRes.data._id);
        setName(userRes.data.name);
        setAbout(userRes.data?.about);
        setOccupation(userRes.data?.occupation);
        console.table(user, loggedUser);
        console.log(loggedUser.id, userRes.data._id);
        loggedUser.id===userRes.data._id?setEditing(true):setEditing(false);
        
    }

    return(
        <div className="main-view">
            <div className="profile">
                <img src={user.profilePic} alt="profile_Pic"/>
                <div className="profile-info">
                    <div className="user-name">
                        Display Name: <div className="name-r">{user.name}</div>
                    </div>
                    <div className="user-about">
                        About You: <div className="about-r">{user.about}</div>
                    </div>
                    <div className="user-occupation">
                        Your Occupation: <div className="occupation-r">{user.occupation}</div>
                    </div>                   
                </div>
                {editing && (< div className="editing-r">
                    <Button onClick={handleOpen}>Edit Profile</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                        {body}
                    </Modal>
                </div>)}
            </div>
            
        </div>
    )
}