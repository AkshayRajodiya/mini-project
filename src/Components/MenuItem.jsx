import React from 'react';
import { Image } from 'react-bootstrap';

const MenuItem = ({ image, name, }) => {

  return (
    <div className="menu-item-container align-items-center shadow m-2 w-50 mx-auto">
      <Image className="menu-item-image mr-2" src={image} />
      <div className="d-flex flex-column mx-2">
      <span className="text-center my-2 font-weight-bold">{name}</span>
      <span className="small">Fresh rice and everything nice. Comes with ranch dressing, grilled fajita veggies, pico </span>
      </div>
    </div>
  )
};

export default MenuItem;