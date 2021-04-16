import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {domain} from '../../utils'
import './social.scss';
import Post from './Post';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import {Fab, Modal, LinearProgress} from '@material-ui/core';

export default function Social(){

    const AXIOS = axios.create({
        baseURL: domain,
        headers:{
            Authorization:localStorage.getItem('auth_token')
        }
    });
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const user = useSelector(state=>state.user);
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [editorDescription, setEditorDescription] = useState("");
    const [selectedFile, setSelectedFile] = useState(undefined)

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    
    useEffect(()=>{
        user.auth===false ? history.push("/") : getPosts();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    async function getPosts(){
        const postRes = await axios.get(domain+"/posts");
        setPosts(postRes.data);
        setLoading(false);
        //console.log(postRes.data);
    }
    function renderPosts(){
        let sortedPosts = [...posts];
        sortedPosts = sortedPosts.sort((a, b)=>{
            return new Date(b.createdAt) -new Date(a.createdAt);
        })
        return sortedPosts.map(post=>{
            return <Post key={post._id} post={post}/>
        })
    }
    function fileUploadHandler(event){
        console.log(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    }

    async function savePost(e){
        e.preventDefault();
    
        const postData = new FormData();
        postData.append('desc',editorDescription);
        postData.append('postImage',selectedFile);
        const pda = await AXIOS.post(domain+"/posts/", postData);
        handleClose();
        getPosts();
        console.log(pda.data);
    }
 
    const body=(
        <div className="poster">
            <form onSubmit={savePost}>
                <textarea id="description" type="text" placeholder="Enter some description here" value={editorDescription} onChange={(e)=>setEditorDescription(e.target.value)}/>
                <input id="upload" type="file" onChange={fileUploadHandler}/>

            </form>
            <button className="btn-upload" type="submit" onClick={savePost}>Upload Post</button>
            <button className="btn-cancel" type="button" onClick={handleClose}>Cancel</button>
        </div>
    )

    return(
        <div>
            {loading?<LinearProgress color="secondary" />:(<div className="main-posts-area">{renderPosts()}</div>)}
            <div className="add-post-btn" title="Add a new POST">
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
            </div>

        </div>
    )
}