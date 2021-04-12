import {createAction, createReducer} from '@reduxjs/toolkit';

export const userAdded = createAction("userAdded");
export const userRemoved = createAction("userRemoved");
export const pageChanged = createAction("pageChanged");

const initState = {
    user :{
        auth: false,
        cart: [],
        currentPage:"social"
    }
}

export default createReducer(initState,{
    userAdded: (state, action) => {
        state.user = {
            id : action.payload.id,
            name: action.payload.name,
            profilePic: action.payload.profilePic,
            auth : true
        };
    },
    userRemoved: (state, action) => {
        state.user = {
            auth : false
        };
    }
})