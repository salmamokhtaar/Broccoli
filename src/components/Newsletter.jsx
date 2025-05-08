import React from 'react'
import { IoMailOutline } from 'react-icons/io5'

export default function Newsletter() {
  return (
    <div className="bg-[#80B600] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-white opacity-90">
              Get the latest updates on new products, special offers, and seasonal tips.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row">
              <div className="relative mb-4 sm:mb-0 sm:mr-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <IoMailOutline className="text-gray-400" />
                </div>
                <input 
                  type="email" 
                  className="bg-white text-gray-900 pl-10 pr-4 py-3 rounded-md w-full sm:w-80 focus:outline-none" 
                  placeholder="Your email address"
                />
              </div>
              <button className="bg-white text-[#80B600] font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white text-sm mt-2 opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
