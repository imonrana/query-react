import React from 'react'
// import img
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <section id="navbar">
       <div className="container">
        <nav>
            <div className="logo">
                <img src= {logo} alt="logo" />
            </div>
            <div className="nav_items">
                <ul>
                    <li> <a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Information</a></li>
                    <li><a href="#">Culture</a></li>
                    <li><a href="#">Contact Us</a></li>
                    
                </ul>
            </div>
        </nav>
       </div>
    </section>
  )
}

export default Navbar