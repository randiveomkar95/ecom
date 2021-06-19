import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
const Checkout = () => {
    return (
        <div className="container mt-4">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter your mobile" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Link to="/order-review">
                <Button variant="danger">Save and Continue</Button></Link>
            </Form>
        </div>
    )
}

export default Checkout
