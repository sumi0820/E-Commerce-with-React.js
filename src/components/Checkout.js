import React from 'react';
import './style/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

import { useStateValue } from '../store/StateProvider';

const Checkout = () => {
    const [{ cart }, dispatch] = useStateValue();
console.log(cart);
    return (
        <div className='checkout'>
            {cart?.length === 0 ? (
                <div>
                    <h2>Your cart is empty...</h2>
                </div>
            ):(
                <div>
                    <h2>Cart Summary</h2>
                    <div className="checkout__content">
                    <div className="checkout__checkoutProduct">
                        {cart.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            price={item.price}
                        />
                        ))}
                        {cart.length > 0 && (
                            <div className="checkout__right">
                                <Subtotal />
                            </div>
                        )}
                     </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Checkout;