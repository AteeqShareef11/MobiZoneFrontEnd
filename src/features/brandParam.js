import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    brandParam:null,
  };


  const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers :{
      updateParam(state,action){
      return state.brandParam=action.payload;
      }
    },
})


export const updateParam = brandSlice.actions
export default brandSlice.reducer;