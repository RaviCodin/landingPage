import React from 'react'
import './productTypes.css'
const ProductTypes = () => {
  return (
    <>
        <div className="ProductTypesContainer">
            <div className="productTypesRow">
                <div className="productTypesItem">
                 <div className='productTypesItemBox productTypesItemBoxUrl1'>

                        <h2>Why Aromatherapy</h2>
                        <span>Learn more</span>
                 </div>
                </div>
                <div className="productTypesItem">
                    <div className='productTypesItemBox productTypesItemBoxUrl2'>
                        <h2>Hospitality</h2>
                        <span>More</span>
                    </div>
                </div>
            </div>
            <div className="productTypesRow">
                <div className="productTypesItem">
                <div className='productTypesItemBox productTypesItemBoxUrl3'>
                        <h2>Tutorials</h2>
                        <span>Learn more</span>
                    </div>
                </div>
                 <div className="productTypesItem">
                 <div className='productTypesItemBox productTypesItemBoxUrl4' >
                        <h2>Corporate Gifting</h2>
                        <span>Learn more</span>
                    </div>
                 </div>
            </div>
        </div>
    </>
  )
}

export default ProductTypes