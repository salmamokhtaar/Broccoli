import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiBroccoli } from "react-icons/gi"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight } from "react-icons/fa"
import useAOS from '../hooks/useAOS'

export default function Footer() {
  const [email, setEmail] = useState('');

  // Initialize AOS animations
  useAOS();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Footer newsletter subscription:', email);
      alert('Thanks for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#F7F4EB] to-[#f0ede4] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section with Logo and Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center mb-6 md:mb-0">
            <GiBroccoli className="text-4xl text-[#80B600]" />
            <h3 className="ml-2 text-3xl font-bold">Broccoli</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="bg-[#EFF5E9] p-2 rounded-full mr-3">
                <FaMapMarkerAlt className="text-[#80B600]" />
              </div>
              <span className="text-gray-700">123 Organic Street, Green City</span>
            </div>

            <div className="flex items-center">
              <div className="bg-[#EFF5E9] p-2 rounded-full mr-3">
                <FaPhoneAlt className="text-[#80B600]" />
              </div>
              <span className="text-gray-700">+1 (555) 123-4567</span>
            </div>

            <div className="flex items-center">
              <div className="bg-[#EFF5E9] p-2 rounded-full mr-3">
                <FaEnvelope className="text-[#80B600]" />
              </div>
              <span className="text-gray-700">info@broccoliorganics.com</span>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div data-aos="fade-up" data-aos-delay="0">
            <h3 className="text-xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[3px] after:bg-[#80B600] after:bottom-[-6px] after:left-0">About Us</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We're dedicated to providing the freshest organic produce to promote health and sustainability. Our mission is to make organic food accessible to everyone.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-[#80B600] text-white p-2.5 rounded-full hover:bg-[#6a9900] transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-[#80B600] text-white p-2.5 rounded-full hover:bg-[#6a9900] transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                <FaTwitter />
              </a>
              <a href="#" className="bg-[#80B600] text-white p-2.5 rounded-full hover:bg-[#6a9900] transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                <FaInstagram />
              </a>
              <a href="#" className="bg-[#80B600] text-white p-2.5 rounded-full hover:bg-[#6a9900] transition-all duration-300 transform hover:scale-110 hover:shadow-md">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[3px] after:bg-[#80B600] after:bottom-[-6px] after:left-0">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/shop', label: 'Shop' },
                { path: '/about', label: 'About Us' },
                { path: '/blog', label: 'Blog' },
                { path: '/contact', label: 'Contact Us' }
              ].map((link, index) => (
                <li key={index} className="transform transition-transform duration-300 hover:translate-x-2">
                  <Link to={link.path} className="text-gray-600 hover:text-[#80B600] transition-colors flex items-center">
                    <FaArrowRight className="mr-2 text-xs text-[#80B600]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[3px] after:bg-[#80B600] after:bottom-[-6px] after:left-0">Customer Service</h3>
            <ul className="space-y-3">
              {[
                { path: '#', label: 'FAQ' },
                { path: '#', label: 'Shipping & Returns' },
                { path: '#', label: 'Terms & Conditions' },
                { path: '#', label: 'Privacy Policy' },
                { path: '#', label: 'Payment Methods' }
              ].map((link, index) => (
                <li key={index} className="transform transition-transform duration-300 hover:translate-x-2">
                  <a href={link.path} className="text-gray-600 hover:text-[#80B600] transition-colors flex items-center">
                    <FaArrowRight className="mr-2 text-xs text-[#80B600]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-bold mb-4 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-[3px] after:bg-[#80B600] after:bottom-[-6px] after:left-0">Opening Hours</h3>
            <ul className="space-y-3">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                { day: 'Sunday', hours: 'Closed' }
              ].map((schedule, index) => (
                <li key={index} className="flex items-start">
                  <FaClock className="text-[#80B600] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="block font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Broccoli Organics. All rights reserved.
          </p>

          <div className="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-8 w-auto mx-1" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-8 w-auto mx-1" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="PayPal" className="h-8 w-auto mx-1" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="American Express" className="h-8 w-auto mx-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
