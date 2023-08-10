import React from "react";
import { useNavigate } from "react-router-dom";
import videobg from "../assets/videobg.mp4";
import arrow from "../assets/Arrow.svg";
import heroimg from "../assets/heroimg4.jpg";
import heroimg2 from "../assets/heroimg2.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen relative z-30">
      <video
        className="w-full h-full object-cover z-[-100]"
        src={videobg}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-full absolute bg-gray-900/30 top-0 left-0"></div>
      <div className="absolute top-0 w-full h-full flex flex-col-reverse md:flex-row">
        <div className=" top-0 w-full h-full flex flex-col justify-center text-center font-Quicksand font-semibold">
          <h1 className="text-4xl md:text-6xl text-slate-200">Find.</h1>
          <h1 className="text-4xl md:text-6xl text-yellow-400 mt-5">
            Compare.
          </h1>
          <h1 className="text-4xl md:text-6xl text-slate-200 mt-5">Save.</h1>
          <h3 className="text-xl md:text-2xl text-[#FEFEDF] mt-5 font-Ubuntu">
            A simple way to buy vegetables at the cheapest price.
          </h3>
          <div className=" mx-auto mt-12 mb-2 flex flex-col items-center md:flex-row justify-center md:gap-40 md:mb-0 md:mt-16">
            <button
              className="w-[300px] h-[60px] border-slate-100 border-2 font-Ubuntu rounded-[10px] bg-main text-white py-[12px] px-[14px] flex justify-center items-center uppercase font-semibold text-xl gap-1 hover:gap-3 hover:bg-blue-900 hover:scale-105 hover:ease-in-out duration-150"
              onClick={() => {
                navigate("/prices");
              }}
            >
              View Prices <img src={arrow} className="w-6"></img>
            </button>
            <button className="w-[300px] h-[60px] border-slate-100 border-2 rounded-[10px] font-Ubuntu bg-transparent text-white py-[12px] px-[14px] flex justify-center items-center uppercase font-semibold text-xl gap-1 hover:gap-3 hover:bg-gray-900 mt-5 md:mt-0 hover:scale-105 hover:ease-in-out duration-150 ">
              Predictions <img src={arrow} className="w-6"></img>
            </button>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center pt-[70px] relative">
          <div>
            <img
              src={heroimg}
              className="w-[250px] h-[250px] rounded-[40px] md:w-[400px] md:h-[500px] opacity-90 absolute top-[24%] left-[3%] md:top-[20%] md:left-[10%] shadow-2xl drop-shadow-2xl"
            ></img>
            <img
              src={heroimg2}
              className="w-[250px] h-[250px] rounded-[40px] md:w-[400px] md:h-[500px] opacity-90 absolute top-[38%] right-[3%] md:top-[40%] md:right-[20%] shadow-2xl drop-shadow-2xl"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
