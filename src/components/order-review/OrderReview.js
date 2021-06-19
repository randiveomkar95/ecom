import React from 'react'
import { ListGroup, Table, Button } from 'react-bootstrap';

const OrderReview = () => {
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
            <div class="row">
                <div class="col-md-6">
                <ListGroup>
                <ListGroup.Item style={{ backgroundColor: '#f7f7f7' }}>
                Order Overview
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="row">
                        <div className="col-md-4">
                           <img style={image} />
                        </div>
                        <div className="col-md-6">
                            <span> Product Name : <b>Nike Shoes</b> </span><br />
                            <span> Product Price :<b> ₹ 500 </b></span><br />
                            <span>  Quantity :<b> 5</b> </span><br />
                            <span>  Total :<b> ₹ 2500</b> </span><br />
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="row">
                        <div className="col-md-4">
                           <img style={image} />
                        </div>
                        <div className="col-md-6">
                            <span> Product Name : <b>Nike Shoes</b> </span><br />
                            <span> Product Price :<b> ₹ 500 </b></span><br />
                            <span>  Quantity :<b> 5</b> </span><br />
                            <span>  Total :<b> ₹ 2500</b> </span><br />
                        </div>
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-6">
                        <Table striped hover responsive>
                        <thead>
                        <tr>
                            <td>Total :</td>
                            <td><b> ₹ 5000 .00</b></td>
                        </tr>
                        <tr>
                            <td>Shipping Charges</td>
                            <th> ₹ 90.00</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Final Amount</td>
                            <th> ₹ 5090.00</th>
                        </tr>
                        </tbody>
                        </Table>
                        </div>
                
                </div>
                </ListGroup.Item>
                </ListGroup>
                
                </div>




                <div class="col-md-6">
                <ListGroup>
                <ListGroup.Item style={{ backgroundColor: '#f7f7f7' }}>
                Delivery Address
                </ListGroup.Item>
                <ListGroup.Item>
                <div className="row">
                      
                        <div className="col-md-12">
                        <Table striped hover responsive>
                        <thead>
                        <tr>
                            <td>Name :</td>
                            <td><b>Omkar Randive</b></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <th>omkar@admin.com</th>
                        </tr>
                        <tr>
                            <td>Mobile</td>
                            <th>+91 9146372476</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Address</td>
                            <th>AP- Pashan, Dist-Pune, Taluka-Haveli, Maharshtra 411021</th>
                        </tr>
                        </tbody>
                        </Table>
                        </div>
                
                </div>
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#f7f7f7' }}>
                Payment Method
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="row">
                        <div className="col-md-12">
                           <input type="radio" name="1" id="payment" /> PayPal <br />
                           <input type="radio" name="1" id="payment" /> RazorPay <br />
                           <input type="radio" name="1" id="payment" /> Stripe <br />
                        </div>
                        
                    </div>
                </ListGroup.Item>
                <Button variant = "danger">Place Order</Button>

                </ListGroup>
                
                </div>





            </div>
        </div>
    )
}

export default OrderReview