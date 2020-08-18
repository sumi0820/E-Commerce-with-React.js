import React, { useState, useEffect } from 'react';
import '../style/Admin.css'
import AdminHome from './AdminHome'
import { Redirect } from 'react-router-dom'
import { useStateValue } from '../../store/StateProvider';
import {db} from '../../fb/firebase'
import firebase from 'firebase'


const Admin = () => {
    const [{ user,email }] = useStateValue();
    const adminEmail = "admin@gmail.com"
    
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [stock, setStock] = useState();
    const [rating, setRating] = useState();
    const [imageUrl, setImageUrl] = useState();
    console.log(title);

    const addProduct = (e) => {
        e.preventDefault();
        db.collection("products")
            .add({
                title,
                price,
                rating,
                stock,
                imageUrl,
                timestamp:firebase.firestore.FieldValue.serverTimestamp() 

            });
            return () => {
                setTitle('');
                console.log("New product added!");
            }
    }


    return (
        <div className="admin">
        {!user && email!==adminEmail ? (
            <Redirect to="/" />
        ):(
                     <div className="left">
                        <div className="admin__container">
                            <h1>Admin Page</h1>
                            <form action="">
                            <h5>Item name</h5>
                                <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                            <h5>Price</h5>
                                <input type="number" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                            <h5>Stock</h5>
                                    <input type="number" value={stock} onChange={(e) => {setStock(e.target.value)}}/>
                            <h5>Rating</h5>
                                <input type="number" value={rating} onChange={(e) => {setRating(e.target.value)}}/>
                            <h5>Image URL</h5>
                                <input type="text" value={imageUrl} onChange={(e) => {setImageUrl(e.target.value)}}/>

                                    <button className="admin__adminButton" onClick={addProduct}>Add new item</button>
                            </form>
                        </div>

                        <div className="admin__right">
                        <div className="admin__containerRight">
                        <AdminHome />
                        </div>
                        </div>
                    </div>
        )}
        </div>
    );
};

export default Admin;

