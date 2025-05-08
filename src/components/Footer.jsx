import React from 'react'
import { Link } from 'react-router-dom'
import { GiBroccoli } from "react-icons/gi"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#F7F4EB] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <GiBroccoli className="text-3xl text-[#80B600]" />
              <h3 className="ml-2 text-2xl font-bold">Broccoli</h3>
            </div>
            <p className="text-gray-600 mb-4">
              We're dedicated to providing the freshest organic produce to promote health and sustainability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#80B600] text-white p-2 rounded-full hover:bg-[#6a9900] transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-[#80B600] text-white p-2 rounded-full hover:bg-[#6a9900] transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-[#80B600] text-white p-2 rounded-full hover:bg-[#6a9900] transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-[#80B600] text-white p-2 rounded-full hover:bg-[#6a9900] transition-colors">
                <FaPinterestP />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#80B600] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-[#80B600] transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#80B600] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-[#80B600] transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#80B600] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#80B600] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#80B600] transition-colors">Shipping & Returns</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#80B600] transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#80B600] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#80B600] transition-colors">Payment Methods</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates on new products and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#80B600] w-full"
              />
              <button className="bg-[#80B600] text-white px-4 py-2 rounded-r-md hover:bg-[#6a9900] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Broccoli Organics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
