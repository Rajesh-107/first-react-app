import React, { useEffect } from 'react';
import  { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([])
   const handleAddProduct = (product) =>{
       console.log('Product added', product);
       const newCart = [...cart, product];
       setCart(newCart);
   }
   useEffect(() => {
        
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, [])
    
    return (
        <div className =" shop-container">
           <div className="product-container">
            {
                 products.slice(0,10).map(product => <Product
                 handleAddProduct = {handleAddProduct}
                     product = {product}>  </Product>)
            }
           </div>
           <div className="cart-container">
               <Cart cart ={cart}></Cart>

           </div>
        </div>

    );
 
};


export default Shop;