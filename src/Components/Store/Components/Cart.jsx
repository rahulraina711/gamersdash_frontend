import React, { useEffect, useState } from 'react';
import './cart.scss';
import axios from 'axios';
import { domain } from '../../../utils';
import Order from './Order';
import {setCartTotal} from '../../../global_store/cartReducer'
import { useDispatch, useSelector } from 'react-redux';


export default function Cart (){
    const [orders, setOrders] = useState([]);
    const total = useSelector(state=> state.cart.total)
    const dispatch = useDispatch();
    const AXIOS = axios.create({
        baseURL:domain,
        headers:{
            Authorization:localStorage.getItem('auth_token')
        }
    });

    useEffect(()=>{
        fetchOrders();
    },[]);

    async function fetchOrders(){
        const orderRes = await AXIOS.get("/orders");
        // console.log(orderRes.data.cartTotal)
        setOrders(orderRes.data.doc)
        dispatch(setCartTotal({total:orderRes.data.cartTotal}))
        
    }

    function renderOrders(){
        let sortedOrders = [...orders];
        return sortedOrders.map(order=>{
            return <Order key={order._id} order={order} />
        })
    }

    async function checkout(){
        const xyzRes = await AXIOS.get("/orders");
        const amount = xyzRes.data.cartTotal;
        c2Im(amount);

    }
    async function c2Im(amount){
        const makePaymentRes = await AXIOS.post(domain+"/payment",{amount});
        
        window.open(makePaymentRes.data.url);
    }
 
    return (
        <div className="fb-h">
            <div className="fb-c">

                {orders.length?(<div className="cart">
                    {renderOrders()}
                </div>):<div className="cart">Seems quite empty here....</div>}
                <div className="checkout-area">
                    <button className="checkout" onClick={checkout}>
                        Proceed to checkout
                    </button>
                    <div className="t-amount">
                        Total billable amount : <div className="amount">₹ {total}</div>
                    </div>  
                </div>
            </div>
        </div>
    )
}