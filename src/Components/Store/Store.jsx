import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {domain} from '../../utils';
import './store.scss';
import ProductCard from './Components/ProductCard';
import {GiShoppingCart} from 'react-icons/gi'
import {BiSearchAlt} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../global_store/cartReducer';
import {CircularProgress} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

export default function Store(){

    const userCart = useSelector(state=>state.cart.cart);
    const dispatch = useDispatch();
    const history = useHistory();
    const [products, setProducts] = useState([]);
    // const [searchResult, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const AXIOS = axios.create({
        baseURL: domain,
        headers: {
            Authorization: localStorage.getItem('auth_token')
        }
    });

    useEffect(()=>{
        fetchOrders();
        fetchProducts(domain+"/products")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    function handleSearch (e){
        setLoading(true)
        setSearchText(e.target.value);
        !searchText ? fetchProducts(domain+"/products") : setTimeout(()=>{
            fetchProducts(domain+"/search?key="+searchText)
        },500);
    }

    async function fetchOrders(){
        const ordersRes = await AXIOS.get("/orders");
        for(let x of ordersRes.data.doc){
            !userCart.includes(x.productId._id)?
            dispatch(addToCart({id:x.productId._id})):
            console.log("in cart");
        }
    }
    async function fetchProducts(url){
        setProducts([]);
        const prodRes = await axios.get(url);
        setProducts(prodRes.data);
        setLoading(false);
    }

    function toCart(){
        history.push("/cart");
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
                   <div className="search">
                       <div className="search-icon"><BiSearchAlt size={25} /></div>                        
                       <input id="search-bar" placeholder="search" value={searchText} onChange={(e)=>handleSearch(e)}/>
                   </div>
                   <div className="cart-stats">
                        <GiShoppingCart size={50} onClick={toCart}/>
                        <div className="items-in-cart">{userCart.length || "0"}</div>
                   </div>
                </div> 
                {loading&&<CircularProgress color="secondary"/>}      
                <div className="store">
                    
                    <div className="products-page">
                        
                        {mapProducts()}
                    </div>
                </div>
            </div>
        </div>)
}