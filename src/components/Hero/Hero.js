import React from "react";
import "./Hero.css";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";





import Slider from "react-slick";



const Hero = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 300,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

   

      <div className="hero">
        <Slider {...settings}>
          <div className="img-wrap">
            <img width="100%" src={Img1} alt="" />
          </div>
          <div className="img-wrap">
            <img width="100%" src={Img2} alt="" />
          </div>
          <div className="img-wrap">
            <img width="100%" src={Img3} alt="" />
          </div>
        </Slider>
      </div>
    
  );
};

export default Hero;
