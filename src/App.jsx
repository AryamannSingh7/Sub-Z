import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Prediction from "./pages/prediction/Prediction";
import Categories from "./pages/categories/Categories";
import Prices from "./pages/prices/Prices";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
