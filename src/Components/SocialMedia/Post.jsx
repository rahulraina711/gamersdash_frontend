import React, {useState, useEffect} from 'react';
import {domain} from '../../utils';
import {Favorite, InsertCommentOutlined, EventOutlined} from '@material-ui/icons';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import { useSelector } from 'react-redux';

export default function Post ({ post }) {
    const authedUser = useSelector(state=>state.user);
    const [post_owner, setPost_owner] = useState({});
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [commentValue, setCommentValue] = useState(post.comments.length)
    const [likeColor, setLikeColor] = useState("primary");
    const [likeValue, setLikeValue] = useState(post.likes.length);
    const AXIOS = axios.create({
        baseURL:domain,
        headers:{
            Authorization:localStorage.getItem('auth_token')
        }
    })

    useEffect(()=>{
        getUploadersDetails(post.userId);
        getComments(post.comments);
        

    },[]);
    async function checkforlike(){
        post.likes.includes(authedUser.id)?setLikeColor("secondary"):setLikeColor("primary");
    }

    async function getUploadersDetails(id){
        const userInfo = await axios.get(domain+"/user/"+id);
        setPost_owner(userInfo.data);
        checkforlike();
      }
    async function likeHandler(){
        if(likeColor==="primary"){
            const addLike = await AXIOS.put("/likeops/"+post._id);
            setLikeColor("secondary");
            setLikeValue(post.likes.length+1);
        }
        else if(likeColor==="secondary"){
            const removeLike = await AXIOS.put("/likeops/unlike/"+post._id);
            setLikeColor("primary");
            setLikeValue(post.likes.length-1);
        }
    }

    async function commentPost (){
        const commJSON = {
            comment : newComment
        };
        const sendComment = await AXIOS.post("/comments/"+post._id, commJSON);
        setComments([...comments,sendComment.data]);
        setCommentValue(commentValue+1);
        setNewComment("");

    }
    
    
    async function getComments(arr){
        const commentsData = [];
        for(let i=0;i<arr.length;i++){
            const commRes = await axios.get(domain+"/comments/"+arr[i]);
            commentsData.push(commRes.data);
        }
        console.log(commentsData);
        setComments(commentsData);
    }

    function commentVisibilityHandler(){
        !showComments ? setShowComments(true) : setShowComments(false);
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
                        <Favorite color={likeColor} onClick={likeHandler}/> {likeValue}
                    </div>
                    <div className="comment-count">
                        <InsertCommentOutlined color="primary" onClick={commentVisibilityHandler} /> {commentValue}
                    </div>
                    
                </div>
                
                {post.isEvent==="true" && <Button className="isEvent" variant="contained" color="primary" >Add Reminder<EventOutlined /></Button>}                        
            </div>
            {showComments && (<div className="comments-section">
                {renderComments()}
            </div>)}
            <div className="add-comment">
                <div className="user-info">
                    <img id="user-profile" alt="u-profile" src={authedUser.profilePic}/>{authedUser.name}
                </div>
                <div className="comment-adding-area">
                    <input className="comment-box" placeholder="Click here to write a comment" size={65}value={newComment} onChange={(e)=>setNewComment(e.target.value)}/>
                    <Button color="secondary" variant="contained" onClick={commentPost}>post</Button>
                </div>
            </div>
        </div>
    )
}