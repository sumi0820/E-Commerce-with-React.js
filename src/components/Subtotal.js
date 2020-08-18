import React from 'react';
import './style/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import StripeCheckout from 'react-stripe-checkout'
import PAYMENT_SERVER_URL from './constants/server';

import axios from 'axios'
import {  Link  } from 'react-router-dom'
import { useStateValue } from '../store/StateProvider';
import { getCartTotal } from '../store/reducer'
import Checkout from './Checkout';


const Subtotal = () => {
    
    const [{ cart } ] = useStateValue();

    const successPayment = data => {
        alert('Payment Successful');
      };
      
      const errorPayment = data => {
        alert('Payment Error');
      };
      
      const handleToken = (amount, description) => token =>
        axios.post(PAYMENT_SERVER_URL,
          {
            description,
            source: token.id,
            currency: "USD",
            amount: (amount)
          })
          .then(successPayment)
          .catch(errorPayment);


    return (
        <div className="subtotal">
        <CurrencyFormat 
            renderText={(value) => (
                <>
                <p className="subtotal__total">
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                </p>
                </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"G"}
        />
        <div className="subtotal__button">

              <StripeCheckout 
                name={'Weapon Shop Torneko'}
                description={'Weapon/Portion'}
                amount={Checkout.value}
                token={handleToken}
                currency={'USD'}
                stripeKey={'pk_test_51HGOoRJ97z5W4ogS2hpNLUsiBxf8o2a2yWl7OMFKfNNGvrOn9qsh3OORMVmZsdOit6UtAm5WIo6MxY4tl6aovu9W00qfZ62WPB'}
                zipCode
                email
                allowRememberMe
               >
                <button>
                    Proceed to payment
                </button>
                </StripeCheckout>

        </div>
        </div>
    );
};

export default Subtotal;

