import {domain} from '../../../utils';
import './productDetail.scss';
import {AddShoppingCart} from '@material-ui/icons';
import {addToCart} from '../../../global_store/cartReducer';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RiLuggageCartFill} from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function ProductDetail({id , image , name , description , price , countInStock}){

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

  function beautifyDesc(){
    let coolDesc = description.split('.');
      return coolDesc.map((desc,idx)=>{
          return <li key={idx}>{desc}</li>
        })
  }

    return(
        <div className="prod-card">
            <div className="prod-image">
                <img className="fit-pic" src={domain+"/"+image} alt="image_prod" />
            </div>
            <div className="prod-details">
                <div className="prod-name">{name}</div>
                <div className="prod-description">
                        <ul>
                            {beautifyDesc()}
                        </ul>
                    </div>
            </div>
            <div className="cart-fxns">
                <div className="price">Price: ₹{price}</div>
                <div className="in-stock">In Stock : {countInStock}</div>
                  <button className="a2c" onClick={()=>addAction(id)}>
                    {!inCart?(<><div>Add To cart</div><AddShoppingCart /></>):<><div>Added To Cart</div><RiLuggageCartFill size={25}/></>}
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