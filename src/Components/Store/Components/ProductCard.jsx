import {domain} from '../../../utils';
import './products.scss';
import {AddShoppingCart} from '@material-ui/icons';
import {addToCart} from '../../../global_store/cartReducer';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RiLuggageCartFill} from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function ProductCard({id , image , name , description , price , countInStock}){

  const [inCart, setInCart] = useState(false)
  const userCart = useSelector(state => state.cart.cart);
  const AXIOS = axios.create({
    baseURL:domain,
    headers:{
      Authorization: localStorage.getItem('auth_token')
    }
  })

  useEffect(()=>{
    if(userCart.includes(id)){
      setInCart(true);
    }
    else{
      setInCart(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const dispatch = useDispatch();


  async function addAction(id){
    if(!userCart.includes(id)){
      dispatch(addToCart({id:id}));
      // eslint-disable-next-line no-unused-vars
      const createOrder =await AXIOS.post("/orders",{productId:id});
      setInCart(true);
      toast.success("item added to cart");
    }
    else{
      toast.error("item already in cart");
    }
    
  }
    return(
        <div className="prod-card">
            <div className="prod-image">
                <img className="fit-pic" src={domain+"/"+image} alt="image_prod" />
            </div>
            <div className="prod-details">
                <div className="prod-name">{name.slice(0,45)}...</div>
            </div>
            <div className="cart-fxns">
                <div className="price">Price: ₹{price}</div>
                <div className="in-stock">In Stock : {countInStock}</div>
                  <button className="a2c" onClick={()=>addAction(id)}>
                    {!inCart?<AddShoppingCart />:<RiLuggageCartFill size={25}/>}
                  </button>
            </div>
            <Toaster
                toastOptions={{
                  success: {
                    style: {
                      background: 'green',
                    },
                  },
                  error: {
                    style: {
                      background: 'yellow',
                    },
                  },
                }}
              />
        </div>
    )
}