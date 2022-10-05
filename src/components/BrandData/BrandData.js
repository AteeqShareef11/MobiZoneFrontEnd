import React, { useState } from "react";
import "./BrandData.css";
import { useParams } from "react-router";
import BrandDataSection from "./BrandDataSection";
import FilterQuiries from "./FilterQuiries";
import { FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiDeleteBack2Fill } from "react-icons/ri";

const BrandData = () => {
  const { brand } = useParams();
  const { priceSt, priceEd } = useParams();
  const [flag, setFlag] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [show, setShow] = useState(true);
  const [brandProducts, setBrandProducts] = useState([]);
  const [barndPriceFilter, setBarndPriceFilter] = useState([]);
  const [page, setPage] = useState(1);
  const [paginationShow,setPaginationShow] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [loader, setLoader]=useState(false)

  return (
    <>
      
      <div className="brand-section">
        <div className="brandName">
          <h3 className="brand-title">
            Price List of {brand} Mobile Phones in Pakistan
          </h3>
          <p>
            Showing you {brandProducts.length} {brand} Mobile Phone Price in
            Pakistan. MobileZone helps you find the lowest online Price of all
            mobile phones sold in Pakistan.
          </p>
        </div>
        <div className="filter_mobile" onClick={() => setShowFilter(true)}>
          <h5>Filter By</h5>
          <FaFilter />
        </div>
        {showFilter ? (
          <>
            {" "}
            <div className="brandConatainer">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: 200 }}
                className="filter_section_mobile_view"
              >
                <div className="fiterby_mobile_view">
                  <h5>Filter By</h5>
                  <RiDeleteBack2Fill onClick={() => setShowFilter(false)} />
                </div>
                <FilterQuiries
                  setPaginationShow={setPaginationShow}
                  page={page}
                  pageCount={pageCount}
                  setPageCount={setPageCount}
                  show={show}
                  brand={brand}
                  priceSt={priceSt}
                  priceEd={priceEd}
                  flag={flag}
                  setFlag={setFlag}
                  setLoader={setLoader}
                  brandProducts={brandProducts}
                  setBrandProducts={setBrandProducts}
                  barndPriceFilter={barndPriceFilter}
                  setBarndPriceFilter={setBarndPriceFilter}
                />
              </motion.div>
              {}
              {flag ? (
                <BrandDataSection
                  paginationShow={paginationShow}
                  brand={brand}
                  page={page}
                  setPage={setPage}
                  pageCount={pageCount}
                  setPageCount={setPageCount}
                  loader={loader}
                  barndDataSection={barndPriceFilter}
                />
              ) : (
                <BrandDataSection
                   paginationShow={paginationShow}
                  brand={brand}
                  page={page}
                  setPage={setPage}
                  pageCount={pageCount}
                  loader={loader}
                  setPageCount={setPageCount}
                  barndDataSection={brandProducts}
                />
              )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="brandConatainer">
              <div className="filter-section">
                <FilterQuiries
                 setPaginationShow={setPaginationShow}
                  page={page}
                  pageCount={pageCount}
                  setPageCount={setPageCount}
                  show={show}
                  brand={brand}
                  priceSt={priceSt}
                  priceEd={priceEd}
                  flag={flag}
                  setFlag={setFlag}
                  setLoader={setLoader}
                  brandProducts={brandProducts}
                  setBrandProducts={setBrandProducts}
                  barndPriceFilter={barndPriceFilter}
                  setBarndPriceFilter={setBarndPriceFilter}
                />
              </div>
              {flag ? (
                <BrandDataSection
                   paginationShow={paginationShow}
                  brand={brand}
                  page={page}
                  setPage={setPage}
                  pageCount={pageCount}
                  loader={loader}
                  setPageCount={setPageCount}
                  barndDataSection={barndPriceFilter}
                />
              ) : (
                <BrandDataSection
                   paginationShow={paginationShow}
                  brand={brand}
                  page={page}
                  setPage={setPage}
                  loader={loader}
                  pageCount={pageCount}
                  setPageCount={setPageCount}
                  barndDataSection={brandProducts}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BrandData;
