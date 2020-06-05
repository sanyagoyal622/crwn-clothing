import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=> {
    const priceForStripe=price*100;
    const publishableKey='pk_test_51GqUZsEtaypRft3pAJVvVM9vvspTTdXwCwKpOf2omCEThCsRLvoyAV2ErirDyl2NVFOPM9J1N4wf6o2X5kxYouUa008Z8lR8Y5';
      const onToken=token=> {
           console.log(token);
           alert('Payment Successful');

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