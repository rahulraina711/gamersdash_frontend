import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {domain} from '../../utils'
import './social.scss';
import Post from './Post';


export default function Social(){


    const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        getPosts();
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