import React from 'react';
import './style/Product.css'
import { useStateValue } from '../store/StateProvider';


const Product = ({id, title, imageUrl, price, rating, stock}) => {
    
    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type:'ADD_TO_CART',
            item: {
                id:id,
                title:title,
                imageUrl:imageUrl,
                price:price,
                stock:stock,
                rating:rating
            },
        })

    }
    const rate = parseInt(rating);
    
    return (
        <div className="product">
        <div className="product__info">
            <p className="product__title">{title}</p>
            <p className="product__price">
                <small>G</small>
                <strong>{price}</strong>
            </p>
            { stock === 0 ? (
                <p className="product__stock">
                <strong className="product__outofstock">Out of stock</strong>
                </p>
            ) : (
                <p className="product__stock">
                <strong>{stock}</strong>
                <small> in stock</small>
            </p>
            )} 
                <div className="product__rating">
                    {Array(rate)
                    .fill()
                    .map((_) => (
                        <p><img src="https://img.icons8.com/ios-glyphs/30/000000/mario-8-bit.png"/></p>
                    ))}
                </div>
        </div>
           <img src={imageUrl} alt=""/>
           {stock === 0 ? (
               <strong className="product__outofstock">Temporarily Unavailable</strong>
           ):(
                <button onClick={addToCart}>Add to cart</button>
           )}
        </div>
    );
};

export default Product;

