import React from 'react'
import "../styles/ServiceCard.css"
import ButtonAction from './ButtonAction'
import { useNavigate } from 'react-router-dom'
function ServiceCard() {
    const navigate  = useNavigate()
  return (
    <div className="service-card-container">
    <div className="service-card">
      <img src='/landing-page.png' alt="Web Page" />
      <div className="card-title">Get Web Page</div>
      <div className="card-content">
        Boost your business with numeric
        <p>24/24</p>
        <ButtonAction  onClick={()=>navigate("/getWeb")}title={"Get Now"}/>
      </div> 
    </div>

    <div className="service-card">
      <img src='/development.png' alt="Mobile App" />
      <div className="card-title">Get Mobile App</div>
      <div className="card-content">
        Boost your business with numeric
        <p>24/24</p>
        <ButtonAction onClick={()=>navigate("/getmobile")} title={"Get Now"} />
      </div>
    </div>

    <div className="service-card">
      <img src='/shopping.png' alt="E-commerce" />
      <div className="card-title">Get E-commerce</div>
      <div className="card-content">
        Boost your business with numeric
        <p>24/24</p>
        <ButtonAction  onClick={()=>navigate("/getEcommerce")} title={"Get Now"} />
      </div>
    </div>
    <ButtonAction title={"Get  Service Now"} onClick={()=>navigate("/ChoicePage")}/>
  </div>
  )
}

export default ServiceCard
