import React from 'react'
import image1 from '../assets/image/R.jpg'

function Analytice() {
  return (
    <div className='py-20' data-aos='fade-down'>
        <h1 data-aos='fade-down' data-aos-once='true' className='text-center text-3xl md:text-4xl mb-16 font-bold text-teal-500'>About Us</h1>
        <div className='max-w-7xl m-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
        <div data-aos='fade-right' className=''>
            <img src={image1} alt="" className='rounded-md'/>
        </div>
        <div data-aos='fade-left' data-aos-once='true' className='max-md:text-center'>
            <h1 className='text-2xl md:text-2xl lg:text-4xl font-medium text-teal-500 drop-shadow-2xl shadow-black'>Sophon Space Announces Groundbreaking</h1>
            <p className='py-2 font-medium text-gray-600'>July 5, 2024</p>
            <p className='text-gray-600 text-sm lg:text-lg mb-1'>Sophon Space, a pioneering force in the field of aerospace technology, has announced a series of groundbreaking advancements that promise to revolutionize space exploration. </p>
            <p className='text-gray-600 text-sm lg:text-lg'>We envision a future where space exploration is a cornerstone of human progress. Our goal is to lead the charge in advancing space technologies, fostering international collaboration, and inspiring curiosity about the universe.</p>
            <div id='dog2' className='py-10 md:py-4'><a href="https://t.me/sophonspace1" className='bg-blue-500 px-2 py-2 rounded-md font-medium text-white hover:bg-blue-400 duration-300'>Contact Us</a></div>
        </div>
    </div>
    </div>
  )
}
     
export default Analytice