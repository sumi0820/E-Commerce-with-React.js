import React from 'react';
import './style/CheckoutProduct.css'
import { useStateValue } from '../store/StateProvider';


const CheckoutProduct = ({id, title, imageUrl, price}) => {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }
 
    return (
        <div className="checkoutProduct">
        <div className="checkoutProduct__row">
            <img className="checkoutProduct__image" src={imageUrl} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>G</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromCart}>Remove</button>
            </div>
        </div>
        </div>
    );
};

export default CheckoutProduct;