import React, { useState } from 'react';
import {domain} from '../../../utils';
import {AiTwotoneDelete} from 'react-icons/ai';
import {MdAdd, MdRemove} from 'react-icons/md';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../global_store/cartReducer'

export default function Order({order}){

    const [deleted, setDeleted] = useState(false);
    const dispatch = useDispatch();

    const AXIOS = axios.create({
        baseURL:domain,
        headers:{
            Authorization: localStorage.getItem('auth_token')
        }
    })
    const [quantity, setQuantity] = useState(order.quantity);

    function handleQuanAdd(){
        patchOrderQuantity(order._id);
        quantity<10&&setQuantity(quantity+1);
    }
    function handleQuanSub(){
        patchOrderQuantity(order._id);
        quantity>1&&setQuantity(quantity-1);
    }

    async function patchOrderQuantity(orderId){
        try {
            const patchOrderRes = AXIOS.patch(domain+"/orders/"+orderId, {quantity});            
        } catch (error) {
            console.table(error);
        }
        
    }

    async function handleDelete(){
        
        try{
            const delOrderRes = AXIOS.delete(domain+"/orders/"+order._id);
            dispatch(removeFromCart({id: order.productId._id}));
            setDeleted(true);
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        !deleted&&(<div className="order-comp">
            <img className="o-img" src={domain+"/"+order.productId.productImage} alt="order_image"/>
            <div className="o-name">{order.productId.name}</div>
            <div className="o-quan">
                <div className="q-rem"><MdRemove onClick={handleQuanSub}/></div>
                <div className="q">{quantity}</div>
                <div className="q-add"><MdAdd onClick={handleQuanAdd}/></div>
            </div>
            <div className="o-price">{"₹ "+order.productId.price*quantity}</div>
            <div className="o-delete"><AiTwotoneDelete size={25} onClick={handleDelete}/></div>
        </div>)
    )
}