import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Navbar, NavbarBrand, Nav, NavItem
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Team from './components/Team';
import Contact from './components/Contact';
import logo from './assets/logo.jpeg';

function App() {
  return (
    <Router>
      {/* Navbar */}
<Navbar
  dark
  expand="md"
  className="w-100 px-4 shadow"
  style={{
    background: 'linear-gradient(135deg, #1e3c72, #2a5298, #00c6ff)'
  }}
>
  <NavbarBrand href="/" className="d-flex align-items-center">
    <img
      src={logo}
      alt="Logo"
      style={{ width: '40px', height: '40px', marginRight: '12px' }}
    />
    <span className="fs-3 fw-bold">SelaluJayaparts</span>
  </NavbarBrand>

  <Nav className="ms-auto fs-5" navbar>
    <NavItem>
      <Link to="/" className="nav-link">Home</Link>
    </NavItem>
    <NavItem>
      <Link to="/team" className="nav-link">Team</Link>
    </NavItem>
    <NavItem>
      <Link to="/contact" className="nav-link">Contact</Link>
    </NavItem>
  </Nav>
</Navbar>


      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
