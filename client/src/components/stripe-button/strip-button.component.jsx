import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton=({price})=> {
    const priceForStripe=price*100;
    const publishableKey='pk_test_51GqUZsEtaypRft3pAJVvVM9vvspTTdXwCwKpOf2omCEThCsRLvoyAV2ErirDyl2NVFOPM9J1N4wf6o2X5kxYouUa008Z8lR8Y5';
      const onToken=token=> {
          axios({
              url:'http://127.0.0.1:5000/payment',
              method:'post',
              data: {
                  amount:priceForStripe,
                  id:token.id,
              }
          }).then(response=> {
              alert('Payment successful')
          }).catch(error=>{
              console.log('Payment error: ', error);
              alert(
                  'There was an issue with your payment.Please make sure you use correct credit card details'
              );
          });
          

       };
    return(
        <StripeCheckout
       label='Pay Now'
       name='CRWN CLOTHING Ltd.'
       billingAddress
       shippingAddress
       image=''
       description={`your total is $${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now '
       token={onToken}
       stripeKey={publishableKey}
        />
    );

};
export default StripeCheckoutButton;