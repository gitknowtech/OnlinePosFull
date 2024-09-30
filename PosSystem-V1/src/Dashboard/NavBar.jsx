import '../css/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-left">
          <a href="/" className="navbar-logo">
            MyApp
          </a>
        </div>

        <div className="navbar-center">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="navbar-right">
          <a href="/login" className="navbar-button">
            Login
          </a>
          <a href="/signup" className="navbar-button">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
