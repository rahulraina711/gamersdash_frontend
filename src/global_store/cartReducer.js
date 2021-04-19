import {createAction, createReducer} from '@reduxjs/toolkit';

export const addToCart = createAction("addToCart");
export const removeFromCart = createAction("removeFromCart");
export const setCartTotal = createAction("setCartTotal");
export const incTotal = createAction("incTotal");
export const decTotal = createAction("decTotal");



const initState = {
    cart : [],
    total:0
}


export default createReducer(initState,{
    addToCart: (state, action) => {
        state.cart.push(action.payload.id)
        
    },
    removeFromCart: (state, action) =>{ return{
        ...state,
        cart : state.cart.filter(item=> item !== action.payload.id)
    }
        
    },
    setCartTotal: (state, action)=>{
        return{
            ...state,
            total: action.payload.total,
        }
    },
    incTotal : (state, action) => {
        return{
            ...state,
            total: state.total+action.payload.price
        }
    },
    decTotal : (state, action) => {
        return{
            ...state,
            total: state.total-action.payload.price
        }
    },

})