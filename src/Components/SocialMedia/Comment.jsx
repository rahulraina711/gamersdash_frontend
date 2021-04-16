import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { domain } from '../../utils';
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
                <div className="owner-name">{owner.name}</div>
            </div>
            <div className="comment-data">
                {comment.comment}
            </div>
        </div>
    )
}