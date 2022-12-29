import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap'
import ChapatiImage from '../assets/chapati.jpeg';
import CurdImage from '../assets/curd.jpeg';
import DalImage from '../assets/dal.jpeg';
import PaneerDishImage from '../assets/paneer-dish.jpeg';
import PickelImage from '../assets/pickel.jpeg';
import SweetImage from '../assets/sweet.jpeg';

import ThaliItem from './ThaliItem'
import './style.css';
import { displayNames, prices } from './utils';

const imageMap = {
  'chapati': ChapatiImage,
  'curd': CurdImage,
  'dal': DalImage,
  'paneerDish': PaneerDishImage,
  'pickel': PickelImage,
  'sweet': SweetImage
}

const Thali = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch()
  const formGroupClassName = "d-flex align-items-center mb-3 justify-content-center";

  useEffect(() => {
    console.log(store)
  }, [store])

  const decrementCount = (itemType) => {
    const count = store[itemType].count;
    dispatch({ type: itemType, payload: { count: count - 1, image: imageMap[itemType], displayName: displayNames[itemType], total: (count - 1) * prices[displayNames[itemType]] } })
  }

  const incrementCount = (itemType) => {
    const count = store[itemType].count;
    dispatch({ type: itemType, payload: { count: count + 1, image: imageMap[itemType], displayName: displayNames[itemType], total: (count + 1) * prices[displayNames[itemType]] } })
  }

  return (
    <Form className="">
      <Row className="text-center m-0 p-0">
        <Col md={4} className="text-center mx-auto">
          <Form.Group className={formGroupClassName}>
            <ThaliItem
              image={ChapatiImage}
              count={store.chapati.count}
              name={displayNames['chapati']}
              decrementCount={() => decrementCount('chapati')}
              incrementCount={() => incrementCount('chapati')}
            />
            <Form.Text className="text-danger">

            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className={formGroupClassName}>
            <ThaliItem
              image={CurdImage}
              count={store.curd.count}
              name={displayNames['curd']}
              decrementCount={() => decrementCount('curd')}
              incrementCount={() => incrementCount('curd')}
            />
            <Form.Text className="text-danger">

            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className={formGroupClassName}>
            <ThaliItem
              image={DalImage}
              count={store.dal.count}
              name={displayNames['dal']}
              decrementCount={() => decrementCount('dal')}
              incrementCount={() => incrementCount('dal')}
            />
            <Form.Text className="text-danger">

            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className={formGroupClassName}>
            <ThaliItem
              image={PaneerDishImage}
              count={store.paneerDish.count}
              name={displayNames['paneerDish']}
              decrementCount={() => decrementCount('paneerDish')}
              incrementCount={() => incrementCount('paneerDish')}
            />
            <Form.Text className="text-danger">

            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className={formGroupClassName}>
            <ThaliItem
              image={PickelImage}
              count={store.pickel.count}
              name={displayNames['pickel']}
              decrementCount={() => decrementCount('pickel')}
              incrementCount={() => incrementCount('pickel')}
            />
            <Form.Text className="text-danger">

            </Form.Text>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className={formGroupClassName}>
            <ThaliItem
              image={SweetImage}
              count={store.sweet.count}
              name={displayNames['sweet']}
              decrementCount={() => decrementCount('sweet')}
              incrementCount={() => incrementCount('sweet')}
            />
            <Form.Text className="text-danger">

            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  )
}

export default Thali