import React from "react";
import "./NavBrand.css";

import { Link } from "react-router-dom";
import { brands } from "../../utils/allbrands";




const NavBrand = () => {
  return (
    <>
<h3 className="shop-by-brand">Shop By Brand</h3>
    <div className="navbrand">
      <div className="allbrands">
        {brands.map((item) => (
          <Link to={item.link}>
            <div className="eachbrand" key={item.id}>
              
              <img className="max-w-none"  src={item.img} alt="" />
            
             

              <h5 className="branding">{item.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>

  );
};

export default NavBrand;
