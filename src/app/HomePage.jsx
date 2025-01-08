import React from 'react'
import "../styles/HomePage.css"
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
function HomePage() {
  return (
    <div className='containert'>
        <div className="bar-content">
        <h1>Services</h1>
        <h2>Change Your <span>Today</span></h2>
        </div>
        <ServiceCard/>
       <div className="footer">
       <Footer/>
       </div>
    </div>
  )
}

export default HomePage
