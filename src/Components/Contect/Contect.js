import React from 'react'
import {FaUser,FaPhone} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import { BiMessage} from 'react-icons/bi'

import './contect.css'

const Contect = () => {
  return (
    <div className='contectContainer'>

        <div className="formBox">
          <div className="headingBox">
            <h1>GET IN TOUCH</h1>
          </div>
          <form action="">
            <div className='contectItem'>
              <FaUser/>
              <input type="text" placeholder='name' />
            </div>
            <div className='contectItem'>
              <MdEmail/>
              <input type="email" placeholder='Email' />
            </div>
            <div className='contectItem'>
              <FaPhone/>
              <input type="number" placeholder='Phone' />
            </div>
            <div className='contectItem'>
              <BiMessage/>
              <textarea placeholder='Message' max-width='80%' />
            </div>
            <div className="contectItem">
              <input type="submit" className='submitBtn'  />
            </div>

          </form>
        </div>

    </div>
  )
}

export default Contect