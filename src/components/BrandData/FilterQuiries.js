import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillDownSquare, AiFillUpSquare } from "react-icons/ai";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { url } from "../../features/api";
import { brands } from "../../utils/allbrands";
import { priceRanges, ramRanges, romRanges } from "../../utils/brandFilterData";

const FilterQuiries = ({
  setPaginationShow,
  page,
  setLoader,
  pageCount,
  setPageCount,
  show,
  setShow,
  brand,
  priceSt,
  priceEd,
  flag,
  setFlag,
  brandProducts,
  setBrandProducts,
  barndPriceFilter,
  setBarndPriceFilter,
}) => {
  const [filterRanges, setFilterRanges] = useState(false);
  const [filterRam, setFilterRam] = useState(false);
  const [filterRom, setFilterRom] = useState(false);
  const [filterBrand, setFilterBrand] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState("");
  const [romcheckboxValue, setRomCheckboxValue] = useState("");
  

  const [checkPrice, setCheckPrice] = useState(
    new Array(priceRanges.length).fill(false)
  );
  const [checkRam, setCheckRam] = useState(
    new Array(ramRanges.length).fill(false)
  );
  const [checkRom, setCheckRom] = useState(
    new Array(romRanges.length).fill(false)
  );
  const [checkBrand, setCheckBrand] = useState(
    new Array(brands.length).fill(false)
  );
  const [brandValue, setBrandValue] = useState("");

  const feactProductsbybrand = async () => {
    try {
      const response = await axios.get(
        `${url}/products/getproducts/bybrand?page=${page}&brand=${brand}`
      );
      const res = response.data.products;
      const total = response.data.total;
 
      let limit = 3;
      setPageCount(Math.ceil(total / limit));
      setBrandProducts(res);
      setLoader(true);
    } catch (error) {
      console.log(error.message);
    }
  };



  const feactProductsbybrandbyprice = async () => {

    try {
      const response = await axios.get(
        `${url}/products/getproducts/bybrand/byPriceRange?&brand=${brand}&minPrice=${priceSt}&maxPrice=${priceEd}`
      );
      const res = response.data.products;

      setBarndPriceFilter(res);
      setLoader(true)
    } catch (error) {
      console.log(error.message);
    }
  };
  const feactProductsbybrandbyram = async () => {
    try {
      const response = await axios.get(
        `${url}/products/getproducts/bybrand/byRamRanges?&brand=${brand}&ram=${checkboxValue}`
      );
      const res = response.data.products;
  

      setBarndPriceFilter(res);
      setLoader(true)
    } catch (error) {
      console.log(error.message);
    }
  };
  const feactProductsbybrandbyrom = async () => {
    try {
      const response = await axios.get(
        `${url}/products/getproducts/bybrand/byRomRanges?&brand=${brand}&rom=${romcheckboxValue}`
      );
      const res = response.data.products;

      setBarndPriceFilter(res);
      setLoader(true)
    } catch (error) {
      console.log(error.message);
    }
  };

  // const feactProducts = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${url}/products/getproducts/byAll?&brand=${brand}&minPrice=${priceSt}&maxPrice=${priceEd}&ram=${checkboxValue}&rom=${romcheckboxValue}`
  //     );
  //     const res = response.data.products;
  //     console.log(res)
    
  //   } catch (error) {
  //     console.log(error.message);
  //   }

  // };

  const handlePriceRanges = () => {
    setFlag(true);
  };

  const handlecheckPrice = (e, position) => {
    
    setPaginationShow(false)

    const updatedCheckedState = checkPrice.map((item, index) =>
      index === position ? true : false
    );

    setCheckPrice(updatedCheckedState);
  };

  const handlecheckRanges = (e, position) => {
    const checkboxRanges = e.target.value;
    setCheckboxValue(checkboxRanges);
    setPaginationShow(false)
    const updatedCheckedState = checkRam.map((item, index) =>
      index === position ? true : false
    );

    setCheckRam(updatedCheckedState);
  };

  const handlecheckRomRanges = (e, position) => {
    const checkboxRanges = e.target.value;
    setRomCheckboxValue(checkboxRanges);
    setPaginationShow(false)
    const updatedCheckedState = checkRom.map((item, index) =>
      index === position ? true : false
    );

    setCheckRom(updatedCheckedState);
  };

  const handlecheckBrands = (e, position) => {
    setPaginationShow(true)
    const brandVal = e.target.value;
    setBrandValue(brandVal);
    const updatedCheckedState = checkBrand.map((item, index) =>
      index === position ? true : false
    );

    setCheckBrand(updatedCheckedState);
  };

  const handleBrandCheck = () => {
    setFlag(false);
  };

  // useEffect(()=>{
  //   if(brand || checkboxValue || romcheckboxValue || priceSt){
  //     feactProducts()
  //   }
  
   
  // },[brand,checkboxValue,romcheckboxValue,priceSt])

  useEffect(() => {
    if (romcheckboxValue) {
      setLoader(false);
      feactProductsbybrandbyrom();
    }
  }, [romcheckboxValue]);

  useEffect(() => {
    if (checkboxValue) {
      setLoader(false);
      feactProductsbybrandbyram();
    }
  }, [checkboxValue]);

  useEffect(() => {
    if (priceSt) {
      setLoader(false);
      feactProductsbybrandbyprice();
    }
  }, [priceSt]);

  useEffect(() => {
    if (brand) {
      setLoader(false);
      feactProductsbybrand();
    }
  }, [brand, page]);

  return (
    <div className="">
      {show ? (
        <>
          <div className="price__ranges">
            <h5>Set your price range</h5>

            {filterRanges ? (
              <>
                {" "}
                <AiFillUpSquare
                  onClick={() => setFilterRanges(false)}
                  className="up"
                />
              </>
            ) : (
              <>
                <AiFillDownSquare
                  onClick={() => setFilterRanges(true)}
                  className="up"
                />
              </>
            )}
          </div>
          {filterRanges ? (
            <>
              {" "}
              <div className="all-filter-price-ranges">
                {priceRanges.map((item, index) => (
                  <div className="filter__prices">
                    <Link to={item.link} onClick={handlePriceRanges}>
                      <input
                        type="checkbox"
                        id=""
                        checked={checkPrice[index]}
                        name=""
                        value={item.value}
                        onChange={(e) => handlecheckPrice(e, index)}
                      />
                    </Link>
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </>
          ) : null}
          <div className="price__ranges">
            <h5>RAM</h5>

            {filterRam ? (
              <>
                {" "}
                <AiFillUpSquare
                  onClick={() => setFilterRam(false)}
                  className="up"
                />
              </>
            ) : (
              <>
                <AiFillDownSquare
                  onClick={() => setFilterRam(true)}
                  className="up"
                />
              </>
            )}
          </div>
          {filterRam ? (
            <>
              {" "}
              <div className="all-filter-price-ranges">
                {ramRanges.map((item, index) => (
                  <div className="filter__prices">
                    <Link to="ramlist" onClick={handlePriceRanges}>
                      <input
                        type="checkbox"
                        id=""
                        name=""
                        checked={checkRam[index]}
                        value={item.value}
                        onChange={(e) => handlecheckRanges(e, index)}
                      />
                    </Link>

                    <h3> {item.title}</h3>
                  </div>
                ))}
              </div>
            </>
          ) : null}

          <div className="price__ranges">
            <h5>MEMORY</h5>

            {filterRom ? (
              <>
                {" "}
                <AiFillUpSquare
                  onClick={() => setFilterRom(false)}
                  className="up"
                />
              </>
            ) : (
              <>
                <AiFillDownSquare
                  onClick={() => setFilterRom(true)}
                  className="up"
                />
              </>
            )}
          </div>
          {filterRom ? (
            <>
              {" "}
              <div className="all-filter-price-ranges">
                {romRanges.map((item, index) => (
                  <Link to="romlist" onClick={handlePriceRanges}>
                    <div className="filter__prices">
                      <input
                        type="checkbox"
                        id=""
                        name=""
                        checked={checkRom[index]}
                        value={item.value}
                        onChange={(e) => handlecheckRomRanges(e, index)}
                      />
                      <h3>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : null}
          <div className="price__ranges">
            <h5>BRANDS</h5>

            {filterBrand ? (
              <>
                {" "}
                <AiFillUpSquare
                  onClick={() => setFilterBrand(false)}
                  className="up"
                />
              </>
            ) : (
              <>
                <AiFillDownSquare
                  onClick={() => setFilterBrand(true)}
                  className="up"
                />
              </>
            )}
          </div>
          {filterBrand ? (
            <>
              {" "}
              <div className="all-filter-price-ranges">
                {brands.map((item, index) => (
                  <div className="filter__prices">
                    <Link to={item.link} onClick={handleBrandCheck}>
                      <input
                        type="checkbox"
                        checked={checkBrand[index]}
                        id=""
                        name=""
                        value={item.value}
                        onChange={(e) => handlecheckBrands(e, index)}
                      />
                    </Link>

                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </>
      ) : (
        <>
          <div className="price__ranges">
            <h5>BRANDS</h5>

            {filterBrand ? (
              <>
                {" "}
                <AiFillUpSquare
                  onClick={() => setFilterBrand(false)}
                  className="up"
                />
              </>
            ) : (
              <>
                <AiFillDownSquare
                  onClick={() => setFilterBrand(true)}
                  className="up"
                />
              </>
            )}
          </div>
          {filterBrand ? (
            <>
              {" "}
              <div className="all-filter-price-ranges">
                {brands.map((item, index) => (
                  <div className="filter__prices">
                    <Link to={item.link} onClick={handleBrandCheck}>
                      <input
                        type="checkbox"
                        checked={checkBrand[index]}
                        id=""
                        name=""
                        value={item.value}
                        onChange={(e) => handlecheckBrands(e, index)}
                      />
                    </Link>

                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default FilterQuiries;
