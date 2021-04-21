import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain } from '../../utils';
import { Link } from 'react-router-dom';
export default function Comment({comment}){

    const [owner, setOwner] = useState({});

    useEffect(()=>{
        getOwnerDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function getOwnerDetails (){
        const ownerRes = await axios.get(domain+"/user/"+comment.userId);
        setOwner(ownerRes.data);
    }

    return (
        <div className="indi-comment">
            <div className="comment-owner">
                <img id="owner-pic" src={owner.profilePic} alt="owner_pic"/>
                <Link className="owner-name" to={"/user/"+owner._id}>{owner.name}</Link>
                
            </div>
            <div className="comment-data">
                {comment.comment}
            </div>
        </div>
    )
}