import React from 'react'

import f4 from '../assets/img/f4.png'
import f5 from '../assets/img/f5.png'
import f6 from '../assets/img/f6.png'

export default function Section2() {
    return (
        <div className='px-10 mt-20 mb-20 md:px-40'>

            <div className='md:flex justify-evenly'>

                {/* first box */}
                <div className='bg-[#EFF5E9] w-[400px] h-[340px] flex justify-evenly rounded-md'>
                    <div className='ml-10'>
                        <p className='mt-10 font-serif text-xl'>Green Lemon</p>
                        <p className='font-serif text-lg font-semibold'>Orange Juice</p>
                        <p className='mt-4 text-[#ABB5AD] text-lg'>BEST ORANGE <br /> FLAVOR YOU NEVER MISS</p>
                        <button className='p-3 px-4 rounded-md mt-5 font-bold text-white  bg-[#80B600]'>Shop Now</button>
                    </div>
                    <div>
                        <img src={f4} className='w-60 ' alt="" />
                    </div>
                </div>

                {/* second box */}
                <div className='flex flex-col gap-6 mt-10 md:mt-0'>

                    <div className='bg-[#EFF5E9] md:w-[500px] h-[150px] flex justify-evenly rounded-md'>
                        <div>
                            <img src={f5} className='w-[180px] ' alt="" />
                        </div>
                        <div className='flex flex-col mt-5 ml-10 mr-10 md:mt-10'>

                            <p className='font-semibold md:text-lg'>Up to 15% off Fresh </p>
                            <p className='mt-2 font-serif font-bold md:text-lg'>Almond Seed</p>
                            <p className='text-[#80B600] md:text-xl font-bold'>From 69.99</p>

                        </div>
                    </div>

                    <div className='bg-[#EFF5E9] md:w-[500px] h-[150px] flex justify-evenly rounded-md'>

                        <div className='flex flex-col mt-10 ml-10 mr-10'>
                            <p className='font-semibold md:text-lg'>Up to 50% off Fresh </p>
                            <p className='mt-2 font-serif font-bold md:text-lg'>Mango Drinks</p>
                            <button className='bg-[#80B600] text-white mt-3 p-2 rounded-md'>Shop Now</button>
                        </div>
                        <div>
                            <img src={f6} className='w-[160px]' alt="" />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
