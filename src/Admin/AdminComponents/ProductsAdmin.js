import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import Loader from "../../components/Loader";
import { url } from "../../features/api";

import MyPagination from "./MyPagination";

const ProductsAdmin = ({
  setOpenPopUp,
  setItemUpdate,
  setEditShow,
  update,
}) => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [reFetch, setRefetch] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [loaderShow,setLoaderShow] = useState(true)

  const feactProductsAll = async () => {
    try {
      const response = await axios.get(
        `${url}/products/adminProducts?page=${page}`
      );
      const res = response.data.products;
      const total = response.data.total;

      let limit = 6;
      setPageCount(Math.ceil(total / limit));
      setProducts(res);
      setLoaderShow(false)
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(products)

  const deletProducts = async () => {
    try {
      const response = await axios.get(
        `${url}/products/deleteProduct?id=${productId}`
      );
      setRefetch(!reFetch);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = (_id) => {
    setProductId(_id);
  };

  const handleEdit = (item) => {
    setOpenPopUp(true);
    setItemUpdate(item);
    setEditShow(true);
  };

  const serchChangeHandle = (e) => {
    const search = e.target.value;
    setSearchItem(search);
  };
  const feactProductsbyName = async () => {
    try {
      const response = await axios.get(
        `${url}/products/byName?name=${searchItem}&page=${page}`
      );
      const res = response.data.products;
      setProducts(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
   
    if (productId) {
      deletProducts();
    }
  }, [productId]);

  useEffect(() => {
    if (searchItem.trim()) {
      feactProductsbyName();
    }
  }, [searchItem]);

  useEffect(() => {
    if (page) {
      feactProductsAll();
    }
  }, [page, reFetch, update]);

  return (
    <>
      {loaderShow ? (
        <Loader />
      ) : (
        <div className="w-full flex flex-col items-center gap-4 ">
          <div className=" w-full flex items-center  justify-center  ">
            <div class=" w-full text-BgPrimary border-BgPrimary border rounded-md focus-within:text-gray-400 ">
              <input
                onChange={serchChangeHandle}
                className="w-full p-2 rounded-md outline-none"
                type="search"
                name="q"
                // value={searchItem}
                placeholder="Search..."
                autocomplete="off"
              />
            </div>
          </div>
          <div className="md:w-full hidden md:flex items-center gap-4 justify-between">
            <div className="w-full text-sm font-semibold flex items-start  justify-center">
              Product Image
            </div>
            <div className=" w-full text-sm font-semibold flex items-start justify-center">
              Product Name
            </div>
            <div className="w-full text-sm font-semibold flex items-start justify-center">
              Product Price
            </div>

            <div className="w-full text-sm font-semibold flex items-start  justify-center">
              Edit Product
            </div>
            <div className="w-full text-sm font-semibold flex items-start text-whit justify-center">
              {" "}
              Delete Product
            </div>
          </div>

          {products.map((item) => (
            <div
              className="w-full flex items-center justify-between"
              key={item._id}
            >
              <div className="flex items-center justify-center w-full  rounded-md ">
                <div className="flex flex-col gap-1 items-center justify-center w-24 ">
                  <img src={item?.image?.url} alt="" />
                  <div className=" md:hidden w-full text-sm text-center font-semibold flex items-start text-BgPrimary justify-center">
                    {item.name}
                  </div>
                  <div className="md:hidden w-full  text-sm font-semibold flex items-start text-BgPrimary justify-center">
                    Rs. {item.price}
                  </div>
                </div>
              </div>
              <div className=" hidden md:w-full md:text-lg text-sm font-semibold md:flex items-start text-BgPrimary justify-center">
                {item.name}
              </div>
              <div className="hidden md:w-full md:text-lg text-sm font-semibold md:flex items-start text-BgPrimary justify-center">
                Rs. {item.price}
              </div>

              <div className="w-full cursor-pointer  flex items-start justify-center">
                <AiOutlineEdit
                  className="text-green-600 text-2xl"
                  onClick={() => handleEdit(item)}
                />
              </div>

              <div className="w-full cursor-pointer flex items-start justify-center">
                {" "}
                <AiOutlineDelete
                  className="text-red-600 text-2xl"
                  onClick={() => handleDelete(item._id)}
                />
              </div>
            </div>
          ))}

          <MyPagination page={page} pageCount={pageCount} setPage={setPage} />
        </div>
       
      )}
    </>
  );
};

export default ProductsAdmin;
