import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';


const RequireAuth = () => {

    const auth = useSelector((state) => state.auth);
    const location = useLocation();

  return (
    auth.isAdmin? <Outlet/> : <Navigate to="/login" state={{from : location}} replace/>
  )
}

export default RequireAuth