import React from 'react';
import '../style/AdminProduct.css'
import {db} from '../../fb/firebase'
import firebase from 'firebase'

const AdminProduct = ({id, title, imageUrl, price, rating, stock}) => {

    console.log(title);
    
    const removeItem = (e) => {
        e.preventDefault();
        db.collection("products")
        .doc(id)
            .delete();

            console.log("New product deleted!");
    }


    return (
        <div className="adminProduct">
        <div className="adminProduct__info">
            <p className="adminProduct__title">{title}</p>
            <p className="adminProduct__price">
                <small>G</small>
                <strong>{price}</strong>
            </p>
            { stock === 0 ? (
                <p className="adminProduct__stock">
                <strong className="adminProduct__outofstock">Out of stock</strong>
                </p>
            ) : (
                <p className="adminProduct__stock">
                <strong>{stock}</strong>
                <small> in stock</small>
            </p>
            )} 
                <div className="adminProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_) => (
                        <p><img src="https://img.icons8.com/ios-glyphs/30/000000/mario-8-bit.png"/></p>
                    ))}
                </div>
        </div>
           <img src={imageUrl} alt=""/>
           {stock === 0 ? (
               <strong className="adminProduct__outofstock">Temporarily Unavailable</strong>
           ):(
                <button onClick={removeItem}>Remove item</button>
           )}
        </div>
    );
};

export default AdminProduct;