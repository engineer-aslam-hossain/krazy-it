import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
  return (
    <header className='header container  m-0 px-0'>
      <div className='container px-0'>
        <Navbar expand='lg'>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} alt='' className='logo img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav '>
            <Nav className='ml-auto justify-content-center align-items-center'>
              <Link to='/'>Home</Link>
              <Link to='/'>Service</Link>
              <Link to='/preview'>Image-Preview</Link>
              <Link to='/t-shirt'>T-Shirt</Link>
              <Link to='/'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
