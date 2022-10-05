import React, { useState } from "react";
import { Link } from "react-router-dom";
import { shopbypriceData } from "../../utils/shopbypricedata";
import "./ShopBy.css";

const ShopByPrice = () => {

  const [priceRange, setPriceRange] = useState();

  const priceRangeHandle = (item) => {
    console.log(item.start)
     setPriceRange(item.start)
 
  };

  console.log(priceRange)

  return (
    <>
      <h3 className="shop-by-brand">Shop By Price</h3>
      <div className="Allprices">
        {shopbypriceData.map((item) => (
          <Link to={item.link}>
            <h3 onClick={()=>priceRangeHandle(item)}>
              Rs. {item.start} - Rs. {item.end}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ShopByPrice;
