import React from 'react'
import "./CustomerReview.css";
import {FiUser} from "react-icons/fi"
import Star from "../../assets/rating.png"
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import Slider from "react-slick";


const custData = [
    {
      id:1,
      name:"Farhan",
      date:"30 Aug 2022",
      review:"Good product. Received in a single day.",
      productImg:[
            {
                id:1,
                img:p1,
            },
            {
                id:2,
                img:p2,
            },
            {
                id:3,
                img:p3,
            },
      ]
    },
    {
        id:2,
        name:"Shah Waliullah",
        date:"30 Aug 2022",
        review:"Nice and genuine product",
        productImg:[
              {
                  id:1,
                  img:p1,
              },
              {
                  id:2,
                  img:p2,
              },
              {
                  id:3,
                  img:p3,
              },
        ]
      },
      {
        id:3,
        name:"Shoaib Baig",
        date:"31 Aug 2022",
        review:"Received well packed and geniune product. Now charging power bank to test with Phone.",
        productImg:[
              {
                  id:1,
                  img:p1,
              },
              {
                  id:2,
                  img:p2,
              },
              {
                  id:3,
                  img:p3,
              },
        ]
      },
      {
        id:4,
        name:"Haroon Majeed",
        date:"04 September 2022",
        review:"Original watch with sealed box nothing is removed ...Readmore.",
        productImg:[
              {
                  id:1,
                  img:p1,
              },
              {
                  id:2,
                  img:p2,
              },
              {
                  id:3,
                  img:p3,
              },
        ]
      },
      {
        id:5,
        name:"Noman Ahmed",
        date:"30 Aug 2022",
        review:"very good service and also good quality original product. thanks priceoye",
        productImg:[
              {
                  id:1,
                  img:p1,
              },
              {
                  id:2,
                  img:p2,
              },
              {
                  id:3,
                  img:p3,
              },
        ]
      },
      {
        id:6,
        name:"Altamash Riaz",
        date:"25 August 2022",
        review:"I have received genuine product 💯👍.... although the order got delayed a bit in delivering.",
        productImg:[
              {
                  id:1,
                  img:p1,
              },
              {
                  id:2,
                  img:p2,
              },
              {
                  id:3,
                  img:p3,
              },
        ]
      },
      {
        id:7,
        name:" Umair Abid",
        date:"07 July 2022",
        review:"Haylou solar ls05.",
        productImg:[
              {
                  id:1,
                  img:p1,
              },
              {
                  id:2,
                  img:p2,
              },
              {
                  id:3,
                  img:p3,
              },
        ]
      },
      {
        id:8,
        name:"Irtaza Inam",
        date:"01 September 2022",
        review:"The Quality is good and product is Guinenue....",
        productImg:[
              {
                  id:1,
                  img:p1,
              },
              {
                  id:2,
                  img:p2,
              },
              {
                  id:3,
                  img:p3,
              },
        ]
      },
      {
        id:9,
        name:"Imran",
        date:"26 August 2022",
        review:"Good product. Packed very well and Received in time. MobileZone love you..",
        productImg:[
              {
                  id:1,
                  img:p1,
              },
              {
                  id:2,
                  img:p2,
              },
              {
                  id:3,
                  img:p3,
              },
        ]
      },
]
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

const CustomerReview = () => {

  return (
    <>
        <h3 className='customerReview'>Customer Reviews</h3>
        <h5 className='customerh5'>What our Customers say about MobileZone.pk</h5>
        <div className='all-customer-card'>
        <Slider  {...settings}>
        {
            custData.map((item)=>(
                <div className='customer-card' key={item.id}>
                <div className='customer-info'>
                    <div className='img-wraper'>
                        <FiUser className='fiuser'/>
                    </div>
                    <div className='info'>
                       <div className='customer-name'>
                        <h3>{item.name}</h3>
                        <h3 className='verified'>verified customer</h3>
                       </div>
                       <div className='rating'>
                          <img width="100%" src={Star} alt=""/>
                       </div>
                       <p>{item.date}</p>
                    </div>
                </div>

                <h4>{item.review}</h4>
                <div className='product-images'>
                     

                        {
                            item.productImg.map((pimg)=>(
                                <img width="100%" src={pimg.img} alt=""/>
                            ))
                        }
                    
                       
             

                </div>
            </div>
            ))
        }
        </Slider>


         
        </div>
    </>
  )
}

export default CustomerReview