import React from 'react';
import { Link } from 'react-router-dom';
import { Form,ListGroup, Button } from 'react-bootstrap';

const LoginRegister = () => {
    return (
<div className="container mt-4">
            <div class="row">
                <div class="col-md-6">
                <ListGroup>
                <ListGroup.Item style={{ backgroundColor: '#f7f7f7' }}>
                Sign In
                </ListGroup.Item>
                <ListGroup.Item>
                <Form>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>

                    <Link to="/profile">
                    <Button variant="danger">Sign In</Button></Link>

                </Form>
                </ListGroup.Item>

                </ListGroup>
                
                </div>




                <div class="col-md-6">
                <ListGroup>
                <ListGroup.Item style={{ backgroundColor: '#f7f7f7' }}>
                Sign Up
                </ListGroup.Item>
                <ListGroup.Item>
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

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>


                <Link to="/profile">
                <Button variant="danger">Sign Up</Button></Link>

            </Form>
                </ListGroup.Item>


                </ListGroup>
                
                </div>
            </div>
        </div>
    )
}

export default LoginRegister
