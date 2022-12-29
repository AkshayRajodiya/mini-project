import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from './CheckoutItem';
import { prices, displayNames } from './utils';

const Checkout = () => {
  const store = useSelector(store => store);
  const checkoutItems = Object.keys(store).filter(i => store[i].count > 0);

  const getTotal = () => {
    let total = 0;
    console.log(checkoutItems);
    checkoutItems.forEach(item => {
      total += store[item].count * prices[displayNames[item]];
    })
    return total;
  }

  return (
    <div>
      <div>
        {checkoutItems.map(key => <CheckoutItem displayName={store[key].displayName} image={store[key].image} count={store[key].count} />)}
      </div>
      <div style={{ textAlign: "center" }}>
        <h3>Total: {getTotal()}  &#x20B9;</h3></div>
    </div>
  )
}

export default Checkout;