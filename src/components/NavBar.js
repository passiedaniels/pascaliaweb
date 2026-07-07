import React from "react";
import "../Nav.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="components">
      <nav className="nav-content">
        <div>
          <h2 className="logo">Pae</h2>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <a href="#Newsletter">Subscribe</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
