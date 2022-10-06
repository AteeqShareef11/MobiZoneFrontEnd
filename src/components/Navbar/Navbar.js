import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import CartIcon from "../../assets/cart.png";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/authSlice";
import { toast } from "react-toastify";
import { MdShoppingCart } from "react-icons/md";
import Bar from "../../assets/bar.svg";
import { brands } from "../../utils/allbrands";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { footerLink, serviceLink } from "../../utils/footerlinks";
import { motion } from "framer-motion";
import axios from "axios";
import { url } from "../../features/api";
import User from "../../assets/user.png";
import Order from "../../assets/order.png";
import Cart from "../../assets/cartn.png";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [sideShow, setSideShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [showSearchItem, setShowSearchItem] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const serchChangeHandle = (e) => {
    const search = e.target.value;
    setSearchItem(search);
  };

  const feactProductsbyName = async () => {
    try {
      const response = await axios.get(
        `${url}/products/getproducts/byName?name=${searchItem}`
      );
      const res = response.data.products;
      setProducts(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  const productDescHandle = (id) => {
    navigate(`/productdesc/${id}`);
    setSearchItem("");
    setShowSearchItem(false);
  };

 
  useEffect(() => {
    if (searchItem.trim()) {
      feactProductsbyName();
      console.log(searchItem);
      setShowSearchItem(true);
    } else {
      setShowSearchItem(false);
    }
  }, [searchItem]);

  return (
    <>
      <div className=" flex items-center pl-3 justify-between w-full h-[80px] gap-5 bg-BgPrimary md:px-[40px]">
        <div className="flex gap-3 cursor-pointer">
          <img src={Bar} alt="" onClick={() => setSideShow(true)} />
          <Link to="/">
            <div className="logo">MobileZone</div>
          </Link>
        </div>
        <div className=" w-full flex items-center  justify-center  ">
          <div class="  w-[70%]  text-gray-600 focus-within:text-gray-400 ">
            <input
              onChange={serchChangeHandle}
              className="w-full p-2 rounded-md outline-none"
              type="search"
              name="q"
              value={searchItem}
              placeholder="Search..."
              autocomplete="off"
            />
          </div>
        </div>
        {showSearchItem ? (
          <div className="absolute  flex items-center flex-col overflow-scroll right-[9%] lg:left-[26%] md:left-[23%] top-[62px] rounded-lg lg:w-[42%] md:w-[44%] h-[30vh] md:h-[60vh] z-10 bg-white">
            {products.length === 0 ? (
              <div className="flex p-4 items-center justify-center text-red-600 font-semibold md:text-lg text-sm">
                Items Not Found
              </div>
            ) : (
              <>
                {" "}
                {products?.map((item) => (
                  <div className="flex py-4 items-center justify-between w-[90%] m-auto">
                    <div
                      className="flex cursor-pointer items-center"
                      key={item._id}
                      onClick={() => productDescHandle(item._id)}
                    >
                      <img width="20%" src={item?.image.secure_url} alt="" />
                      <h2 className="text-gray-600 font-semibold text-sm">
                        {item?.name}
                      </h2>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        ) : null}

        <div className="nav-right">
          {/* <Link to="/cart">
          <MdShoppingCart className="cartimg" />
          <span className="cartIconQ">
            <span>{cartTotalQuantity}</span>
          </span>
        </Link> */}
          {auth._id ? (
            <div className="nav-button">
              <div
                className="w-12 h-12 cursor-pointer bg-white rounded-full flex items-center justify-center"
                onClick={() => setUserDropDown(!userDropDown)}
              >
                <img src={User} alt="" />
              </div>
            </div>
          ) : (
            <div className="nav-button">
              <Link to="/login" className="login">
                Login
              </Link>
              <Link to="/register" className="register">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
      {sideShow ? (
        <>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -200 }}
            className="sideBar"
          >
            <div className="side_header">
              <div className="logo_section_sidebar">
                <Link to="/" onClick={() => setSideShow(false)}>
                  <div className="logo">MobileZone</div>
                </Link>
                <RiDeleteBack2Fill
                  style={{ fontSize: "24px", cursor: "pointer" }}
                  onClick={() => setSideShow(false)}
                />
              </div>
              <div>
                <div>
                  {/* <Link to="/cart">
          <MdShoppingCart className="cartimg" />
          <span className="cartIconQ">
            <span>{cartTotalQuantity}</span>
          </span>
        </Link> */}
                  {auth._id ? (
                    <div className="nav-button">
                      {auth.isAdmin ? (
                        <Link
                          to="/admin/summary"
                          className="login"
                          onClick={() => setSideShow(false)}
                        >
                          Admin
                        </Link>
                      ) : null}

                      <div
                        className="register"
                        onClick={() => {
                          dispatch(logoutUser(null));
                          setSideShow(false);
                          toast.warning("Logged out!", {
                            position: "bottom-left",
                          });
                        }}
                      >
                        Logout
                      </div>
                    </div>
                  ) : (
                    <div className="nav-button">
                      <Link
                        to="/login"
                        className="login"
                        onClick={() => setSideShow(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="register"
                        onClick={() => setSideShow(false)}
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="sidebar_brands">Brands</div>
            <div className="sidebar_allbrands">
              {brands.map((item) => (
                <>
                  <div className="sidebar_eachBrand" key={item.id}>
                    <img width="20%" src={item.img} alt="" />
                    <Link to={item.link} onClick={() => setSideShow(false)}>
                      <h5>{item.title}</h5>
                    </Link>
                  </div>
                </>
              ))}
            </div>

            <div className="sidebar_brands">Main Navigation</div>
            <div className="sidebar_customer-service">
              {serviceLink?.map((item) => (
                <div className="each_service" key={item.id}>
                  <Link to={item.Link}>
                    <h5 className="sidebar_service_title">{item.title}</h5>
                  </Link>
                </div>
              ))}
              {footerLink?.map((item) => (
                <div className="each_service" key={item.id}>
                  <Link to={item.Link}>
                    <h5 className="sidebar_service_title">{item.title}</h5>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      ) : null}

      {userDropDown ? (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: 200 }}
          className="absolute top-[65px] right-0 pb-3 w-48 gap-4 h-auto bg-white z-20 flex flex-col items-center justify-center"
        >
          <div className=" uppercase bg-gradient-to-tr from-[#51ABF0] to-[#29C8A0] text-white font-semibold text-sm flex items-center justify-center w-full py-2">
          
            {auth.name}
         
                 
          </div>
          {auth.isAdmin ? (
            <>
              {" "}
              <div
                onClick={() => {
                  setUserDropDown(false);
                }}
              >
                <Link
                  to="/admin/summary"
                  className="text-BgPrimary font-semibold"
                >
                  Admin DashBoard
                </Link>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div
                className="text-BgPrimary cursor-pointer p-2 w-[80%] flex items-center justify-between "
                onClick={() => {
                  setUserDropDown(false);
                  navigate("/order");
                }}
              >
                <div className="font-semibold">Your Orders </div>

                <img width="15%" src={Order} alt="" />
              </div>
              <div
                className="text-BgPrimary w-[80%] p-2 flex items-center justify-between cursor-pointer"
                onClick={() => {
                  setUserDropDown(false);
                  navigate("/cart");
                }}
              >
                {" "}
                <div className="font-semibold">Your Cart </div>
                <img width="15%" src={Cart} alt="" />
              </div>
            </>
          )}

          <div
            className="bg-gradient-to-tr from-[#51ABF0] to-[#29C8A0]  text-white py-1 px-3  flex items-center justify-center rounded-md w-full cursor-pointer"
            onClick={() => {
              setUserDropDown(false);
              dispatch(logoutUser(null));
              navigate("/");
              toast.warning("Logged out!", { position: "bottom-left" });
            }}
          >
            LogOut
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Navbar;
