import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

import useAuth from "../hooks/useAuth";
import NavBar from "../components/NavBar";
import LearnEnglish from "../pages/LearnEnglish";


function AppRoute() {
  const { user, loading } = useAuth();
 console.log("user: ", user)
  if (loading) {
    return <p className="text-center text-2xl">Loading...</p>;
  }

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element ={<HomePage />}/>
        <Route path ="/english" element ={<LearnEnglish/>}/>
      </Routes>
    </Router>
  );
}

export default AppRoute;
