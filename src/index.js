import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer, { featchProducts } from "./features/productsSlice";
import { productsApi } from "./features/productsApi";
import cartReducer, { getCartTotal } from "./features/cartSlice";
import brandReducer from "./features/brandParam";

import authReducer, { loadUser } from "./features/authSlice";
import singleproductReducer, {
  featchSingleProducts,
} from "./features/singleProductSlice";

const store = configureStore({
  reducer: {
    brandReducer:brandReducer,
    singleproduct: singleproductReducer,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});




store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
