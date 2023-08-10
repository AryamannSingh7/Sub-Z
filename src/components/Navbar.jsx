import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/logo2svg2 1.svg";
import Menu from "../assets/menu.svg";
import close from "../assets/closel.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full mx-auto absolute z-50">
      <div className="px-4 h-[94px] max-w-[1640px] mx-auto flex items-center justify-between z-10">
        <img
          className="h-[100px] w-[120px] mt-4 cursor-pointer"
          src={Logo}
          alt="logo"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex gap-[45px] items-center justify-center uppercase font-Ubuntu text-white text-[22px]">
          <li
            className=" hover:text-yellow-200 hover:underline hover:underline-offset-8 hover:decoration-4 ease-in-out duration-100 hover:scale-x-105"
            onClick={() => {
              navigate("/");
            }}
          >
            <a href="#">Home</a>
          </li>
          <li
            className=" hover:text-yellow-200 hover:underline underline-offset-8 hover:decoration-4 ease-in-out duration-100 hover:scale-x-105 hover:cursor-pointer"
            onClick={() => {
              navigate("/categories");
            }}
          >
            categories
          </li>
          <li
            className=" hover:text-yellow-200 hover:underline underline-offset-8 hover:decoration-4 ease-in-out duration-100 hover:scale-x-105"
            onClick={() => {
              navigate("/prediction");
            }}
          >
            <a href="#">prediction</a>
          </li>
          <li className=" hover:text-yellow-200 hover:underline underline-offset-8 hover:decoration-4 ease-in-out duration-100 hover:scale-x-105">
            <a href="#">about</a>
          </li>
          <li className=" hover:text-yellow-200 hover:underline underline-offset-8 hover:decoration-4 ease-in-out duration-100 hover:scale-x-105">
            <a href="#">contact</a>
          </li>
        </ul>
        <div className="p-7 flex justify-center items-center">
          {isAuthenticated ? (
            <button
              className="hidden md:flex justify-center items-center w-[100px] h-[40px] border-slate-200 border-2 rounded-[10px] bg-main text-white py-[12px] px-[14px]  hover:bg-blue-900 hover:scale-105 hover:ease-in-out duration-150 font-Ubuntu uppercase"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button
              className="hidden md:flex justify-center items-center w-[80px] h-[40px] border-slate-200 border-2 rounded-[10px] bg-main text-white py-[12px] px-[14px]  hover:bg-blue-900 hover:scale-105 hover:ease-in-out duration-150 font-Ubuntu uppercase"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          )}
        </div>
        {/*<button className='hidden md:flex justify-center items-center w-[80px] h-[40px] border-slate-200 border-2 rounded-[10px] bg-main text-white py-[12px] px-[14px]  hover:bg-blue-900 hover:scale-105 hover:ease-in-out duration-150 font-Ubuntu uppercase' onClick={() => loginWithRedirect()}>Login</button>*/}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <div>
              <img src={Menu} alt="" />
            </div>
          ) : (
            <div>
              <img src={close} alt="" />
            </div>
          )}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[40%] h-full border-r-2 border-r-main bg-[#CCFF5F] ease-in-out duration-500 z-50"
              : "fixed h-full left-[-100%]"
          }
        >
          <img
            className="h-[100px] w-[120px] mt-4 ml-4"
            src={Logo}
            alt="logo"
          />
          <ul className="uppercase p-4">
            <li className="p-4 border-b-[1px] border-yellow-200">
              <a href="#">Home</a>
            </li>
            <li className="p-4 border-b-[1px] border-yellow-200">
              <a href="#">categories</a>
            </li>
            <li className="p-4 border-b-[1px] border-yellow-200">
              <a href="#">prediction</a>
            </li>
            <li className="p-4 border-b-[1px] border-yellow-200">
              <a href="#">about</a>
            </li>
            <li className="p-4 border-main">
              <a href="#">contact</a>
            </li>
          </ul>
          <div className="p-7 flex justify-center items-center">
            {isAuthenticated ? (
              <button
                className="w-[249px] h-[40px] border-yellow-100 border-2 rounded-[10px] bg-main text-white py-[12px] px-[14px] flex justify-center items-center"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                className="w-[249px] h-[40px] border-yellow-100 border-2 rounded-[10px] bg-main text-white py-[12px] px-[14px] flex justify-center items-center"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
            {/*<button className='w-[249px] h-[40px] border-yellow-100 border-2 rounded-[10px] bg-main text-white py-[12px] px-[14px] flex justify-center items-center' >Login</button>*/}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-main flex-shrink-0"></div>
    </div>
  );
};

export default Navbar;
