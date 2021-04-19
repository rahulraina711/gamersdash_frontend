import React, { useEffect, useState } from 'react';
import './cart.scss';
import axios from 'axios';
import { domain } from '../../../utils';
import Order from './Order';


export default function Cart (){
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState("");
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
        setTotal(orderRes.data.cartTotal)
    }

    function renderOrders(){
        let sortedOrders = [...orders];
        return sortedOrders.map(order=>{
            return <Order key={order._id} order={order} />
        })
    }

    return (
        <div className="fb-h">
            <div className="fb-c">
                <div className="cart">
                    {renderOrders()}
                </div>
                <div className="checkout-area">
                    <button className="checkout">
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