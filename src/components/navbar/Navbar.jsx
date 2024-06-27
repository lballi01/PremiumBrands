import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
    <img src="" alt="logo" />
    <nav>
        <ul className='nav_links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <a className="cta" href="#"><button>Contact</button></a>
    </header>
  )
}

export default Navbar