import React from 'react'
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
        <ul className="links">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Accounts</a>
            </li>
            <li>
                <a href="#">Contacts</a>
            </li>
            <li>
                <a href="#">Notification</a>
            </li>
            <li>
                <a href="#">Settings</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav