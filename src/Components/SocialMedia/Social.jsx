import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {domain} from '../../utils'
import './social.scss';
import Post from './Post';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function Social(){


    const [posts, setPosts] = useState([]);
    const user = useSelector(state=>state.user);
    const history = useHistory();
    
    useEffect(()=>{
        !user.auth ? history.push("/"):getPosts();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    async function getPosts(){
        const postRes = await axios.get(domain+"/posts");
        setPosts(postRes.data);
        console.log(postRes.data);
    }
    function renderPosts(){
        const allPosts = [...posts];
        return allPosts.map(post=>{
            return <Post key={post._id} post={post}/>
        })
    }

    return(
        <div className="main-posts-area">{renderPosts()}</div>
    )
}