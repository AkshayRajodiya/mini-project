import React from 'react';
import { Image } from 'react-bootstrap';
import {prices} from './utils'

const CheckoutItem = ({ image, displayName, count }) => {
  return (
    <div className="checkout-item-container align-items-center shadow m-2 w-50 mx-auto">
      <Image className="checkout-item-image mr-2" src={image} />
      <div className="d-flex flex-column mx-2">
      <span className="text-center my-2 font-weight-bold">{displayName} * {count} = {prices[displayName] * count}</span>
      </div>
    </div>
  )
}

export default CheckoutItem;