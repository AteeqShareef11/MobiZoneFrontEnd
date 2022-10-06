import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { featchSingleProducts } from "../../features/singleProductSlice";
import "./ProductDesc.css";
import Rating from "../../assets/rating.png"
import PoApprove from "../../assets/po-approved.svg"
import Adapter from "../../assets/adapter.svg"
import Ejection from "../../assets/ejection-pin.svg"
import Services from './../Services/Services';
import Specification from "./Specification";
import { addToCart } from "../../features/cartSlice";
import Loader from "../Loader";


const ProductDesc = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { item: data, status } = useSelector((state) => state.singleproduct);

   const handleAddToCart = (data) =>{
        dispatch(addToCart(data));
        navigate("/cart")
        
   }
  useEffect(() => {
    if(id){
      dispatch(featchSingleProducts(id));
    }
 
  }, [id]);

  return (
    <>
      <div className="product-detail-section">
{
  data.image?         <div className="img-preview">
          <img width="100%" src={data.image?.secure_url} alt="" />
        </div> : <Loader/>
}
        <div className="product-detail">
          <h2>{data.name}</h2>
          <div className="rating">
            <h3>4.9</h3>
            <img width="100%" src={Rating} alt="" />
            <h3>61Ratings</h3>
          </div>
          <div className="assured">
            <img src={PoApprove} alt="" />
            <h3>MobileZone Assured</h3>
          </div>
          <div className="product-pr">
            <p>MobileZone Price</p>
            <h2>Rs.{data.price}</h2>
          </div>
          <div className="storage">
            <p>Storage</p>
            <div className="ramrom">
              <h4>{data.rom}-</h4>
              <h4>{data.ram}RAM</h4>
            </div>
          </div>

          <button className="AddToCart" onClick={()=>handleAddToCart(data)}>Add to Cart</button>
        </div>
      
      </div>
      <Services/>
      <div className="Specification">
        <h1>Specifications</h1>
      </div>
      <Specification/>
      <div className="Specification">
        <h1>What’s In The Box</h1>
      </div>
      <div className="mobile-box">
        <div className="mbl-box-img">
          <img width="40%" src={data.image?.secure_url} alt=""/>
          <p>{data.name}</p>
        </div>
        <div className="mbl-box-img">
          <img width="20%" src={Adapter} alt=""/>
          <p>Adapter</p>
        </div>
        <div className="mbl-box-img">
          <img width="15%" src={Ejection} alt=""/>
          <p>Ejection Pin</p>
        </div>

      </div>
    </>
  );
};

export default ProductDesc;
