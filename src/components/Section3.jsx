import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar, FaStarHalfAlt, FaStar, FaShoppingCart, FaEye, FaHeart } from "react-icons/fa"
import useAOS from '../hooks/useAOS'

import f7 from '../assets/img/f7.png'
import f8 from '../assets/img/f8.png'
import f9 from '../assets/img/f9.png'
import f10 from '../assets/img/f10.png'
import f11 from '../assets/img/f11.png'
import f12 from '../assets/img/f12.png'
import f13 from '../assets/img/f13.png'
import f14 from '../assets/img/f14.png'

export default function Section3() {
    // Initialize AOS animations
    useAOS();

    // Product data
    const products = [
        { id: 1, name: 'Fresh Apples', price: 39.00, image: f7, rating: 'empty', weight: '0.5 kg' },
        { id: 2, name: 'Organic Carrots', price: 29.00, image: f8, rating: 'half', weight: '0.5 kg' },
        { id: 3, name: 'Green Broccoli', price: 25.00, image: f9, rating: 'full', weight: '0.5 kg' },
        { id: 4, name: 'Fresh Tomatoes', price: 19.00, image: f10, rating: 'half', weight: '0.5 kg' },
        { id: 5, name: 'Red Peppers', price: 22.00, image: f11, rating: 'half', weight: '0.5 kg' },
        { id: 6, name: 'Organic Lettuce', price: 18.00, image: f12, rating: 'full', weight: '0.5 kg' },
        { id: 7, name: 'Fresh Cucumbers', price: 15.00, image: f13, rating: 'half', weight: '0.5 kg' },
        { id: 8, name: 'Organic Spinach', price: 24.00, image: f14, rating: 'empty', weight: '0.5 kg' },
    ];

    // Render star rating based on product rating type
    const renderRating = (ratingType) => {
        switch (ratingType) {
            case 'empty':
                return (
                    <>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </>
                );
            case 'half':
                return (
                    <>
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                    </>
                );
            case 'full':
                return (
                    <>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className='py-16 md:py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12' data-aos="fade-up">
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Products</h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Discover our selection of fresh, organic products sourced from trusted farmers
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className='group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300'
                            data-aos="fade-up"
                            data-aos-delay={product.id * 100}
                        >
                            {/* Product Image */}
                            <div className='bg-[#F9F9F9] h-48 p-4 flex items-center justify-center relative overflow-hidden'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className='max-h-full transition-transform duration-500 group-hover:scale-110'
                                />

                                {/* Quick Action Buttons - Appear on Hover */}
                                <div className='absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                    <div className='flex gap-2'>
                                        <button className='bg-white p-2 rounded-full hover:bg-[#80B600] hover:text-white transition-colors'>
                                            <FaShoppingCart />
                                        </button>
                                        <button className='bg-white p-2 rounded-full hover:bg-[#80B600] hover:text-white transition-colors'>
                                            <FaEye />
                                        </button>
                                        <button className='bg-white p-2 rounded-full hover:bg-[#80B600] hover:text-white transition-colors'>
                                            <FaHeart />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className='p-4'>
                                <div className='flex justify-center gap-1 text-yellow-500 mb-2'>
                                    {renderRating(product.rating)}
                                </div>
                                <h3 className='text-lg font-bold text-center mb-1 group-hover:text-[#80B600] transition-colors'>
                                    {product.name}
                                </h3>
                                <p className='text-gray-500 text-sm text-center mb-2'>{product.weight}</p>
                                <p className='text-[#80B600] font-bold text-xl text-center'>${product.price.toFixed(2)}</p>

                                {/* Add to Cart Button - Visible on Mobile, Hidden on Desktop until Hover */}
                                <div className='mt-4 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <Link
                                        to={`/product/${product.id}`}
                                        className='block w-full py-2 bg-[#80B600] text-white text-center rounded hover:bg-[#6a9900] transition-colors'
                                    >
                                        View Product
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <Link
                        to="/shop"
                        className='inline-block bg-[#80B600] text-white font-bold py-3 px-8 rounded-md hover:bg-[#6a9900] transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
