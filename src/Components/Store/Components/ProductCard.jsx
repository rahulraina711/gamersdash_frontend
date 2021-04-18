import {domain} from '../../../utils';
import './product.scss';
import {AddShoppingCart} from '@material-ui/icons';
import {addToCart} from '../../../global_store/cartReducer';
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RiLuggageCartFill} from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductCard({id , image , name , description , price , countInStock}){

  const [inCart, setInCart] = useState(false)
  const userCart = useSelector(state => state.cart.cart);

  const dispatch = useDispatch();
  function addAction(id){
    if(!userCart.includes(id)){
      dispatch(addToCart({id:id}));
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