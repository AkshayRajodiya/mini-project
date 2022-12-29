import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ConditionalLink from '../ConditioalLink'

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const store = useSelector(store => store);
  const checkoutItems = Object.keys(store).filter(i => store[i].count > 0);
/*
  useEffect(() => {

    console.log(location.pathname)
    if (location.pathname === 'checkout') {
      console.log(checkoutItems)
      if (checkoutItems.length < 2) {
        navigate('/')
      }
    }
  }, [location.pathname, store])*/

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link className="nav-link" to="home">Global Thali</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="home">Home</Link>
            <Link className="nav-link" to="menu">Menu</Link>

            <ConditionalLink className="nav-link" to="checkout" condition={checkoutItems.length > 1}>
              Checkout
</ConditionalLink>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <div>
        <h1 style={{ textAlign: "center", fontFamily: "cursive" }}> "Welcome!! Are you ready to make Your Own Healthy Thali?"</h1>
        <p style={{textAlign:"center", color:"red"}}>*minimum two items are required to checkout</p>
      </div>

    </>
  );
}

export default Header;