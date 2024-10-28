import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registor from './pages/Registor';
import Dashboard from './pages/Dashboard';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const location = useLocation();
  const hideNavbarAndFooter = ['/login', '/dashboard', '/registor'].includes(location.pathname);
  const { blogs } = useAuth();
  console.log(blogs);
  return (
    <>
      {!hideNavbarAndFooter && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registor" element={<Registor/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      {!hideNavbarAndFooter && <Footer/>}
    </>
  )
}

export default App;