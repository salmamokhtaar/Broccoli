import React from 'react'
import Hero from '../components/Hero'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedBlogs from '../components/FeaturedBlogs'

export default function Home() {
  return (
    <div>
      <Hero />
      <Section2 />
      <Section3 />
      <WhyChooseUs />
      <Testimonials />
      <FeaturedBlogs />
      <Newsletter />
    </div>
  )
}
