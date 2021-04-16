import { useEffect, useState } from 'react';
import './gamedetails.scss';
import {gameDetailsURL} from '../../../utils';
import axios from 'axios';
import React from 'react';

export default function GameDetails({id,name, image, rating, ss, platforms, released}){

    const [desc , setDesc] = useState();

    useEffect(()=>{
       getDesc(id);
       // pfMapper();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    async function getDesc(id){
        const descResp = await axios.get("https://api.rawg.io/api/games/"+id);
        setDesc(descResp.data.description);
    }

    function ssMapper(){
        //console.log(ss);
        return ss.map((item,idx)=>{
            return <img className="ss-im" key={idx} src={item.image} alt="sc_sh"/>
        })
    }

    // function pfMapper(){
    //     console.log(platforms);
    // }

    return(
        <div className="container">
            <div className="main-container" >
                <div className="name-r">{name}</div>
                <img className="image-r" src={image} alt="poster"/>
                <div className="rel-r">Release Date: {released}</div>
                <div className="desc-r">
                    <div dangerouslySetInnerHTML={{__html: desc}} id="description"/>
                </div>
                <div className="ss-r">
                    {ssMapper()}
                </div>
                <div className="rating-r">Rating: {rating}</div>
            </div>
        </div>
    )
}