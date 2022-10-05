import React from "react";
import { Route } from "react-router-dom";
import CreateProducts from "../Admin/CreateProducts";
import Dashboard from "../Admin/Dashboard";
import Products from "../Admin/Products";
import Summary from "../Admin/Summary";

const AdminLayout = () => {
  return (
    <section>
      <Route path="/admin" element={<Dashboard />}>
        <Route path="products" element={<Products />}>
          <Route path="create-product" element={<CreateProducts />} />
        </Route>
        <Route path="summary" element={<Summary />} />
      </Route>
    </section>
  );
};

export default AdminLayout;
