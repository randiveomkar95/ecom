import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'
import { Tab, Row, Col, Nav, Form, Button, Table } from 'react-bootstrap';

const Profile = () => {
    const image={
        backgroundImage:"url(" +
        "../../images/products/p1.jpg"+")",
        width:'300px',
        height:'200px',
        objectFit:'cover',
        zoom:'50%',
        };
    const userIcon={
        backgroundImage:"url(" +
        "../../images/user/user-icon.png"+")",
        width:'100px',
        height:'100px',
        objectFit:'cover',
        backgroundRepeat:'no-repeat',
        };
    return (
        <div className="container mt-4">
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                <div className="box-shadow">
                    <center><img style={userIcon} /></center>
                    <div className="mt-4">
                    <Nav.Item>
                    <Nav.Link eventKey="1"> <span className="user-sidebar">Profile</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="2"><span className="user-sidebar">Change Password</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="3"><span className="user-sidebar">Wishlist</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="4"><span className="user-sidebar">My Orders</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="5"><span className="user-sidebar">Sign Out</span></Nav.Link>
                    </Nav.Item>
                    </div>
                </div>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="1">
                    <div className="box-shadow">
                    <h3>Update Profile</h3>
                    <Form className="mt-4">
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


                        <Link to="#">
                        <Button variant="danger">Update Information</Button></Link>

                    </Form>
                    </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="2">
                    <div className="box-shadow">
                    <h3>Change Password</h3>
                    <Form className="mt-4">
                    
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>


                        <Link to="#">
                        <Button variant="danger">Change Password</Button></Link>

                    </Form>
                    </div>                    
                    </Tab.Pane>

                    <Tab.Pane eventKey="3">
                    <div className="box-shadow">
                    <h3>My Wishlist</h3>
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
                    </div>                    
                    </Tab.Pane>

                    <Tab.Pane eventKey="4">
                    <div className="box-shadow">
                    <h3>My Orders</h3>
                    <div className="col-md-12 mt-4">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            <th>Order<br /> ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Ordered On</th>
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
                            <td>19-June-2021</td>
                            </tr>
             

                        </tbody>
                        </Table>
                        </div>
                    </div>                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="5">
                    <div className="box-shadow ">
                    <h3>Sign Out</h3>
                    <div className="mt-4">
                        <Button variant="danger">You will be Sign Out</Button>
                    </div>

                   
                    </div>
                    </Tab.Pane>

                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
        </div>
    )
}

export default Profile
