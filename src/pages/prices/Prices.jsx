import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContentWrapper from "../../components/ContentWrapper";
import PriceCard from "../../components/PriceCard";
import image from "../../assets/carrots.jpg";

const Prices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/subz_data")
      .then((prices) => setPrices(prices.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="h-[400px] flex flex-col justify-center items-center text-center w-[100%]">
        <h1 className="text-3xl md:text-5xl font-extrabold font-Quicksand ">
          Check out the latest prices all over India.
        </h1>
        <div className="flex justify-center items-center w-[100%] pt-20 gap-8">
          <label htmlFor="sorting" className="text-xl font-semibold uppercase">
            Filter:{" "}
          </label>
          <button>State</button>
          <button>Vegetable</button>
          <button>Type</button>
        </div>
      </div>
      <div>
        <ContentWrapper>
          {prices.map((price, index) => {
            return (
              <div key={index} className="">
                <div className="">
                  <PriceCard
                    name={price.name}
                    state={price.state}
                    price={price.price}
                    img={price.img}
                  />
                </div>
              </div>
            );
          })}
        </ContentWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Prices;
