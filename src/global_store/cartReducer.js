import {createAction, createReducer} from '@reduxjs/toolkit';

export const addToCart = createAction("addToCart");



const initState = {
    cart : []
}


export default createReducer(initState,{
    addToCart: (state, action) => {
        state.cart.push(action.payload.id)
    },
})