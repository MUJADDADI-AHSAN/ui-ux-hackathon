import React from 'react'
import Signup from './components/signup/page'
import Navbar from './components/navbar/page'
import Hero from './components/hero/page'
import Arrivals from './components/new-arrivals/page'
import Selling from './components/top-selling/page'
import Dress from './components/dress-style/page'
import Customers from './components/customers/page'
import Footer from './components/footer/page'

const Homepage = () => {
  return (
    < >
       <Signup />
       <Navbar />
       <Hero />
       <Arrivals />
       <Selling />
       <Dress />
       <Customers />
       <Footer />
    </>
  )
}

export default Homepage
