import React from 'react'
import { FaLeaf, FaShippingFast, FaRegCreditCard, FaHeadset } from 'react-icons/fa'

export default function WhyChooseUs() {
  // Features data
  const features = [
    {
      id: 1,
      icon: <FaLeaf className="text-4xl text-[#80B600]" />,
      title: '100% Organic',
      description: 'All our products are certified organic, grown without synthetic pesticides or fertilizers.'
    },
    {
      id: 2,
      icon: <FaShippingFast className="text-4xl text-[#80B600]" />,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders over $50. We deliver to your doorstep with care.'
    },
    {
      id: 3,
      icon: <FaRegCreditCard className="text-4xl text-[#80B600]" />,
      title: 'Secure Payment',
      description: 'Our payment process is secure and we accept all major credit cards and digital wallets.'
    },
    {
      id: 4,
      icon: <FaHeadset className="text-4xl text-[#80B600]" />,
      title: '24/7 Support',
      description: 'Our customer service team is available around the clock to answer your questions.'
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Us</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          We're committed to providing the highest quality organic products while ensuring an exceptional shopping experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
