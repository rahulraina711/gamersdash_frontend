import {domain} from '../../../utils';
import './products.scss';
import {AddShoppingCart} from '@material-ui/icons';
import {addToCart} from '../../../global_store/cartReducer';
import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RiLuggageCartFill} from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import ProductDetail from './ProductDetails';
import {Modal} from '@material-ui/core';

export default function ProductCard({id , image , name , description , price , countInStock}){

  const [inCart, setInCart] = useState(false)
  const userCart = useSelector(state => state.cart.cart);
  const AXIOS = axios.create({
    baseURL:domain,
    headers:{
      Authorization: localStorage.getItem('auth_token')
    }
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      setOpen(true);
    };

  const handleClose = () => {
      setOpen(false);
    };

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

  const body = (

    <div className="modal-r-r">
        <button className="back-btn" onClick={handleClose} style={{padding:"10px",background:"yellow"}}>Back</button>
        <ProductDetail id={id}  image={image}  name={name}  description={description}  price={price}  countInStock={countInStock} />
    </div>
    )


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
                <div className="prod-name" onClick={handleOpen}>{name.slice(0,45)}...</div>
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
              <Modal
                id="game-modal-id"
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                >
                {body}
            </Modal>
        </div>
    )
}