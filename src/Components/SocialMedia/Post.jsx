import React, {useState, useEffect} from 'react';
import {domain} from '../../utils';
import {Favorite, InsertCommentOutlined, MoreHoriz} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

// {post.isEvent==="true" && <Button className="isEvent" variant="contained" color="primary" target="_blank" rel="noopener norefrence" href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=909752796516-tai4asagcrndntlnrr9t1vutbrnak2fp.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground" >Add Reminder<EventOutlined /></Button>}

export default function Post ({ post }) {
    const authedUser = useSelector(state=>state.user.user);
    const [likes, setLikes] = useState([])
    const [post_owner, setPost_owner] = useState({});
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [commentValue, setCommentValue] = useState(post.comments.length)
    const [likeColor, setLikeColor] = useState("primary");
    const [likeValue, setLikeValue] = useState(post.likes.length);
    const [anchorEl, setAnchorEl] = useState();
    const AXIOS = axios.create({
        baseURL:domain,
        headers:{
            Authorization:localStorage.getItem('auth_token')
        }
    })

    useEffect(()=>{
        getUploadersDetails(post.userId);
        getComments(post.comments);
        

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    async function getLikes(){
        const likesRes = await AXIOS('/posts/'+post._id);
        console.log("here",likesRes.data.likes);
        setLikes(likesRes.data.likes);
        setLikeValue(likesRes.data.likes.length);
    }

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
            getLikes();
            setLikeColor("secondary");
            
        }
        else if(likeColor==="secondary"){
            const removeLike = await AXIOS.put("/likeops/unlike/"+post._id);
            getLikes();
            setLikeColor("primary");            
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
    async function deletePost(id){
        console.log(domain+"/posts/"+id);
        const deletePostUp = await AXIOS.delete("/posts/"+id);
        console.table(deletePostUp);
        window.location.reload();
        
    }
    let d = new Date(post.createdAt)

    async function flagPost(id){
        const flagRes = await axios.post(domain+"/flag/"+id);
        toast.success(flagRes.data.message);
        handleClose();

    }

    return (
        <div key={post._id} className="landing-post">
            <div className="more-options">
                <div className="date">
                    {d.toString().slice(0,15)}
                </div>
                <div className="options">
                    <MoreHoriz onClick={handleClick}/>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                          <MenuItem onClick={()=>flagPost(post._id)}>Flag as fake / inappropriate</MenuItem>
                          {post.userId===authedUser.id&&(<MenuItem onClick={()=>{deletePost(post._id);handleClose()}}>Delete</MenuItem>)}
                    </Menu>
                </div>
            </div>
            <div className="post-user-info">
              <img id="post-user-image" alt="user_image" src={post_owner.profilePic} />
              <Link to={"/user/"+post.userId}>{post_owner.name}</Link>
            </div>
            <div className="desc">{post.desc}</div>
            <img id="post-image" src={domain+"/"+post.postImage} alt="post-lander"/>
            
            <div className="like-comment-event">
                <div className="like-comment">
                    <div className="like-count">
                        <Favorite color={likeColor} onClick={likeHandler}/> {likeValue}
                    </div>
                    <div className="comment-count">
                        <InsertCommentOutlined color="secondary" onClick={commentVisibilityHandler} /> {commentValue}
                    </div>
                    
                </div>                        
            </div>
            {showComments && (<div className="comments-section">
                {renderComments()}
            </div>)}
            <div className="add-comment">
                <div className="user-info">
                    <img id="user-profile" alt="u-profile" src={authedUser.profilePic}/>{authedUser.name}
                </div>
                <div className="comment-adding-area">
                    <input className="comment-box" placeholder="Click here to write a comment" value={newComment} onChange={(e)=>setNewComment(e.target.value)}/>
                    <Button color="secondary" variant="contained" onClick={commentPost}>Post</Button>
                </div>
            </div>
            <Toaster
                toastOptions={{
                  success: {
                    style: {
                      background: 'green',
                    },
                  },
                  error: {
                    style: {
                      background: 'yellow',
                    },
                  },
                }}
              />
        </div>
    )
}