import React, { useEffect, useState } from 'react';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
import './app.scss';
import {secret_ID, domain, xyz} from './utils';
import jwt from 'jsonwebtoken';
import CircularProgress from '@material-ui/core/CircularProgress';
import {userAdded, userRemoved} from './global_store/userReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';



export default function App(){

    const user = useSelector(state=>state.user.user);
    //console.lhttp://localhost:3000/storeog(user);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(()=>{
        checkForKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    async function checkForKey(){
        const oldKey = localStorage.getItem('auth_token');
        // const userOld = jwt.decode(oldKey)

        async function testKey (){
            try{
                const auth = jwt.verify(oldKey, xyz); 
                const loggedInUser = await axios.get(domain+"/user/"+auth.userId);
                const {name,profilePic} = loggedInUser.data;
                dispatch(userAdded({
                    id:auth.userId,
                    name,
                    profilePic
                }))
                
                setLoading(false); 
                
                history.push("/games");
                
            }
            catch(err){
                 console.log("Error",err);
                // console.log("Else was executed");
                // console.log(typeOf(Date.now()));
                dispatch(userRemoved());
                setLoading(false);
            }
        }
        testKey();
    }

    const googleSuccess = async(res)=>{
        setLoading(true);
        const token=res.tokenObj.id_token;
        const authAxios = axios.create({
            baseURL:domain+"/user",
            headers:{
                Authorization: token
            }
        }
        )
        const getUser= await authAxios.get("/signin");
        localStorage.setItem('auth_token',getUser.data.authToken);
        // console.log(getUser.data.user);
        checkForKey();        
        setLoading(false);

    }

    const googleFailure = (error) =>{
        console.log("Google Login Failed", error);
        setLoading(false);
    }

return(
    
    <div className="main-screen">
        {loading && <CircularProgress color="secondary" />}
        {user.auth===false && <div className="signing">
            <GoogleLogin
                clientId={secret_ID}
                buttonText="Hop In"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
                />
        </div>}
        {user.id? <h1>hello</h1>:<h1>you are not logged in</h1>}
    </div>
    )
}