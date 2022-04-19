import React, { useState } from 'react'
import "./Header.css"
import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {

  const [click, setClick] = useState(false);

  const handleMobileMenu = () =>{
      setClick(!click)
  }
  return (
    <div className="header-con">
        <div className="logo-container">
            <h1>.my-restaurant</h1>
        </div>
        <div className="links-container">
            <div className="list-item">
                <a href="#">Menu</a>
            </div>
            <div className="list-item">
                <a href="#">About</a>
            </div>
            <div className="list-item">
                <a href="#">Contact</a>
            </div>
        </div>
        <div className="mobile-menu" onClick={handleMobileMenu}>
            {click ? (<FiMenu />) : (<FiX />)}
        </div>
    </div>
  )
}

export default Header