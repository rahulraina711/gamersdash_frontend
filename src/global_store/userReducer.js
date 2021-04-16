import {createAction, createReducer} from '@reduxjs/toolkit';

export const userAdded = createAction("userAdded");
export const userRemoved = createAction("userRemoved");
export const postChanged = createAction("postChanged");


const initState = {
    user :{
        auth: false,
        cart: []
    }
}


export default createReducer(initState,{
    userAdded: (state, action) => {
        state.user = {
            ...state.user,
            id : action.payload.id,
            name: action.payload.name,
            profilePic: action.payload.profilePic,
            auth : true,
            cart : action.payload.cart
        };
    },
    userRemoved: (state, action) => {
        state.user = {
            auth: false,
            cart: [],
            postDeleted:false
        };
    },

})