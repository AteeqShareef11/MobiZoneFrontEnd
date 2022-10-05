import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const featchProducts = createAsyncThunk(
  "products/featchProducts",
  async () => {
    try {
      const response = await axios.get(`${url}/products`);
      return response.data;
    
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const featchSingleProducts = createAsyncThunk(
  "products/featchSingleProducts",
  async () => {
    try {
      const response = await axios.get(`${url}/singleproducts`);
      return response.data;
    
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/products`,
        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);



const productSlice = createSlice({
  name: "products",
  initialState,
  reducer: {},
  extraReducers: {
    [featchProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [featchProducts.fulfilled]: (state, action) => {
      state.status = "sucess";
      state.items = action.payload;
    },
    [featchProducts.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [createProducts.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [createProducts.fulfilled]: (state, action) => {
      state.createStatus = "sucess";
      state.items.push(action.payload);
      toast.success("Product Created!");
    },
    [createProducts.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  },
});

export default productSlice.reducer;
