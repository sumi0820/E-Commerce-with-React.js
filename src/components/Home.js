import React, { useState, useEffect } from 'react';
import './style/Home.css'
import { useStateValue } from '../store/StateProvider';
import { db } from '../fb/firebase';
import Product from './Product'

const Home = () => {

    const [{ user}] = useStateValue();
    const [products, setProducts] = useState([]);

      useEffect(() => {
        db.collection('products').orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          setProducts(snapshot.docs.map(doc => ({
            id: doc.id,
            product: doc.data()
          })));
        })
      }, []);

    return (
        <div className="home">
        <div className="home__container">
          <div className="home__row">
              {products.map(({id, product})=>(
                  <Product
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

export default Home;

