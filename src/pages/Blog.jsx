import React from 'react'
import { Link } from 'react-router-dom'
import f4 from '../assets/img/f4.png'
import f5 from '../assets/img/f5.png'
import f6 from '../assets/img/f6.png'

export default function Blog() {
  // Mock blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'The Benefits of Eating Organic Food',
      excerpt: 'Discover why organic food is not just a trend but a healthier choice for you and the environment.',
      image: f4,
      date: 'June 15, 2023',
      author: 'Sarah Johnson',
      category: 'Health',
      tags: ['Organic', 'Health', 'Environment']
    },
    {
      id: 2,
      title: 'Seasonal Vegetables and Their Benefits',
      excerpt: 'Learn about the best seasonal vegetables and how to incorporate them into your diet for maximum health benefits.',
      image: f5,
      date: 'July 22, 2023',
      author: 'Michael Brown',
      category: 'Nutrition',
      tags: ['Vegetables', 'Seasonal', 'Nutrition']
    },
    {
      id: 3,
      title: 'How to Start Your Own Organic Garden',
      excerpt: 'A step-by-step guide to creating your own organic garden at home, even if you have limited space.',
      image: f6,
      date: 'August 10, 2023',
      author: 'Emily Davis',
      category: 'Gardening',
      tags: ['Gardening', 'DIY', 'Organic']
    },
    {
      id: 4,
      title: 'The Impact of Organic Farming on Local Communities',
      excerpt: 'Explore how organic farming practices can strengthen local economies and build more resilient communities.',
      image: f4,
      date: 'September 5, 2023',
      author: 'David Wilson',
      category: 'Community',
      tags: ['Farming', 'Community', 'Economy']
    },
    {
      id: 5,
      title: 'Delicious Recipes Using Fresh Organic Produce',
      excerpt: 'Try these mouthwatering recipes that make the most of fresh, seasonal organic ingredients.',
      image: f5,
      date: 'October 18, 2023',
      author: 'Jessica Martinez',
      category: 'Recipes',
      tags: ['Recipes', 'Cooking', 'Organic']
    },
    {
      id: 6,
      title: 'Understanding Food Labels: What Does Organic Really Mean?',
      excerpt: 'Navigate the confusing world of food labels and understand what organic certification actually entails.',
      image: f6,
      date: 'November 30, 2023',
      author: 'Robert Thompson',
      category: 'Education',
      tags: ['Labels', 'Certification', 'Shopping']
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
      
      {/* Featured Post */}
      <div className="bg-[#F7F4EB] rounded-lg overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <div className="flex items-center text-sm text-gray-600 mb-3">
              <span>{blogPosts[0].date}</span>
              <span className="mx-2">•</span>
              <span>{blogPosts[0].author}</span>
              <span className="mx-2">•</span>
              <span>{blogPosts[0].category}</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
            <Link 
              to={`/blog/${blogPosts[0].id}`} 
              className="inline-block bg-[#80B600] text-white py-2 px-6 rounded-md hover:bg-[#6a9900] transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
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
                <span>{post.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">By {post.author}</span>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-[#80B600] font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex space-x-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300">
            &lt;
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#80B600] text-white">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300">
            3
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300">
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
