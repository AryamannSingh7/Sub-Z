import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col justify-center items-center max-w-sm mx-auto my-8 py-4 hover:scale-110 hover:cursor-pointer hover:ease-in-out duration-300' >
  <div className={`bg-gray-300 h-[300px] w-[200px] md:h-[500px] md:w-[400px] rounded-[20px] shadow-md bg-cover bg-center bg-${props.img}`}></div>
  <div className="w-56 md:w-64 bg-gradient-to-br from-green-400 to-green-800 -mt-10 shadow-lg rounded-lg overflow-hidden">
    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 font-Ubuntu">{props.name}</div>
    <div className="flex items-center justify-between py-2 px-3 bg-green-400">
      <h1 className="text-gray-800 font-bold text-lg">{props.price}</h1>
      <button className=" bg-gray-800 text-sm text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700 font-Quicksand">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card
