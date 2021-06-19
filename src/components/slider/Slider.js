import React from 'react'
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../images/slider/slider1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../images/slider/slider2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../images/slider/slider3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
    )
}

export default Slider
