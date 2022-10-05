import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import { toast } from "react-toastify";

const initialState = {
    item: {},
    status: null,
   
  };
  





export const featchSingleProducts = createAsyncThunk(
    "selectedProduct/featchSingleProducts",
    async (id) => {
      try {
        const response = await axios.get(`${url}/productdesc/${id}`);
        return response.data;
       
      
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data);
      }
      
    }
    
  );



  const singlrProductSlice = createSlice({
    name: "selectedProduct",
    initialState,
    reducer: {},
    extraReducers: {
      [featchSingleProducts.pending]: (state, action) => {
        state.status = "pending";
      },
      [featchSingleProducts.fulfilled]: (state, action) => {
        state.status = "sucess";
        state.item = action.payload;
      },
      [featchSingleProducts.rejected]: (state, action) => {
        state.status = "rejected";
      },
  
     
    },
  });
  
  export default singlrProductSlice.reducer;