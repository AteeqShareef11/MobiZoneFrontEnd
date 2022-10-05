import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

const CartRequreAuth = () => {

    const auth = useSelector((state) => state.auth);
    const location = useLocation();

  return (
    auth.token ? <Outlet/> : <Navigate to="/login" state={{from : location}} replace/>
  )
}

export default CartRequreAuth