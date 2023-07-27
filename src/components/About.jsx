import React from 'react'
import ContentHead from './ContentHead'
import wave from '../assets/wave4.svg'

const About = () => {
  return (
    <div className='bg-bgcolor'>
      <ContentHead heading="About Us" subheading=""/>
      <div className='flex justify-center items-center text-center'>
        <div className='w-[400px] h-[700px] text-lg md:w-[1240px]  md:h-[700px] flex justify-center items-center bg-gradient-to-t from-gray-900 to-transparent text-center rounded-[20px] text-slate-200 font-Quicksand md:text-3xl'>
                <p className='p-6 font-semibold '><span className='text-bgcolor uppercase'>sub-</span><span className='text-red-600'>Z</span> is a Professional price tracker Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of price tracker, with a focus on dependability and price comparison and prediction. We're working to turn our passion for price tracker into a booming online website. We hope you enjoy our price tracker as much as we enjoy offering them to you. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quos commodi iure sequi est. Doloribus quis delectus sit distinctio cumque quisquam officiis consectetur aspernatur omnis impedit culpa, veritatis illo accusamus quaerat ipsam molestias dolor quibusdam inventore consequuntur totam ad commodi sunt ipsa. Aperiam soluta voluptatum voluptate distinctio! Adipisci, magni laudantium.</p>
        </div>
      </div>
      <div className='mt-[-50px] md:mt-[-200px]'>
        <img src={wave} alt="" />
      </div>
    </div>
  )
}

export default About
