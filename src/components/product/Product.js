import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Modal } from 'react-bootstrap';

const Product = () => {
    const [modalShow, setModalShow] = React.useState(false);

   const [state, setState] = useState({ count: 1})
   const count = state.count

   function decrementCount(){
      setState(prevState => {
         return { ...prevState, count: prevState.count - 1 }
      })
   }

   function incrementCount(){
      setState(prevState => {
         return { ...prevState, count: prevState.count + 1 }
         console.log('render');
      })
   }

   function ProductDetailModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Product Detail
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
         <div className="col-md-12">
            <div className="row">
               <div className="col-md-5">
               <img alt="product-image" src="../../images/products/p1.jpg" />
               </div>
               <div className="col-md-6">
               <span>Product Name:    <b>Nike Shoes</b></span><br />
               <span>Product Price:   <b>₹ 500</b></span><br />
               <span>Product Description: </span><br />
               <p className="text-justify">
               Some quick example text to build on the card title and make up the bulk of the card's content.
               </p>
               <span>Select Quantity</span><br /><br />
               <button className="btn btn-danger" onClick={decrementCount}>-</button>
               <span> &nbsp; {count} &nbsp; </span>
               <button className="btn btn-danger" onClick= {incrementCount}>+</button><br /><br />
               <Link to="/cart">
               <Button className="btn btn-danger">Add to Cart</Button></Link>
               </div>
            </div>
         </div>







          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    return (
        <div>
             <div className="container">

<h1 className="mt-4 d-flex justify-content-center">Products</h1>
   <div className="row mt-4">
   <div className="col-md-3 d-flex justify-content-center mt-4">
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="../../images/products/p1.jpg" />
      <Card.Body>
         <Card.Title>Nike Shoes</Card.Title>
         <Card.Text className="text-justify">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
         </Card.Text>
         <Button variant="danger"  onClick={() => setModalShow(true)}>View Product</Button>
      </Card.Body>
   </Card>
   </div>

   <div className="col-md-3 d-flex justify-content-center mt-4">
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="../../images/products/p1.jpg" />
      <Card.Body>
         <Card.Title>Nike Shoes</Card.Title>
         <Card.Text className="text-justify">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
         </Card.Text>
         <Button variant="danger"  onClick={() => setModalShow(true)}>View Product</Button>
      </Card.Body>
   </Card>
   </div>

   <div className="col-md-3 d-flex justify-content-center mt-4">
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="../../images/products/p1.jpg" />
      <Card.Body>
         <Card.Title>Nike Shoes</Card.Title>
         <Card.Text className="text-justify">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
         </Card.Text>
         <Button variant="danger"  onClick={() => setModalShow(true)}>View Product</Button>
      </Card.Body>
   </Card>
   </div>

   <div className="col-md-3 d-flex justify-content-center mt-4">
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="../../images/products/p1.jpg" />
      <Card.Body>
         <Card.Title>Nike Shoes</Card.Title>
         <Card.Text className="text-justify">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
         </Card.Text>
         <Button variant="danger" onClick={() => setModalShow(true)}>View Product</Button>

         <ProductDetailModal
            show={modalShow}
            onHide={() => setModalShow(false)}
         />
      </Card.Body>
   </Card>
   </div>

   <div className="col-md-3 d-flex justify-content-center mt-4">
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="../../images/products/p1.jpg" />
      <Card.Body>
         <Card.Title>Nike Shoes</Card.Title>
         <Card.Text className="text-justify">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
         </Card.Text>
         <Button variant="danger" onClick={() => setModalShow(true)}>View Product</Button>

         <ProductDetailModal
            show={modalShow}
            onHide={() => setModalShow(false)}
         />
      </Card.Body>
   </Card>
   </div>

   <div className="col-md-3 d-flex justify-content-center mt-4">
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="../../images/products/p1.jpg" />
      <Card.Body>
         <Card.Title>Nike Shoes</Card.Title>
         <Card.Text className="text-justify">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
         </Card.Text>
         <Button variant="danger" onClick={() => setModalShow(true)}>View Product</Button>

         <ProductDetailModal
            show={modalShow}
            onHide={() => setModalShow(false)}
         />
      </Card.Body>
   </Card>
   </div>

   <div className="col-md-3 d-flex justify-content-center mt-4">
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="../../images/products/p1.jpg" />
      <Card.Body>
         <Card.Title>Nike Shoes</Card.Title>
         <Card.Text className="text-justify">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
         </Card.Text>
         <Button variant="danger" onClick={() => setModalShow(true)}>View Product</Button>

         <ProductDetailModal
            show={modalShow}
            onHide={() => setModalShow(false)}
         />
      </Card.Body>
   </Card>
   </div>

   <div className="col-md-3 d-flex justify-content-center mt-4">
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="../../images/products/p1.jpg" />
      <Card.Body>
         <Card.Title>Nike Shoes</Card.Title>
         <Card.Text className="text-justify">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
         </Card.Text>
         <Button variant="danger" onClick={() => setModalShow(true)}>View Product</Button>

         <ProductDetailModal
            show={modalShow}
            onHide={() => setModalShow(false)}
         />
      </Card.Body>
   </Card>
   </div>

</div>
</div>
</div>
    )
}

export default Product
