import React from 'react'
import "../styles/HomePage.css"
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { FaComments } from 'react-icons/fa';
import CustomerSupportPage from '../helpers/CustomerSupportPage'
function HomePage() {
  return (
    <div className='containert'>
        <div className="bar-content">
        <h1 className="services-title">Services</h1>
  <h2 className="services-subtitle">
    Change Your <span className="highlight">Today</span>
    <div className="open-dot-green">
  <div className="dot-green"></div>
  <span>Open</span>
</div>

  </h2>
  <span className="services-link">
    <Link to={"/forum"} className="forum-link">
      <FaComments className="forum-icon" /> Forum
    </Link>
  </span>
        </div>
        <ServiceCard/>
         <CustomerSupportPage/>
       <div className="footer">
       <Footer/>
       </div>
    </div>
  )
}

export default HomePage
