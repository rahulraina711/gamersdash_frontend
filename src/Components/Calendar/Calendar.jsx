import { useLocation } from "react-router-dom";
import axios from 'axios';
import React, {useEffect} from 'react';

export default function Calendar(){
    const {search} = useLocation();
    const code = search.split('=')[1];

    useEffect(()=>{
        sendCalReq(code);
    },[])
    
    async function sendCalReq(code){
        try {
            const calRes = await axios.post("http://localhost:3100/calendar",{code:code});
        } catch (error) {
            console.log(error)
        }
    }

    return( 
    <>
        <h1>{code}</h1>
    </>)
}