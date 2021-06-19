import React, { useState } from 'react';
import Header from './navbar/Header';
import Slider from './slider/Slider';
import Product from './product/Product';
import Footer from './footer/Footer';


const Index = (props) => {
   
   return (
    <>
    <div>
      <Slider />
      <Product />
     </div>
   </>
       )
}

export default Index;