import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {domain} from '../../utils';
import './store.scss';
import ProductCard from './Components/ProductCard';
import {GiShoppingCart} from 'react-icons/gi'
import { useSelector } from 'react-redux';

export default function Store(){

    const userCart = useSelector(state=>state.cart);
    const [products, setProducts] = useState([]);
    const AXIOS = axios.create({
        baseURL: domain,
        headers: {
            Authorization: localStorage.getItem('auth_token')
        }
    });

    useEffect(()=>{
        fetchProducts(domain+"/products")
    },[]);

    async function fetchProducts(url){
        const prodRes = await axios.get(url);
        setProducts(prodRes.data);
    }

    function mapProducts(){
        let sortedProducts = [...products];
        sortedProducts = sortedProducts.sort((a, b)=>{
            return new Date(b.createdAt) -new Date(a.createdAt);
        })
        return sortedProducts.map(product=>{
            return <ProductCard key={product._id} id={product._id} name={product.name} image={product.productImage} description={product.description} price={product.price} countInStock={product.countInStock} />
        })
    }

    return(
        <div className="main-landing-page">
            <div className="store-main">
                <div className="store-nav">
                   <div className="search-bar">

                   </div>
                   <div className="cart-stats">
                        <GiShoppingCart size={50}/>
                        <div className="items-in-cart">{userCart.length || "0"}</div>
                   </div>
                </div>       
                <div className="store">
                    
                    <div className="products-page">
                        {mapProducts()}
                    </div>
                </div>
            </div>
        </div>)
}