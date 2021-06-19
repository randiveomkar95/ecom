import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
const Cart = () => {
    const image={
        backgroundImage:"url(" +
        "../../images/products/p1.jpg"+")",
        width:'300px',
        height:'200px',
        objectFit:'cover',
        zoom:'50%',
        };
    return (
        <div className="container mt-4">
        <h1 className="d-flex justify-content-center">My Cart</h1>
            <div className="col-md-12 mt-4">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Sr. No</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Quantity</th>
                    <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td><img style={image} /></td>
                    <td>Nike Shoes</td>
                    <td>₹ 500</td>
                    <td>5</td>
                    <td>₹ 2500</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td><img style={image} /></td>
                    <td>Nike Shoes</td>
                    <td>₹ 500</td>
                    <td>5</td>
                    <td>₹ 2500</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td><img style={image} /></td>
                    <td>Nike Shoes</td>
                    <td>₹ 500</td>
                    <td>5</td>
                    <td>₹ 2500</td>
                    </tr>

                </tbody>
                </Table>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                    <Link to="/product">
                    <Button variant="danger">Continue Shopping</Button></Link>
                    </div>
                    <div className="col-md-6">
                    <Link to="/checkout">
                    <Button variant="danger" style={{ float: 'right'}}>Check Out</Button></Link>
                    </div>
                </div>
        </div>
    )
}

export default Cart
