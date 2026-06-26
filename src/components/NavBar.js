import React from "react";
import "../Nav.css";

export default function NavBar() {
  return (
    <div className="components">
      <nav className="nav-content">
        <div>
          <h2>Pae</h2>
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            {" "}
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
