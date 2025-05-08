import React from 'react'

import f7 from '../assets/img/f7.png'
import f8 from '../assets/img/f8.png'
import f9 from '../assets/img/f9.png'
import f10 from '../assets/img/f10.png'
import f11 from '../assets/img/f11.png'
import f12 from '../assets/img/f12.png'
import f13 from '../assets/img/f13.png'
import f14 from '../assets/img/f14.png'

import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default function Section3() {
    return (
        <div className='mt-32 mb-32'>
            <h1 className='mb-10 font-mono text-3xl font-extrabold text-center'>OUR PRODUCTS</h1>

            {/* first div */}
            <div className='px-32 space-y-10 md:space-y-0 md:flex md:justify-evenly'>
                {/* div1 */}
                <div className='bg-[#FFFFFF] shadow-lg w-[220px] h-[340px] '>
                    {/* icons */}
                    <div className='bg-[#F9F9F9] w-[220px] h-[200px]'>
                        <img src={f7} className='pt-10 mx-auto w-50' alt="" />
                    </div>
                    <div className='flex justify-center gap-1 mt-5 text-yellow-600'>
                        <FaRegStar className='' />
                        <FaRegStar className='' />
                        <FaRegStar className='' />
                        <FaRegStar className='' />

                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <p className='text-lg font-bold'>0.5 Product</p>
                        <p className='text-[#80B600] font-bold text-xl'>$39.00</p>
                    </div>

                </div>
                {/* div2 */}
                <div className='bg-[#FFFFFF] shadow-lg w-[220px] h-[340px] '>
                    {/* icons */}
                    <div className='bg-[#F9F9F9] w-[220px] h-[200px]'>
                        <img src={f8} className='pt-10 mx-auto w-44' alt="" />
                    </div>
                    <div className='flex justify-center gap-1 mt-5 text-yellow-600'>
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />

                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <p className='text-lg font-bold'>0.5 Product</p>
                        <p className='text-[#80B600] font-bold text-xl'>$39.00</p>
                    </div>

                </div>
                {/* div3 */}
                <div className='bg-[#FFFFFF] shadow-lg w-[220px] h-[340px] '>
                    {/* icons */}
                    <div className='bg-[#F9F9F9] w-[220px] h-[200px]'>
                        <img src={f9} className='w-48 pt-10 mx-auto' alt="" />
                    </div>
                    <div className='flex justify-center gap-1 mt-5 text-yellow-600'>
                        <FaStar className='' />
                        <FaStar className='' />
                        <FaStar className='' />
                        <FaStar className='' />

                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <p className='text-lg font-bold'>0.5 Product</p>
                        <p className='text-[#80B600] font-bold text-xl'>$39.00</p>
                    </div>

                </div>
                {/* div4 */}
                <div className='bg-[#FFFFFF] shadow-lg w-[220px] h-[340px] '>
                    {/* icons */}
                    <div className='bg-[#F9F9F9] w-[220px] h-[200px]'>
                        <img src={f10} className='w-48 pt-10 mx-auto' alt="" />
                    </div>
                    <div className='flex justify-center gap-1 mt-5 text-yellow-600'>
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />

                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <p className='text-lg font-bold'>0.5 Product</p>
                        <p className='text-[#80B600] font-bold text-xl'>$39.00</p>
                    </div>

                </div>
            </div>

            {/* second div */}
            <div className='px-32 mt-10 space-y-10 md:space-y-0 md:flex md:justify-evenly'>
                {/* div1 */}
                <div className='bg-[#FFFFFF] shadow-lg w-[220px] h-[340px] '>
                    {/* icons */}
                    <div className='bg-[#F9F9F9] w-[220px] h-[200px]'>
                        <img src={f11} className='pt-10 mx-auto w-44' alt="" />
                    </div>
                    <div className='flex justify-center gap-1 mt-5 text-yellow-600'>
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />

                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <p className='text-lg font-bold'>0.5 Product</p>
                        <p className='text-[#80B600] font-bold text-xl'>$39.00</p>
                    </div>

                </div>
                {/* div2 */}
                <div className='bg-[#FFFFFF] shadow-lg w-[220px] h-[340px] '>
                    {/* icons */}
                    <div className='bg-[#F9F9F9] w-[220px] h-[200px]'>
                        <img src={f12} className='pt-10 mx-auto w-44' alt="" />
                    </div>
                    <div className='flex justify-center gap-1 mt-5 text-yellow-600'>
                        <FaStar className='' />
                        <FaStar className='' />
                        <FaStar className='' />
                        <FaStar className='' />

                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <p className='text-lg font-bold'>0.5 Product</p>
                        <p className='text-[#80B600] font-bold text-xl'>$39.00</p>
                    </div>

                </div>
                {/* div3 */}
                <div className='bg-[#FFFFFF] shadow-lg w-[220px] h-[340px] '>
                    {/* icons */}
                    <div className='bg-[#F9F9F9] w-[220px] h-[200px]'>
                        <img src={f13} className='w-48 pt-10 mx-auto' alt="" />
                    </div>
                    <div className='flex justify-center gap-1 mt-5 text-yellow-600'>
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />
                        <FaStarHalfAlt className='' />

                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <p className='text-lg font-bold'>0.5 Product</p>
                        <p className='text-[#80B600] font-bold text-xl'>$39.00</p>
                    </div>

                </div>
                {/* div4 */}
                <div className='bg-[#FFFFFF] shadow-lg w-[220px] h-[340px] '>
                    {/* icons */}
                    <div className='bg-[#F9F9F9] w-[220px] h-[200px]'>
                        <img src={f14} className='w-48 pt-10 mx-auto' alt="" />
                    </div>
                    <div className='flex justify-center gap-1 mt-5 text-yellow-600'>
                        <FaRegStar className='' />
                        <FaRegStar className='' />
                        <FaRegStar className='' />
                        <FaRegStar className='' />

                    </div>
                    <div className="flex flex-col items-center justify-center mt-3 text-center">
                        <p className='text-lg font-bold'>0.5 Product</p>
                        <p className='text-[#80B600] font-bold text-xl'>$39.00</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
