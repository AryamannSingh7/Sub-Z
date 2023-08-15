import React from "react";
import Navbar from "./Navbar";
import Footer from "../../components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Category from "./Category";

const Categories = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Footer />
    </div>
  );
};

export default Categories;
