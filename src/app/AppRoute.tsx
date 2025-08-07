import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

import NavBar from "../components/NavBar";
import FooterPage from "../components/FooterPage";




function AppRoute() {


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element ={<HomePage />}/>
      
      
      </Routes>
      <FooterPage/>
    </Router>
  );
}

export default AppRoute;
