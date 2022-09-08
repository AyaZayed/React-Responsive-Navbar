import Logo from "../images/logo-removebg.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <img src={Logo} alt="logo" />
        <h2>Navbar</h2>
      </a>
      <ul className="nav-links">
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
