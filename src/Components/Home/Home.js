import React from 'react'
import CarouselSlide from '../Carousel/Carousel.js'
import ProductTypes from '../ProductTypes/ProductTypes.js'
import productImage from '../../images/Orange_1_540x.webp'
import { Link } from 'react-router-dom'
import './home.css'
// import Carousel from 'react-material-ui-carousel'
import village1 from '../../images/village.jpg'
import village2 from '../../images/village2.jpg'

const Home = () => {
  return (
    <div>
      <CarouselSlide/>

      <div className="productBox">
        <div className="headingBox"><h1>Soothe & Comfort</h1></div>

        <div className="productItem">
          <div className="productImage">
            <img src={productImage} alt="productImage"  />
          </div>
          <div className="productContain">

            <h2>Support your fitness goals with ColorScheme Deep Blue® Products</h2>
            <p>Fresh oranges are sourced from the villages of Nagpur. Cold-pressing of the rind is done to extract oils. The oils with matchless aroma is then poured into bottles and stored to enhance it's flavor and aroma.</p>
            <Link to={""} ><span>Shop now</span></Link>
          </div>
        </div>
      </div>


      <div className="productbox2">
        <div className="productDetail">
              <h1>ColorScheme On Guard®</h1>
              <p>Fresh oranges are sourced from the villages of Nagpur. Cold-pressing of the rind is done to extract oils. The oils with matchless aroma is then poured into bottles and stored to enhance it's flavor and aroma.</p>
              <span>Browse Our Products</span>

        </div>
        <div className="productScroll">

          {/* <Carousel> */}
            <div className="SlideItem">
              <img src={require('../../images/Fran_360x.webp')} width='100%' height='90%' alt="" />
              <h3>FRANKINSENCE</h3>
            </div>
            <div className="SlideItem">
            <img src={require('../../images/Gera_540x.webp')} width='100%' height='90%' alt="" />

              <h3>GERANIUM OIL</h3>
            </div>
            <div className="SlideItem">
            <img src={require('../../images/Blue_1_540x.webp')} height='90%' width='100%' alt="" />

              <h3>Eucalyptus</h3>
            </div>
           
          {/* </Carousel> */}

        </div>
      </div>


      <ProductTypes/>


      <div className="villageBannarContainer">
      <div className="villageBannarBox1">
      <h1>SOURCE TO YOU</h1>
      <p>doTERRA sources essential oils from all over the world. We work with committed partners to ensure the best growing conditions and produce the purest, highest quality essential oils.</p>
        </div>

        <div className="villageBannarBox">

          <div className="villageItem">
            <div className="imageBox">
              <img src={village1} alt="" />
            </div>
            <div className="contentBox">
              <h3>Cō-Impact SourcingTM</h3>
              <p>doTERRA is committed to providing only the highest quality essential oils to every household throughout the world. Accomplishing such a goal requires extensive research to identify the best sources of these oils..</p>
              <span>Learn more</span>
            </div>
          </div>

          <div className="villageItem">
            <div className="imageBox">
              <img src={village2} alt="" />
            </div>
            <div className="contentBox">
              <h3>Cō-Impact SourcingTM</h3>
              <p>doTERRA is committed to providing only the highest quality essential oils to every household throughout the world. Accomplishing such a goal requires extensive research to identify the best sources of these oils..</p>
              <span>Learn more</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home