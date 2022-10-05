import React, { useEffect } from "react";
import "./LatestProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Fast from "../../assets/fast.svg";
import { featchProducts } from "../../features/productsSlice";

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
        dots: false
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

const LatestProduct = () => {
  const { items: data, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  //   navigate("cart");
  // };

  console.log(data);

  useEffect(() => {
     dispatch(featchProducts())
  }, []);
  return (
    <>
      <>
        <h3 className="shop-by-brand">Latest Products</h3>
        <div className="all-products">
          <Slider {...settings}>
            {data?.map((product) => (
              <div key={product._id} className="product">
                <div onClick={() => navigate(`/productdesc/${product._id}`)}>
                  <img width="40%" src={Fast} alt="" />
                  <img
                    className="product-img"
                    src={product.image.url}
                    alt={product.name}
                  />
                </div>

                <div className="product-box">
                  <h3>{product.name}</h3>
                  <span>{product.desc}</span>
                  <span className="price">RS. {product.price}</span>
                </div>
                {/* <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button> */}
              </div>
            ))}
          </Slider>
        </div>
      </>
    </>
  );
};

export default LatestProduct;
