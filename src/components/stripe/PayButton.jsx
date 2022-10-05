import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../../features/api";
import React from "react";

const PayButton = ({ cartItems }) => {
  
  const user = useSelector((state) => state.auth);

  const handleCheckOut = async () => {
    const res = await axios.post(`${url}/stripe/create-checkout-session`, {
      cartItems,
      userId: user._id,
    });
    window.location.href=res.data?.url
  };
  return (
    <>
      <button onClick={() => handleCheckOut()}>check out</button>
    </>
  );
};

export default PayButton;
