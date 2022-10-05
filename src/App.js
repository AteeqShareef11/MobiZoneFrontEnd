import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import CheckoutSuccess from "./components/stripe/CheckoutSuccess";
import MainContent from "./components/MainContent/MainContent";
import ProductDesc from "./components/ProductDesc/ProductDesc";
import BrandData from "./components/BrandData/BrandData";
import BrandDataSection from "./components/BrandData/BrandDataSection";
import PriceRangeData from "./components/PriceRangeData/PriceRangeData";
import Layout from "./AppLayout/Layout";
import NotFound from "./NotFound";
import RequireAuth from "./RequireAuthRoutes/RequireAuth";
import Dashboard from "./Admin/Dashboard";
import Products from "./Admin/Products";
import CreateProducts from "./Admin/CreateProducts";
import Summary from "./Admin/Summary";
import CartRequreAuth from "./AppLayout/CartRequreAuth";
import Orders from "./Admin/Orders";
import Users from "./Admin/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <section>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* ////////// User Routes///////////// */}

              <Route path="/" element={<MainContent />}>
                <Route index element={<Home />} />
                <Route path="/mobiles/:brand" element={<BrandData />}>
                  <Route
                    path="pricelist/:priceSt/:priceEd"
                    element={<BrandDataSection />}
                  />

                  <Route path="ramlist" element={<BrandDataSection />} />
                  <Route path="romlist" element={<BrandDataSection />} />
                </Route>
                <Route
                  path="pricelist/:priceStart/:priceEnd"
                  element={<PriceRangeData />}
                />
                <Route path="/productdesc/:id" element={<ProductDesc />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route element={<CartRequreAuth/>}>
                <Route path="/cart" element={<Cart />} />
                </Route>
        
                <Route path="checkout-success" element={<CheckoutSuccess />} />
              </Route>

              {/* ////////// Protected Routes {Admin Routes}///////////// */}
              <Route element={<RequireAuth />}>
                <Route path="/admin" element={<Dashboard />}>
                  <Route path="products" element={<Products />}>
                    <Route path="create-product" element={<CreateProducts />} />
                  </Route>
                  <Route path="summary" element={<Summary />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                </Route>
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </section>
      </Router>
    </div>
  );
}

export default App;
