import React from "react";
import { useNavigate } from "react-router";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import MyPagination from "./MyPagination";
import Loader from "../Loader";

const BrandDataSection = ({
  paginationShow,
  brand,
  barndDataSection,
  page,
  setPage,
  pageCount,
  setPageCount,
  loader,
}) => {
  const navigate = useNavigate();



  return loader? (<>
    { barndDataSection.length === 0 ? (
    <div className="notfound">
      <div className="not_found">items not found</div>
    </div>
  ) : (
    <>
{
  <div className="main-data-section">
  <div className="data-section">
    {barndDataSection?.map((item) => (
      <div
        className="data-card"
        key={item._id}
        onClick={() => navigate(`/productdesc/${item._id}`)}
      >
        <img width="40%" src={item.image.url} alt="" />
        <h3 className="data-card-name">{item.name}</h3>
        <h2 className="data-card-price">Rs. {item.price}</h2>
      </div>
    ))}
  </div>
  {paginationShow ? <MyPagination page={page} setPage={setPage} pageCount={pageCount}/>: null}
</div>
}
    </>

  )}
  </>) : <div className="flex items-center justify-center w-full h-[100vh]"><Loader/></div>
};

export default BrandDataSection;
