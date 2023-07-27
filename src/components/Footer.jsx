import React from 'react'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import home from '../assets/home.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg' 
import copyright from '../assets/copyrightt.svg'

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='flex flex-col md:flex-row justify-between items-center max-w-[1540px] mx-auto'>
        <div className='flex flex-col justify-center text-center md:text-start text-white m-4 p-4 w-[300px]'>
            <h1 className='uppercase underline underline-offset-8 decoration-2 font-Ubuntu'>contact</h1>
            <div className='flex justify-start items-start text-center text-white gap-2 pt-4'>
                <img src={phone} alt="" className='text-white w-[20px] h-[20px] font-Quicksand'/>
                <p>9252428262</p>
            </div>
            <div className='flex justify-start items-start text-center text-white gap-2 pt-2 font-Quicksand'>
                <img src={mail} alt="" className='text-white w-[20px] h-[20px]'/>
                <p>teammaverick@gmail.com</p>
            </div>
            <div className='flex justify-start items-start text-start text-white gap-2 pt-2'>
                <img src={home} alt="" className='text-white w-[20px] h-[20px] font-Quicksand'/>
                <p>Graphic Era (Deemed to be University) 566/6, Bell Road, Clement Town Dehradun, Uttarakhand 248002, India · Phone. Phone: 18002701280.</p>
            </div>
        </div>
        <div className='flex justify-start items-center gap-2 '>
            <img src={github} alt="" className='w-[60px] h-[60px]' />
            <img src={linkedin} alt="" className='w-[60px] h-[60px]'/>
            <img src={insta} alt="" className='w-[50px] h-[50px]'/>
            <img src={twitter} alt="" className='w-[60px] h-[60px]'/>
        </div>
        <div className='text-white text-xl flex flex-col justify-center items-center gap-3 mt-4 md:mt-0'>
            <h1>Get the latest updates: </h1>
            <form action="/">
                <input type="email" name="email" id="email" className='border-2 border-white p-4'/>
                <button className='border-2 border-white rounded-r-lg p-4 '>Subscribe</button>
            </form>
        </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center text-white gap-1 opacity-20 ml-[-35px] mt-4 md:mt-0'>
            <p>-Project Made by Team Maverick </p>
            <div className='flex justify-center items-center text-center text-white'>
                <img src={copyright} alt="" className='w-[20px] h-[20px]'/>
                <h1>2023 Sub-Z, All Rights Reserved</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer
