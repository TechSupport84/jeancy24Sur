import React,{useState} from 'react'
import ButtonAction from '../components/ButtonAction'
import "../styles/GetEcommerce.css"
import BackArrowButton from '../components/BackArrowButton';
import { useNavigate } from 'react-router-dom';
function GetEcommerce() {
    const navigate  = useNavigate()
    const [site, setSite] = useState('');
    const [siteDomain, setSiteDomain] = useState('');
  
    return (
      <div className="get-web-container">
        <div className="header-screen">
          <BackArrowButton onClick={()=>navigate("/")}/>
          <h1>Get E-commerce </h1>
          <div className="ads"></div>
        </div>
  
        <form className="get-web-form">
          <div className="two-left-input">
            <input
              type="text"
            value={site}
              onChange={(e) => setSite(e.target.value)}
              placeholder="E-commerce name"
            />
            <input
              type="text"
              value={siteDomain}
              onChange={(e) => setSiteDomain(e.target.value)}
              placeholder="Site  Domain name"
            />
          </div>
  
          <div className="two-middle-input">
            <textarea placeholder="Describe yourE-commerce content." />
            <div className="checkbox-group">
              <label htmlFor="have-domain">Have domain?</label>
              <input type="checkbox" id="have-domain" />
              <label htmlFor="have-domain">Have domain?</label>
              <input type="checkbox" id="have-domain2" />
            </div>
          </div>
  
          <div className="date-input">
            <label htmlFor="date">When do you want to get this site?</label>
            <input type="date" id="date" placeholder="Choose date" />
          </div>
  
          <div className="policy-content">
            <input type="checkbox" id="policy" />
            <span>
              Once you finish your order, one of our agents will reach out to you.
            </span>
          </div>
  
          <ButtonAction title="Confirm Now" />
        </form>
      </div>
  )
}

export default GetEcommerce
