import React from "react";
// import heropred1 from '../assets/heropred2.jpg';
import onions from "../assets/onion.jpg";
import potatoes from "../assets/carrots.jpg";
import tomatoes from "../assets/Tomatoes.jpg";
import CardPred2 from "./CardPred2";
import BarPred from "./BarPred";

const HeroPred = () => {
  return (
    <div className="w-full h-full relative z-10">
      {/* <img src={heropred1} className='h-full w-full object-cover relative z-[-1]'/> */}
      <div className="absolute h-[946px] w-[500px] top-[9%] left-0 bg-blue-800/40 hover:bg-blue-700/40">
        <CardPred2 img={tomatoes} name="Tomatoes" />
        <CardPred2 img={onions} name="Onions" />
        <CardPred2 img={potatoes} name="Potatoes" />
      </div>
      <div className="absolute h-[946px] w-[1019px] top-[9%] left-[500px] bg-gray-800/40">
        <BarPred />
      </div>
    </div>
  );
};

export default HeroPred;
