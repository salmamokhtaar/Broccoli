import React from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function Testimonials() {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Smith',
      role: 'Health Enthusiast',
      quote: "I've been ordering from Broccoli Organics for over a year now, and the quality of their produce is consistently excellent. Everything is always fresh and tastes amazing!",
      rating: 5
    },
    {
      id: 2,
      name: 'Robert Johnson',
      role: 'Chef',
      quote: "As a professional chef, I'm very particular about the ingredients I use. Broccoli Organics provides the freshest organic produce that makes all my dishes stand out.",
      rating: 5
    },
    {
      id: 3,
      name: 'Amanda Williams',
      role: 'Mother of Two',
      quote: "Finding organic food that my kids actually enjoy eating was a challenge until I discovered Broccoli Organics. Their fruits are sweet, and the vegetables are so fresh!",
      rating: 4
    }
  ]

  return (
    <div className="bg-[#F7F4EB] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 left-8 bg-[#80B600] w-10 h-10 rounded-full flex items-center justify-center text-white">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 mb-6 pt-4">{testimonial.quote}</p>

              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'} />
                ))}
              </div>

              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
