import React from "react";
import ContentHead from "./ContentHead";
import Card from "./Card";
import arrow from "../assets/Arrow.svg";

const FeatureSection = () => {
  return (
    <div className="custombg relative z-20">
      <ContentHead
        heading="Featured"
        subheading="Have a look at this week's featured vegetables!"
      />
      <div className="left-[-40%] w-[200px] h-[800px] bottom-[63%] md:left-[-50%] rotate-[47deg] md:w-full md:h-[300px] absolute bg-blue-400 md:-rotate-[40deg] z-[-1] shadow-2xl"></div>
      <div className="left-[-40%] w-[200px] h-[800px]  bottom-[69%] rotate-[39deg] md:left-[-50%] md:w-full md:h-[300px] absolute bg-blue-600 md:-rotate-[55deg] z-[-1] shadow-2xl"></div>
      <div className=" left-[-40%] w-[200px] h-[800px] bottom-[72%] md:left-[-51%] rotate-[28deg] md:w-full md:h-[300px] absolute bg-blue-800 md:-rotate-[70deg] z-[-1] shadow-2xl"></div>
      <div className="w-full h-full flex flex-col justify-center items-center md:flex-row">
        <Card
          name="onions"
          img={`https://res.cloudinary.com/ddh5a1s8j/image/upload/v1691785043/onions-1397037_640_lg2dga.jpg`}
          price="₹80/kg"
        />
        <Card
          name="tomatoes"
          img={`https://res.cloudinary.com/ddh5a1s8j/image/upload/v1691785250/tomato-2282101_640_njlu1d.jpg`}
          price="₹120/kg"
        />
        <Card
          name="carrots"
          img={`https://res.cloudinary.com/ddh5a1s8j/image/upload/v1691783766/carrots_mwo0st.jpg`}
          price="₹60/kg"
        />
      </div>
      <div className="flex justify-center items-center p-10">
        <button className="w-[300px] h-[80px] flex justify-center items-center text-center text-4xl font-Quicksand text-yellow-50 border-2 border-white rounded-xl gap-2 hover:gap-5 hover:bg-bgcolor hover:ease-in-out duration-200">
          Browse <img src={arrow}></img>
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;
