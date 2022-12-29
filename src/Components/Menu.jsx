import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import ChapatiImage from '../assets/chapati.jpeg';
import CurdImage from '../assets/curd.jpeg';
import DalImage from '../assets/dal.jpeg';
import PaneerDishImage from '../assets/paneer-dish.jpeg';
import PickelImage from '../assets/pickel.jpeg';
import SweetImage from '../assets/sweet.jpeg';

import MenuItem from './MenuItem'
import './style.css';

const Menu = () => {
  return (
    <Row className="text-center flex-column m-0 p-0">
      <Col className="text-center mx-auto">
        <MenuItem
          image={ChapatiImage}
          name="Chapati"
        />
      </Col>
      <Col>
        <MenuItem
          image={CurdImage}
          name="Curd"
        />
      </Col>
      <Col>
        <MenuItem
          image={DalImage}
          name="Dal"
        />
      </Col>
      <Col>
        <MenuItem
          image={PaneerDishImage}
          name="Paneer Dish"
        />
      </Col>
      <Col>
        <MenuItem
          image={PickelImage}
          name="Pickel"
        />
      </Col>
      <Col>
        <MenuItem
          image={SweetImage}
          name="Sweet"
        />
      </Col>
    </Row>
  )
}

export default Menu