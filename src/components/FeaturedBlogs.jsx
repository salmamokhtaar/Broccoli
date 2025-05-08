import React from 'react'
import { Link } from 'react-router-dom'
import f4 from '../assets/img/f4.png'
import f5 from '../assets/img/f5.png'
import f6 from '../assets/img/f6.png'

export default function FeaturedBlogs() {
  // Featured blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: 'The Benefits of Eating Organic Food',
      excerpt: 'Discover why organic food is not just a trend but a healthier choice for you and the environment.',
      image: f4,
      date: 'June 15, 2023',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Seasonal Vegetables and Their Benefits',
      excerpt: 'Learn about the best seasonal vegetables and how to incorporate them into your diet for maximum health benefits.',
      image: f5,
      date: 'July 22, 2023',
      author: 'Michael Brown'
    },
    {
      id: 3,
      title: 'How to Start Your Own Organic Garden',
      excerpt: 'A step-by-step guide to creating your own organic garden at home, even if you have limited space.',
      image: f6,
      date: 'August 10, 2023',
      author: 'Emily Davis'
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">From Our Blog</h2>
          <Link to="/blog" className="text-[#80B600] font-medium hover:underline">
            View All Posts →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-[#80B600] font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
