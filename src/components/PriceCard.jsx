import React from "react";

const PriceCard = ({ img, name, state, price, handleClick, item }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl mb-10 rounded-3xl m-2 p-1 bg-gradient-to-tr from-[#d1cdff] to-[#b8ff68]">
        <figure className="px-10 pt-10 object-cover w-full h-[400px]">
          <img
            src={`${img}`}
            alt="Shoes"
            className="rounded-xl w-full h-full object-cover "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-Quicksand font-extrabold text-2xl">
            {name}
          </h2>
          <p>
            <span className="font-bold font-Quicksand">State: </span>
            {state}
          </p>
          <div className="card-actions flex flex-col flex-wrap">
            <button className="font-Quicksand font-extrabold text-2xl mt-2 bg-gray-900 text-yellow-100 rounded p-2 w-full ">
              ₹{price}/kg
            </button>
            <button
              className="font-Quicksand font-extrabold text-2xl mt-2 bg-orange-600 text-gray-100 rounded p-2 w-full "
              onClick={() => handleClick(item)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
