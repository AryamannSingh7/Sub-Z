import React from "react";
import CategorySidebar from "./CategorySidebar";
import AllProduct from "./AllProduct";
import "./Product_Sidebar.css";
import ProHeader from "./ProHeader";

const Product_Sidebar = () => {
  return (
    <div className="product-sidebar">
      <ProHeader />
      <CategorySidebar />
      <AllProduct />

      {/* <ProFotter /> */}
    </div>
  );
};

export default Product_Sidebar;
