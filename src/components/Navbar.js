import FontAwesome from "react-fontawesome";
import Logo from "../images/logo-removebg.png";
import { useState } from "react";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <img src={Logo} alt="logo" />
        <h2>Navbar</h2>
      </a>
      <FontAwesome
        className="bars"
        name="bars"
        size="2x"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      ></FontAwesome>
      <ul className={`nav-links ${isNavExpanded ? "expanded" : null}`}>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Docs</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <button className="login-button">Log in</button>
        </li>
        <li>
          <button className="signup-button">Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
