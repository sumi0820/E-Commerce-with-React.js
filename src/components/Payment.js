import React from 'react';
import './style/Payment.css'

const Payment = () => {
    return (
        <div className="payment">
                <h1>Payment</h1>
                <form action="">
                    <h5>Item name</h5>
                        <input type="text" value=""/>
                    <h5>Price</h5>
                        <input type="number" value=""/>
                    <h5>Stock</h5>
                        <input type="number" value=""/>
                    <h5>Rating</h5>
                        <input type="number" value=""/>
                    <h5>Image URL</h5>
                        <input type="text" value=""/>
                    <button className="admin__adminButton" >Add new item</button>
                </form>
        </div>
    );
};

export default Payment;