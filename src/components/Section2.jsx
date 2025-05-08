import React from 'react'
import { Link } from 'react-router-dom'
import f4 from '../assets/img/f4.png'
import f5 from '../assets/img/f5.png'
import f6 from '../assets/img/f6.png'
import useAOS from '../hooks/useAOS'

export default function Section2() {
    // Initialize AOS animations
    useAOS();

    return (
        <div className='py-16 md:py-20'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* first box */}
                    <div
                        className='bg-[#EFF5E9] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
                        data-aos="fade-right"
                    >
                        <div className='flex flex-col md:flex-row items-center p-6'>
                            <div className='md:w-1/2 mb-6 md:mb-0 md:pr-6'>
                                <p className='text-[#80B600] font-bold mb-2'>Special Offer</p>
                                <h3 className='text-2xl md:text-3xl font-bold mb-3'>Green Lemon <br/> Orange Juice</h3>
                                <p className='text-gray-600 mb-6'>BEST ORANGE FLAVOR YOU NEVER MISS</p>
                                <Link to="/shop" className='inline-block bg-[#80B600] text-white font-bold py-2 px-6 rounded-md hover:bg-[#6a9900] transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                                    Shop Now
                                </Link>
                            </div>
                            <div className='md:w-1/2 flex justify-center'>
                                <img
                                    src={f4}
                                    className='max-w-full h-auto transform transition-transform duration-700 hover:scale-110'
                                    alt="Green Lemon Orange Juice"
                                />
                            </div>
                        </div>
                    </div>

                    {/* second box - stacked */}
                    <div className='flex flex-col gap-6' data-aos="fade-left">
                        <div className='bg-[#EFF5E9] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex flex-col md:flex-row items-center p-6'>
                                <div className='md:w-1/2 mb-6 md:mb-0 flex justify-center'>
                                    <img
                                        src={f5}
                                        className='max-w-full h-auto transform transition-transform duration-700 hover:scale-110'
                                        alt="Almond Seeds"
                                    />
                                </div>
                                <div className='md:w-1/2'>
                                    <p className='text-[#80B600] font-bold mb-2'>Limited Time</p>
                                    <h3 className='text-xl md:text-2xl font-bold mb-2'>Up to 15% off Fresh Almond Seed</h3>
                                    <p className='text-[#80B600] font-bold text-xl'>From $69.99</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#EFF5E9] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'>
                            <div className='flex flex-col md:flex-row items-center p-6'>
                                <div className='md:w-1/2 mb-6 md:mb-0 md:pr-6'>
                                    <p className='text-[#80B600] font-bold mb-2'>Special Deal</p>
                                    <h3 className='text-xl md:text-2xl font-bold mb-3'>Up to 50% off Fresh Mango Drinks</h3>
                                    <Link to="/shop" className='inline-block bg-[#80B600] text-white font-bold py-2 px-6 rounded-md hover:bg-[#6a9900] transition-all duration-300 transform hover:scale-105 hover:shadow-lg'>
                                        Shop Now
                                    </Link>
                                </div>
                                <div className='md:w-1/2 flex justify-center'>
                                    <img
                                        src={f6}
                                        className='max-w-full h-auto transform transition-transform duration-700 hover:scale-110'
                                        alt="Mango Drinks"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
