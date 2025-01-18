import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../app/HomePage';
import NavBar from '../components/NavBar';
import GetWeb from '../pages/GetWeb';
import GetMobile from '../pages/GetMobile';
import GetEcommerce from '../pages/GetEcommerce';
import Partenariat from '../pages/Partenariat';
import ContinueApp from '../pages/ContinueApp';
import ChoicePage from '../pages/ChoicePage';
import Contact from '../helpers/Contact';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Application from '../components/Application';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Forum from '../app/Forum';
export default function AppRouter() {
  const { user } = useAuth();

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Protected routes */}
        <Route path="/getWeb" element={<ProtectedRoute element={<GetWeb />} />} />
        <Route path="/getmobile" element={<ProtectedRoute element={<GetMobile />} />} />
        <Route path="/getEcommerce" element={<ProtectedRoute element={<GetEcommerce />} />} />
        <Route path="/partenariat" element={<ProtectedRoute element={<Partenariat />} />} />
        <Route path="/ChoicePage" element={<ProtectedRoute element={<ChoicePage />} />} />
        <Route path="/continueApp" element={<ProtectedRoute element={<ContinueApp />} />} />
        <Route path="/Application" element={<ProtectedRoute element={<Application />} />} />
        <Route path="/forum" element={<ProtectedRoute element={<Forum />} />} />

        {/* Unprotected routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}
