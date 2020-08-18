import React, { useState, useEffect } from 'react';
import '../style/AdminHome.css'
import { db } from '../../fb/firebase';
import AdminProduct from './AdminProduct'



const AdminHome = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        db.collection('products')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
        setProducts(snapshot.docs.map(doc => ({
            id: doc.id,
            product: doc.data()
        })));
        })
    }, []);

    return (
        <div className="adminHome">
            <div className="adminHome__container">
                <div className="adminHome__row">
                    {products.map(({id, product})=>(
                        <AdminProduct
                            key={id}
                            id={id}
                            title={product.title}
                            price={product.price}
                            stock={product.stock}
                            rating={product.rating}
                            imageUrl={product.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminHome;