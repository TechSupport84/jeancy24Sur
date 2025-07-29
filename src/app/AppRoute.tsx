import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

import NavBar from "../components/NavBar";
import LearnEnglish from "../pages/LearnEnglish";
import LearnPython from "../sreens/learnPython";


function AppRoute() {


  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element ={<HomePage />}/>
        <Route path ="/english" element ={<LearnEnglish/>}/>
        <Route path="/python" element ={<LearnPython/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoute;
