import React from 'react'
import './footer.css'
import {FaHome, FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa'
import {BiMenuAltRight} from 'react-icons/bi'


const Footer = () => {
  return (
    <footer>
        <div className="footerContainer">
            <div className="topBox">
                <div className="box1">
                    <div className="Box1heading">CONTACT US</div>
                    <div>
                        <p ><b className="colorMidDark" >WASME</b></p>
                        <p >WASME House, Plot No-4</p>
                        <p> Sector 16A, Film City, Noida</p>
                        <p>For Genral query :</p>
                        <p><b className="colorMidDark" >Phone</b>: +91 120 4216283</p>
                        <p>Conference Manager :</p>
                        <p><b className="colorMidDark" >Phone</b>: +91 7428578883</p>
                        <p><b className="colorMidDark" >Email</b>: info@icecr.in</p>
                    </div>
                </div>
                <div className="box2">
                    <div className="Box2heading">Important Links</div>
                   

                        <div><a className="atag"  href="">About us</a></div>
                        <div><a  className="atag" href="">Upcoming events</a></div>
                        <div><a  className="atag" href="">Photography</a></div>
                        <div><a  className="atag" href="">Research Paper</a></div>
                        <div><a  className="atag" href="">Entrepreneur</a></div>
                    </div>
                
                <div className="box3">
                    <div className="logoBox">
                         {/* <img src="./icons/icecr_logo.png" width="200" alt="logo" /> */}
                         <h1>ColourScheme</h1>
                         <p>International Conference on environment Climate change and Renewable energy</p>
                    </div>
                    {/* <div className="mapBox">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9591931727514!2d77.58200911546909!3d28.450646482489912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University%20(Times%20of%20India%20Group)!5e0!3m2!1sen!2sin!4v1678787665780!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */ }
                </div>
            </div>
            <div className="downBox">
                <div className="downLeftBox">
                    <p>© Copyright <b>ColourScheme</b>. All Rights Reserved</p>
                    {/* <p>Designed by <span>insta:developer_ravi</span></p> */}
                </div>
                <div className="downRightBox ">
                <a href="#"><FaHome/></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaWhatsapp/></a>
                <a href="#"><FaFacebook/></a>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer