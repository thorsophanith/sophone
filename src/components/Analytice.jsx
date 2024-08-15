import React from 'react'
import image1 from '../assets/image/R.jpg'

function Analytice() {
  return (
    <div className='py-20' data-aos='fade-down'>
        <h1 data-aos='fade-down' data-aos-once='true' className='text-center text-3xl md:text-4xl mb-16 font-bold text-teal-500'>About Us</h1>
        <div className='max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
        <div  className=''>
            <img src={image1} alt="" className='rounded-md'/>
        </div>
        <div className='max-md:text-center'>
            <h1 data-aos='fade-down' data-aos-delay='600' className='text-2xl md:text-xl lg:text-3xl font-medium text-teal-500 drop-shadow-2xl shadow-black mb-3'>SOPHON SPACE MEDIA CO.,LTD was established in 2023.</h1>
            <p data-aos='fade-up' data-aos-delay='200' className='text-gray-600 mb-2 text-sm lg:text-base'>SPACE MEDIA CO.,LTD was established as a fully advertising service company that provide services including Advertising Services.
            We have built our reputation by performing the highest quality works to all industries. Today, we are recognized as a reliable contractor for the driven-knowledge and highly responsible in the assigned duties by our clients.</p>
            <p data-aos='fade-up' data-aos-delay='400' className='text-gray-600 text-sm lg:text-base'>SOPHON SPACE MEDIA Co., Ltd has a strong professional team with many employees who provide the highest quality services on schedule and within the budget. Our people and successful backgrounds enable clients to the allure of working with us.</p>
            <div data-aos='fade-up' data-aos-delay='600' id='dog2' className='py-10 md:py-4'><a href="https://t.me/sophonspace" className='bg-blue-500 px-2 py-2 rounded-md text-sm text-white hover:bg-blue-400 duration-300'>Contact Us</a></div>
        </div>
    </div>
    </div>
  )
}
     
export default Analytice