import React from 'react';
import "./product.css";

function product({title, image, price, rating}) {
    return (
        <div
        className="product">
            <div>
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_,i)=>(<span>&#11088;</span>))}
                    
                
                </div>
            
                <img
                className="product_image"
                src={image}
                alt='picture'
                />
            
            </div>
            <button className="product_button">Add to Basket</button>


            

            
            
        </div>
    )
}

export default product
