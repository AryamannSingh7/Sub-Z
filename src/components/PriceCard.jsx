import React from "react";

const PriceCard = ({ img, name, state, price }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mb-10 rounded-3xl m-2 p-1">
        <figure className="px-10 pt-10 object-cover w-full h-[400px]">
          <img
            src={`${img}`}
            alt="Shoes"
            className="rounded-xl w-full h-full object-cover "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-Ubuntu font-extrabold text-xl">
            {name}
          </h2>
          <p>
            <span className="font-bold font-Quicksand">State: </span>
            {state}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary mb-8">Rs. {price}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
