import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MyPopUp from "../PopUp/MyPopUp";
import ProductsAdmin from "./AdminComponents/ProductsAdmin";
import UpdateProduct from "./AdminComponents/UpdateProduct";
import { AdminHeaders, PrimaryButton } from './CommenStyled';
import CreateProducts from "./CreateProducts";



const Products = () => {
  const navigate = useNavigate();
  const [openPopUp,setOpenPopUp] = useState(false);
  const [itemUpdate,setItemUpdate] = useState({});
  const [editShow,setEditShow]= useState(false)
  const [update, setUpdate] = useState(false)

  return (
    <>
    <AdminHeaders>
       <div className="flex items-center justify-center text-lg font-semibold">Products</div>
      <PrimaryButton onClick={() => setOpenPopUp(true)}>
        Create
      </PrimaryButton>

      
    </AdminHeaders>
    <ProductsAdmin setOpenPopUp={setOpenPopUp} setItemUpdate={setItemUpdate} setEditShow={setEditShow} update={update}/>
    <MyPopUp
    title="Create Products"
    openPopUp={openPopUp}
    setOpenPopUp={setOpenPopUp}
    setItemUpdate={setItemUpdate}
    setEditShow={setEditShow}
    >
    {
      editShow ?  <UpdateProduct itemUpdate={itemUpdate} setEditShow={setEditShow} update={update} setUpdate={setUpdate}   setOpenPopUp={setOpenPopUp}/> :  <CreateProducts/>
    }

    </MyPopUp>

    <Outlet />
    </>

  );
};

export default Products;
