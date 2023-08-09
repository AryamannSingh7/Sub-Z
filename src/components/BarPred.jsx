import React, { useState } from "react";
import Chart from "react-apexcharts";


const BarPred=()=> {
  const [state, setState] = useState({
    options: {
      colors: ["#C19A6B", "#870D63", "#AF1313"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [23, 24, 25, 26, 27, 28, 29],
      },
    },
    series: [
      {
        name: "Potato",
        data: [30, 32, 32, 32, 31, 31, 32],
      },
      {
        name: "Onion",
        data: [22, 27, 27, 27, 27, 27, 26],
      },
      {
        name: "Tomato",
        data: [108, 91, 91, 91, 82, 82, 120],
      },
    ],
  });
  return (
    <div className='flex flex-col items-center'>
      
      <div className="row bg-gray-300 py-1 mt-1">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="475"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="475"
          />
        </div>
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="475"
          />
        </div>
      </div>
    </div>
  );
}

export default BarPred;
