import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Order from './components/Order';
import Details from './components/Details';
import Fleet from './components/Fleet';

// Custom NavLink component for active state
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={isActive ? 'active' : ''}
    >
      {children}
    </Link>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Order">Order</NavLink>
          <NavLink to="/Fleet">Fleet</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Details/:id" element={<Details />} />
          <Route path="/Fleet" element={<Fleet />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App