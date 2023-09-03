import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarCart from "../../components/NavbarCart";
import Footer from "../../components/Footer";
import ContentWrapper from "../../components/ContentWrapper";
import PriceCard from "../../components/PriceCard";
import Cart from "../../components/Cart";
// import image from "../../assets/carrots.jpg";

const Prices = () => {
  const [prices, setPrices] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  // const records = prices.slice(firstIndex, lastIndex);
  const npage = Math.ceil(prices.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);
  const [cart, setCart] = useState([]);

  const handleClick = (prices) => {
    if (cart.indexOf(prices) !== -1) return;
    setCart([...cart, prices]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  // const onAdd = (prices) => {
  //   const exist = cartItems.find((x) => x._id === prices._id);
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x._id === prices._id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...prices, qty: 1 }]);
  //   }
  // };

  function prevPage() {
    if (currentPage !== firstIndex) setCurrentPage(currentPage - 1);
  }

  function nextPage() {
    if (currentPage !== lastIndex) setCurrentPage(currentPage + 1);
  }

  function changeCurrPage(id) {
    setCurrentPage(id);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/subz_data")
      .then((prices) => setPrices(prices.data))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/cart",{

  //     } )
  // }, []);
  return (
    <div>
      <NavbarCart />
      <div className="h-[400px] flex flex-col justify-center items-center text-center w-[100%]">
        <h1 className="text-3xl md:text-5xl font-extrabold font-Quicksand ">
          Check out the latest prices all over India.
        </h1>
        <div className="flex justify-center items-center w-[100%] pt-20 gap-8">
          <label htmlFor="sorting" className="text-xl font-semibold uppercase">
            Filter:{" "}
          </label>
          <form action="/">
            <input
              type="search"
              name="searchinput"
              id="search"
              className="rounded-2xl p-2 w-[300px] outline-none text-lg font-Quicksand font-semibold bg-gradient-to-tr from-[#d1cdff] to-[#b8ff68] "
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search State or Vegetable"
            />
          </form>
          {console.log(search)}
          {/* <div>
            <select
              name="state"
              id="state"
              className="border-none outline-none rounded-lg bg-main text-yellow-50 text-center font-Quicksand text-lg p-2"
            >
              <option value="default">Select your state</option>
              <option value="Delhi" onClick={() => setOpt("Delhi")}>
                Delhi
              </option>
              <option value="Uttarakhand" onClick={() => setSearch(value)}>
                Uttarakhand
              </option>
              <option value="Punjab">Punjab</option>
            </select>
          </div> */}
          {/* <button>Vegetable</button> */}
        </div>
      </div>
      <div>
        <ContentWrapper>
          {prices
            .filter((price) => {
              if (search === "") return price;
              else if (
                price.name.toLowerCase().includes(search.toLowerCase()) ||
                price.state.toLowerCase().includes(search.toLowerCase())
              ) {
                return price;
              }
            })
            .map((price, index) => {
              return (
                <div key={index} className="">
                  <div className="">
                    <PriceCard
                      name={price.name}
                      state={price.state}
                      price={price.price}
                      img={price.img}
                      item={price}
                      handleClick={handleClick}
                    />
                  </div>
                </div>
              );
            })
            .slice(firstIndex, lastIndex)}
        </ContentWrapper>
        <ContentWrapper>
          <nav className="flex justify-center items-center w-[1200px] m-4 relative">
            <ul className="relative mt-5 flex justify-between text-center items-center bg-yellow-200 w-[100%] mb-5 rounded-3xl text-2xl font-Quicksand font-extrabold">
              <li className="p-5 hover:bg-yellow-100 hover:cursor-pointer hover:ease-in duration-100 hover:rounded-2xl">
                <a href="#" onClick={prevPage}>
                  Prev
                </a>
              </li>
              {number.map((n, i) => (
                <li
                  key={i}
                  className="p-5 hover:bg-yellow-300 hover:cursor-pointer hover:ease-in duration-100"
                >
                  <a href="#" onClick={() => changeCurrPage(n)}>
                    {n}
                  </a>
                </li>
              ))}
              <li className="p-5 hover:bg-yellow-100 hover:cursor-pointer hover:ease-in duration-100 hover:rounded-2xl">
                <a href="#" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </ContentWrapper>
      </div>
      <div>
        <ContentWrapper>
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        </ContentWrapper>
      </div>
      <Footer />
    </div>
  );
};

export default Prices;
