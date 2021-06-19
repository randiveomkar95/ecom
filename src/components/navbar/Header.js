import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
         <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand Link to="/">React-Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/login-register">Account</Link>
                </Nav>

            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
