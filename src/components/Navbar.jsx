import React, { useState } from 'react'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <header className='header'>
      <a href="#" className='logo'>Gaurav.</a>
          {/* Toggle Menu Open/Close Icons */}
          <img
          src={isMenuOpen ? menu_close : menu_open}
          alt="Menu Toggle Icon"
          id='menu-icon'
          onClick={toggleMenu}
        />

      {/* <img src={menu_open} alt="" id='menu-icon' onClick={toggleMenu}/> */}

      {/* <i class="fa-solid fa-bars"  id='menu-icon' onClick={toggleMenu}></i> */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" className='active'>Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
    </>
  )
}


