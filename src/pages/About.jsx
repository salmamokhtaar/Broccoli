import React from 'react'
import f2 from '../assets/img/f2.png'
import f4 from '../assets/img/f4.png'
import f5 from '../assets/img/f5.png'
import { GiBroccoli } from 'react-icons/gi'
import { FaLeaf, FaSeedling, FaRecycle, FaHandHoldingHeart } from 'react-icons/fa'

export default function About() {
  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      bio: 'Sarah founded Broccoli Organics with a passion for sustainable agriculture and healthy living.',
      image: f5
    },
    {
      name: 'Michael Brown',
      position: 'Head of Operations',
      bio: 'Michael ensures that our organic products meet the highest quality standards.',
      image: f4
    },
    {
      name: 'Emily Davis',
      position: 'Chief Nutritionist',
      bio: 'Emily helps develop our product range with a focus on nutritional benefits.',
      image: f5
    },
    {
      name: 'David Wilson',
      position: 'Farm Manager',
      bio: 'David oversees our organic farming operations and sustainable growing practices.',
      image: f4
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-[#F7F4EB] rounded-lg overflow-hidden mb-16">
        <div className="md:flex items-center">
          <div className="md:w-1/2 p-8 md:p-12">
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Broccoli Organics, we believe in the power of nature to nourish our bodies and sustain our planet. 
              Our journey began in 2010 with a simple mission: to make organic, sustainably grown food accessible to everyone.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              What started as a small family farm has grown into a community of passionate farmers, nutritionists, 
              and food lovers dedicated to bringing the freshest organic produce to your table.
            </p>
            <div className="flex items-center">
              <GiBroccoli className="text-4xl text-[#80B600] mr-3" />
              <span className="text-xl font-bold">Broccoli Organics</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={f2} 
              alt="Organic farming" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#EFF5E9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaLeaf className="text-2xl text-[#80B600]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Organic Integrity</h3>
            <p className="text-gray-600">
              We're committed to organic farming practices that protect the environment and produce the healthiest food.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#EFF5E9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSeedling className="text-2xl text-[#80B600]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainability</h3>
            <p className="text-gray-600">
              Our farming practices are designed to sustain and regenerate the land for future generations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#EFF5E9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaRecycle className="text-2xl text-[#80B600]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Environmental Stewardship</h3>
            <p className="text-gray-600">
              We minimize waste and use eco-friendly packaging to reduce our environmental footprint.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#EFF5E9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHandHoldingHeart className="text-2xl text-[#80B600]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Support</h3>
            <p className="text-gray-600">
              We partner with local farmers and give back to the communities that support us.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Journey */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#80B600]"></div>
          
          {/* Timeline Items */}
          <div className="relative z-10">
            <div className="mb-12 md:flex items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">2010</h3>
                <p className="text-gray-600">Founded as a small family farm with a focus on organic vegetables.</p>
              </div>
              <div className="bg-[#80B600] w-8 h-8 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            
            <div className="mb-12 md:flex items-center">
              <div className="md:w-1/2 md:pr-12"></div>
              <div className="bg-[#80B600] w-8 h-8 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">2015</h3>
                <p className="text-gray-600">Expanded to include a wider range of organic produce and opened our first store.</p>
              </div>
            </div>
            
            <div className="mb-12 md:flex items-center">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">2018</h3>
                <p className="text-gray-600">Launched our online store to make organic food accessible nationwide.</p>
              </div>
              <div className="bg-[#80B600] w-8 h-8 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-12"></div>
            </div>
            
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12"></div>
              <div className="bg-[#80B600] w-8 h-8 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-bold mb-2">2023</h3>
                <p className="text-gray-600">Celebrating our commitment to organic farming and sustainable practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#80B600] font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
