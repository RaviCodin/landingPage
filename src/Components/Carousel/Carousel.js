import React from 'react'
import './carousel.css'
import Carousel from 'react-material-ui-carousel'
   

const CarouselSlide = () => {
  
  return (
    <div>
    <Carousel>
        <div className='slide1'></div>
        <div className='slide1'></div>
        <div className='slide1'></div>
    </Carousel>
    </div>
  )
}

export default CarouselSlide