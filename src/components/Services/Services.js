import React from 'react'
import "./Services.css";
import Pta from "../../assets/feature-approved.svg"
import Wrranty from "../../assets/feature-warranty.svg"
import Shipping from "../../assets/feature-shipping.svg"
import Deleivry from "../../assets/feature-delivery.svg"

const serviceData = [
    {
        id:1,
        image:Pta,
        title:"PTA Approved",
        desc:"Mobile Phone",
    },
    {
        id:2,
        image:Wrranty,
        title:"1 Year",
        desc:"Brand Warranty",
    },
    {
        id:3,
        image:Shipping,
        title:"24hr Delivery",
        desc:"Islamabad & Rawalpindi",
    },
    {
        id:4,
        image:Deleivry,
        title:"Free Delivery",
        desc:"All Over Pakistan",
    },
]

const Services = () => {
  return (
    <>
        <div className='AllServices'>

        {
            serviceData.map((item)=>(
                <div className='each-service' key={item.id}>
                <img width="25%" src={item.image} alt=""/>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
            </div>
            ))
        }

        </div>
    </>
  )
}

export default Services