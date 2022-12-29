import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { prices } from './utils'

const ThaliItem = ({ image, name, count, decrementCount, incrementCount, setCount }) => {

  return (
    <div className="thali-item-container align-items-center shadow m-2">
      <Image className="thali-item-image mr-2" src={image} />
      <div className="d-flex flex-column align-items-center mx-2">
        <span className="text-center my-2 font-weight-bold">{name}</span>
        <span className="mb-2">₹{prices[name]}</span>
        <div className="d-flex align-items-center text-center mx-auto">
          <Button onClick={() => decrementCount()} className="border" variant="light">-</Button>
          <Form.Control className="d-flex count-form-input" type="number" placeholder="0" value={count} onChange={setCount} />
          <Button onClick={() => incrementCount()} className="border" variant="light">+</Button>
        </div>
      </div>
    </div>
  )
};

export default ThaliItem;