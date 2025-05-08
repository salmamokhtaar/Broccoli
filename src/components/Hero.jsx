import React from 'react'
import { Link } from 'react-router-dom'
import food from '../assets/img/f2.png'

export default function Hero() {
  return (
    <div className='bg-[#F7F4EB] py-16 md:py-24'>
      <div className='container mx-auto px-4'>
        <div className='md:flex md:justify-between items-center'>
          {/* Left text */}
          <div className='text-center md:text-left md:w-1/2'>
            <p className='text-[#80B600] font-bold mb-4'>100% Genuine Organic Products</p>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              Tasty & Healthy <br className='hidden md:block' /> Organic Food
            </h1>
            <p className='text-gray-600 mb-8 max-w-lg mx-auto md:mx-0'>
              Discover the freshest organic produce, sustainably grown and delivered straight to your door. 
              Nourish your body with nature's best.
            </p>
            <Link 
              to="/shop" 
              className='inline-block bg-[#80B600] text-white font-bold py-3 px-8 rounded-md hover:bg-[#6a9900] transition-colors'
            >
              Shop Now
            </Link>
          </div>
          
          {/* Right image */}
          <div className='mt-12 md:mt-0 md:w-1/2 flex justify-center'>
            <img
              src={food}
              alt="Delicious organic food"
              className="max-w-full md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
