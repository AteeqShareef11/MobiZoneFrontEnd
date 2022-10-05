import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';
import Img1 from "../../assets/payment_method.svg"
import {AiFillYoutube} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import { footerLink, serviceLink } from '../../utils/footerlinks';






const Footer = () => {
  return (
    <>
    <footer>
      <div className='MobileZone'>
      <Link to="/">
      <h2>MobileZone</h2>
      </Link>
      
        {
            footerLink?.map((item)=>(
                <div key={item.id}>
                <Link to={item.Link}>{item.title}</Link>
                </div>
     
            ))
        }

      </div>
      <div className='customer-service'>
      <h2>Customer Service</h2>
      {
        serviceLink?.map((item)=>(
            <div key={item.id}>
            <Link to={item.Link}>{item.title}</Link>
            </div>
          
        ))
      }

      </div>
      <div className='payement-method'>
      <h2>Secure Payments Methods</h2>
      <div className='paymentimage'>
        <img src={Img1} alt=""/>
      </div>
      </div>

    </footer>
    <div className='copywrite bg-BgPrimary'>
    
        <p>©2022 MobileZone.pk</p>
        <div className='socials'>
            <div className='wrap'>
                <AiFillYoutube className='icons'/>
            </div>
            <div className='wrap'>
                <FaFacebookF className='icons'/>
            </div>
            <div className='wrap'>
                <AiFillInstagram className='icons'/>
            </div>
            <div className='wrap'>
                <FaLinkedinIn className='icons'/>
            </div>
        </div>
      </div>
    </>

  )
}

export default Footer