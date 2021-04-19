import React, { useState } from 'react';
import {domain} from '../../../utils';
import {AiTwotoneDelete} from 'react-icons/ai';
import {MdAdd, MdRemove} from 'react-icons/md';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeFromCart ,incTotal, decTotal} from '../../../global_store/cartReducer'

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
        setQuantity(quantity+1);
        patchOrderQuantity(order._id);
        dispatch(incTotal({price:order.productId.price}))
    }

    function handleQuanSub(){
        setQuantity(quantity-1);
        patchOrderQuantityRem(order._id);
        dispatch(decTotal({price:order.productId.price}))
    }

    async function patchOrderQuantity(orderId){
        try {
            const patchOrderRes = AXIOS.patch(domain+"/orders/"+orderId, {quantity:quantity+1});            
        } catch (error) {
            console.table(error);
        }
        
    }
    async function patchOrderQuantityRem(orderId){
        try {
            const patchOrderRes = AXIOS.patch(domain+"/orders/"+orderId, {quantity:quantity-1});            
        } catch (error) {
            console.table(error);
        }
        
    }

    async function handleDelete(){
        
        try{
            const delOrderRes = AXIOS.delete(domain+"/orders/"+order._id);
            dispatch(removeFromCart({id: order.productId._id}));
            dispatch(decTotal({price:quantity*order.productId.price}));
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
                <div className="q-rem"><MdRemove onClick={()=>quantity>1&&handleQuanSub()}/></div>
                <div className="q">{quantity}</div>
                <div className="q-add"><MdAdd onClick={()=>quantity<10&&handleQuanAdd()}/></div>
            </div>
            <div className="o-price">{"₹ "+order.productId.price}</div>
            <div className="o-delete"><AiTwotoneDelete size={25} onClick={handleDelete}/></div>
        </div>)
    )
}