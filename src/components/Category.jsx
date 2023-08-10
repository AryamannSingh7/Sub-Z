import React, { useState } from "react";
import Categories from "./Categories";
// import Navbar from './Navbar';

const Category = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.Category === catItem;
    });
    setData(result);
  };
  return (
    <>
      <div className="container-fluid mx-2 mt-5">
        <div clasName="row mt-5 mx-2">
          <div className="col-md-3">
            <button
              className="btn btn-success w-100 mb-4"
              onClick={() => filterResult("Leafy")}
            >
              Leafy Green
            </button>
            <button
              className="btn btn-success w-100 mb-4"
              onClick={() => filterResult("Cruciferous")}
            >
              Cruciferous{" "}
            </button>
            <button
              className="btn btn-success w-100 mb-4"
              onClick={() => filterResult("Marrow")}
            >
              Marrow
            </button>
            <button
              className="btn btn-success w-100 mb-4"
              onClick={() => filterResult("Root")}
            >
              Root{" "}
            </button>
            <button
              className="btn btn-success w-100 mb-4"
              onClick={() => filterResult("Alluim")}
            >
              Allium
            </button>
            <button
              className="btn btn-success w-100 mb-4"
              onClick={() => filterResult("Chilli")}
            >
              Chillies
            </button>
            <button
              className="btn btn-success w-100 mb-4"
              onClick={() => setData(Categories)}
            >
              All
            </button>
          </div>
          <h1 className="text-center text-dark">All Products</h1>
          <div className="col-md-11 ml-12">
            <div className="row">
              {data.map((values) => {
                const { id, title, price, image } = values;
                return (
                  <>
                    <div className="col-md-3 mb-4" key={id}>
                      <div className="card">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p>Price: {price}</p>
                          <p>1kg</p>
                          <p className="card-text"></p>
                          <button className="btn btn-success">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
