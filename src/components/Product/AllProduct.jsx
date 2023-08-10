import React from "react";
import ProductCard from "./ProductCard";
import img1 from "../../assets/Products/1.jpeg";
import img2 from "../../assets/Images/2.png";
import img3 from "../../assets/Images/3.png";
import img4 from "../../assets/Images/4.png";
import img5 from "../../assets/Products/2.jpeg";
import "./AllProduct.css";

const AllProduct = () => {
  const products = [
    {
      id: 1,
      productimage: img1,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 12,
    },
    {
      id: 2,
      productimage: img2,
      productname: "Product 2",
      productprice: 100,
      counttype: "1 per kg",
      discountpercentage: 12,
    },
    {
      id: 3,
      productimage: img3,
      productname: "Product 3",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 14,
    },
    {
      id: 4,
      productimage: img4,
      productname: "Product 4",
      productprice: 100,
      counttype: "1 per kg",
      discountpercentage: 12,
    },
    {
      id: 5,
      productimage: img5,
      productname: "Product 5",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 12,
    },
    {
      id: 1,
      productimage: img1,
      productname: "Product 1",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 12,
    },
    {
      id: 2,
      productimage: img2,
      productname: "Product 2",
      productprice: 100,
      counttype: "1 per kg",
      discountpercentage: 12,
    },
    {
      id: 3,
      productimage: img3,
      productname: "Product 3",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 14,
    },
    {
      id: 4,
      productimage: img4,
      productname: "Product 4",
      productprice: 100,
      counttype: "1 per kg",
      discountpercentage: 12,
    },
    {
      id: 6,
      productimage: img2,
      productname: "Product 2",
      productprice: 100,
      counttype: "1 each",
      discountpercentage: 12,
    },
  ];
  return (
    <div className="allproducts">
      <h1>All Products</h1>
      <div className="products">
        {products.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
