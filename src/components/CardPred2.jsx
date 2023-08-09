import React from 'react'
import { BarPredGen } from './BarPredGen'

const CardPred2 = (props) => {
  return (
    <div className='flex flex-col items-center py-2 z-20 hover:scale-105 hover:cursor-point hover:ease-in-out duration-300'>
      <div className='flex bg-white h-[250px] w-[300px] rounded-[20px] items-center justify-center'><img src={props.img} className='object-cover h-[95%] w-[95%] rounded-[20px]'/></div>
      <div className="w-56 md:w-64 bg-gradient-to-br from-yellow-300 to-yellow-500 -mt-10 shadow-lg rounded-lg overflow-hidden">
    <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 font-Ubuntu">{props.name}</div>
    <div className="flex items-center justify-center py-2 px-3 bg-yellow-200">
      <BarPredGen/>   
        </div></div>
    </div>
  )
}

export default CardPred2
