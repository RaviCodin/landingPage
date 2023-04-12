import React, { useState } from 'react'
import {FaHome, FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa'
import {BiMenuAltRight} from 'react-icons/bi'

import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {


  // let isHide = true
  const [isHide, setisHide] = useState(true);


const menuHandler = (e)=>{
  // e.prevent
    console.log("true")

    if(isHide){
      console.log(  document.getElementsByClassName("menuContainer")[0].classList.remove("hide"))
      console.log(  document.getElementsByClassName("menuContainer")[0].classList.add("show"))
      setisHide(false)
    }
    else{
        console.log(  document.getElementsByClassName("menuContainer")[0].classList.add("hide"))
      console.log(  document.getElementsByClassName("menuContainer")[0].classList.remove("show"))

      setisHide(true)
    }
}

  return (
    <div className='HeaderContainerMain'>
        <header>
        <div className="HeaderContainer">
            <div className="logoBox">
                {/* <img src="./icons/icecr_logo.png" width="150" alt="logo"/> */}
                <h1 className='logoColor'>Colour<span className='logoColor2'  >Scheme</span> </h1>
            </div>
            <div className="linkBox">
            
            </div>
            <div className="iconBox">
                <a href="/"><FaHome/></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaWhatsapp/></a>
                <a href="#"><FaFacebook/></a>
                {/* <a href="#"></a> */}
                <Link to='/contect'>Contect</Link>
            </div>
            <div onClick={()=>menuHandler()} className="menu">
                
                <BiMenuAltRight/>
            </div>
        </div>

        <div className="menuContainer hide">
        <div className="iconBoxx">

                <a href="#"><FaHome/></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaWhatsapp/></a>
                <a href="#"><FaFacebook/></a>
        </div>
        </div>
    </header>

    </div>
  )
}

export default Header