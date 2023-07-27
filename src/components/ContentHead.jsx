import React from 'react'

const ContentHead = (props) => {
  return (
    <div className='z-30'>
      <div className='flex justify-center items-center pt-20 pb-20'>
          <div className='text-slate-200 bg-gradient-to-br from-green-400 to-green-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-[20px] text-3xl w-[300px] h-[100px] md:w-[500px] md:text-5xl flex justify-center items-center text-center hover:cursor-pointer shadow-[5px_5px_0px_0px_rgba(0,0,0)] uppercase font-Quicksand font-semibold'>
              <h1>{props.heading}</h1>
          </div>
      </div>
      <div>
        <h1 className='w-full h-full flex justify-center text-center font-Quicksand text-yellow-200 text-3xl md:text-5xl'>{props.subheading}</h1>
      </div>
    </div>

  )
}

export default ContentHead

