import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Prices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getPrices")
      .then((prices) => setPrices(prices.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-full h-screen">
        {prices.map((price) => {
          return <h3>{price.name}</h3>;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Prices;
