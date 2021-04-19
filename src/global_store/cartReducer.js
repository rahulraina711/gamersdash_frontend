import {createAction, createReducer} from '@reduxjs/toolkit';

export const addToCart = createAction("addToCart");
export const removeFromCart = createAction("removeFromCart");



const initState = {
    cart : []
}


export default createReducer(initState,{
    addToCart: (state, action) => {
        state.cart.push(action.payload.id)
    },
    removeFromCart: (state, action) =>{ return{
        ...state,
        cart : state.cart.filter(item=> item !== action.payload.id)
    }
        
    }
})