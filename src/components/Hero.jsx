import React from 'react'
import { ReactTyped } from 'react-typed'

function Hero() {
  return (
    <div className='shadow-md'>
    <div className='text-center py-52'>
    <p className='uppercase text-teal-600 font-serif'>we are hiring!</p>
     <h1 className='text-4xl md:text-6xl mb-5 font-bold text-teal-500 drop-shadow-2xl shadow-black'>Sophon Space.</h1>
     <div>
        <p className='text-2xl md:text-4xl font-medium font-serif text-gray-400'>I, Am a : <ReactTyped className='text-blue-600'
      strings={[
        "Front End Developer",
        "Full Stack",
        "Thor Sophanith",
      ]}
      typeSpeed={150}
      backSpeed={150}
      loop
    /></p>
    <p className='mt-2 text-lg text-gray-400 px-4'>Bachelor’s degree in computer science, computer engineering, or information technology.</p>
     </div>
     <div className='mt-12 flex gap-5 justify-center'>
        <a href="" className='bg-blue-500 px-3 py-2 text-gray-100 rounded-md hover:bg-blue-400 duration-300 hover:text-black font-medium'>facebook</a>
        <a href="" className='bg-teal-500 px-3 py-2 text-gray-100 rounded-md hover:bg-teal-400 duration-300 hover:text-black font-medium'>telegram</a>
     </div>
    </div>
    </div>
  )
}

export default Hero