import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import { useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseFromCart,
  getCartTotal,
  removeFromCart,
} from "../../features/cartSlice";
import PayButton from "../stripe/PayButton";
import {VscDebugReverseContinue} from "react-icons/vsc"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  console.log(cart.cartItems)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);

  const handleRemoveCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseFromCart = (cartItem) => {
    dispatch(decreaseFromCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="cart-container">
        <h2>Shoping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <>
            <div className="empty-cart">
              <p>Your Cart Is Currently Empty</p>
              <div className="bg-BgPrimary p-2 rounded-lg  mt-2">
                <Link to="/">
                  {/* <p></p> */}
                  <span>Start Your Shoping</span>
                 
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="title">
              <h3 className="product-title">product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quentity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem._id}>
                  <div className="cart-product">
                  
                    <img src={cartItem?.image?.url} alt={cartItem.name} />
                    <div className="product-info">
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <div className="md:hidden font-semibold text-BgPrimary ">Rs. {cartItem.price}</div>
                      <button onClick={() => handleRemoveCart(cartItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="product-price hidden">Rs. {cartItem.price}</div>
                  <div className="product-quantity">
                    <button onClick={() => handleDecreaseFromCart(cartItem)}>
                      -
                    </button>
                    <div className="quantity">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className="flex items-center justify-center font-semibold">
                  <span className="md:hidden px-2 text-xl font-semibold">Total :</span>   Rs. {cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summery">
              <button className="clear-cart" onClick={() => handleClearCart()}>
                clear cart
              </button>
              <div className="cart-checkout shadow-2xl">
                <div className="subtotal">
                  <span>SubTotal</span>
                  <span className="amout">Rs. {cart.cartTotalAmount}</span>
                </div>
                <p>Rules & Regulation Will be Applay</p>
                {auth._id ? (
                  <PayButton cartItems = {cart.cartItems}/>
                ) : (
                  <button
                    className="cart-login-button"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    login to Check out
                  </button>
                )}

                <div className="bg-BgPrimary w-full py-2 hover:bg-white   mt-2 rounded-md">
                  <Link to="/">
                    <div className="w-[80%] m-auto flex justify-between">
                    <span className="text-sm">Continue Your Shoping</span>
                    <div className="flex items-center justify-center">
                    <VscDebugReverseContinue className="text-xl"/>
                    </div>
                    
                    </div>

                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
