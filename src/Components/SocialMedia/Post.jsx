import React, {useState, useEffect} from 'react';
import {domain} from '../../utils';
import {Favorite, InsertCommentOutlined, EventOutlined} from '@material-ui/icons';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';

export default function Post ({ post }) {

    const [post_owner, setPost_owner] = useState({});
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(()=>{
        getUploadersDetails(post.userId);
        getComments(post.comments);

    },[]);

    async function getUploadersDetails(id){
        const userInfo = await axios.get(domain+"/user/"+id);
        setPost_owner(userInfo.data);
      }

    const handleClick = () =>{
        alert("Added to events");
      };
    
    async function getComments(arr){
        const commentsData = [];
        for(let i=0;i<arr.length;i++){
            const commRes = await axios.get(domain+"/comments/"+arr[i]);
            commentsData.push(commRes.data);
        }
        console.log(commentsData);
        setComments(commentsData);
    }
    function renderComments(){
        return [...comments].map(comment=>{
            return <Comment key={comment._id} comment={comment}/>
        })
    } 

    return (
        <div key={post._id} className="landing-post">
            <div className="post-user-info">
              <img id="post-user-image" alt="user_image" src={post_owner.profilePic} />
              <Link to={"/user/"+post.userId}>{post_owner.name}</Link>
            </div>
            <img id="post-image" src={domain+"/"+post.postImage} alt="post-lander"/>
            <div className="desc">{post.desc}</div>
            <div className="like-comment-event">
                <div className="like-comment">
                    <div className="like-count">
                        <Favorite color="primary"/> {post.likes.length}
                    </div>
                    <div className="comment-count">
                        <InsertCommentOutlined color="primary" onClick={()=>setShowComments(true)} /> {post.comments.length}
                    </div>
                    
                </div>
                
                {post.isEvent==="true" && <Button className="isEvent" variant="contained" color="primary" onClick={handleClick}>Add Reminder<EventOutlined /></Button>}                        
            </div>
            {showComments && (<div className="comments-section">
                {renderComments()}
            </div>)}
        </div>
    )
}