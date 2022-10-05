import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { url } from '../../features/api';
import BrandDataSection from '../BrandData/BrandDataSection';
import FilterQuiries from '../BrandData/FilterQuiries'


const PriceRangeData = () => {
    


    const { priceStart, priceEnd } = useParams();
    const [show, setShow]= useState(false)
    const [flag, setFlag] = useState(false);
    const [loader,setLoader] = useState(false)
    const [brandProducts, setBrandProducts] = useState([]);
    const [barndPriceFilter, setBarndPriceFilter] = useState([]);
   console.log(priceStart,priceEnd)

   const feactProductsbyprice = async () => {
    try {
      const response = await axios.get(
        `${url}/products/getproducts/byPriceRange?minPrice=${priceStart}&maxPrice=${priceEnd}`
      );
      const res = response.data.products;
      console.log(res)
      setBarndPriceFilter(res);
      setLoader(true)
      setFlag(true)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setLoader(false)
    if(priceStart){
      feactProductsbyprice();
    }

  }, [priceStart,priceEnd]);

  return (
    <div className="brand-section">

    <div className="brandConatainer">
      <div className="filter-section">
        <FilterQuiries
         setShow={setShow}
          show={show}
          flag={flag}
          setFlag={setFlag}
          brandProducts={brandProducts}
          setBrandProducts={setBrandProducts}
          barndPriceFilter={barndPriceFilter}
          setBarndPriceFilter={setBarndPriceFilter}
        />
      </div>
      {flag ? (
        <BrandDataSection loader={loader} barndDataSection={barndPriceFilter} />
      ) : (
        <BrandDataSection barndDataSection={brandProducts} />
      )}
    </div>
  </div>
  )
}

export default PriceRangeData