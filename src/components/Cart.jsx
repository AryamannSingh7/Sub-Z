import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentWrapper from "./ContentWrapper";
import logo from "../assets/logo2svg2 1.svg";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleCart = () => {
    axios
      .post("http://localhost:3000/cart", {
        cart: cart,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (am) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline....Failed to Load!");
      return;
    }

    const options = {
      key: "rzp_test_TsB8lzaQX4hk6H",
      currency: "INR",
      amount: price * 100,
      name: "SubZ",
      desription: "Thanks for your order!",
      image: `{${logo}}`,

      handler: function (response) {
        alert("Payment Successfull! " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Team Maverick",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id != _id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="w-[1250px] mx-auto bg-gradient-to-tr from-[#d1cdff] to-[#b8ff68] p-4 rounded-3xl mb-4">
      <h2 className="flex justify-center text-center items-center w-full bg-main h-14 font-Quicksand text-yellow-200 text-4xl rounded-2xl mb-4">
        Order Summary
      </h2>
      {cart.length === 0 && (
        <div>
          <h1 className="flex justify-center items-center text-center text-xl font-Quicksand font-semibold">
            Cart is empty!
          </h1>
        </div>
      )}
      {cart.length !== 0 && (
        <div>
          {cart.map((item) => (
            <div>
              <div
                key={item._id}
                className="flex justify-between items-center text-center p-4"
              >
                <div className="flex justify-center items-center text-center gap-4">
                  <img
                    src={item.img}
                    className="w-[150px] h-[110px] rounded-2xl"
                  />
                  <p className="text-3xl font-Quicksand text-gray-900 font-extrabold">
                    {item.name}
                  </p>
                </div>
                <div className="flex justify-center items-center text-center gap-4 font-Quicksand font-medium text-xl">
                  <button
                    onClick={() => handleChange(item, -1)}
                    className="bg-red-400 w-[30px] rounded-full border-green-600 border-1"
                  >
                    -
                  </button>
                  <button>{item.amount}</button>
                  <button
                    onClick={() => handleChange(item, 1)}
                    className="bg-green-400 w-[30px] rounded-full border-green-600 border-1"
                  >
                    +
                  </button>
                  <div className="flex justify-center items-center text-center gap-4">
                    <span className="font-bold">₹{item.price}</span>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="bg-red-400 w-[100px] rounded-full border-green-600 border-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <hr className="w-[1200px] bg-main mb-4" />
              </div>
            </div>
          ))}
          <div>
            <span className="flex justify-center items-center text-center text-3xl font-Quicksand font-extrabold text-gray-900">
              SubTotal:{" "}
            </span>
            <span className="flex justify-center items-center text-center text-3xl font-Quicksand font-extrabold text-gray-900">
              ₹{price}
            </span>
          </div>
          <div className="flex justify-center items-center text-center">
            <button
              className="flex justify-center items-center text-center p-2 m-4 bg-orange-600 border-1 border-orange-700 font-Quicksand font-semibold text-2xl text-yellow-200 rounded-3xl"
              onClick={() => {
                handleCart();
                displayRazorpay(price);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
