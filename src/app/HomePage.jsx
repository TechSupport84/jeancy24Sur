import React from 'react'
import "../styles/HomePage.css"
import ServiceCard from '../components/ServiceCard'
function HomePage() {
  return (
    <div className='containert'>
        <div className="bar-content">
        <h1>Services</h1>
        <h2>Change Your To <span>Today</span></h2>
        </div>
        <ServiceCard/>
       
    </div>
  )
}

export default HomePage
