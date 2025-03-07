import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome icons
import '../styles/globals.css'; // Ensure this is loaded


export default function MyApp({ Component, pageProps }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  return (
    <div>
      {/* Announcement Bar with Only Logo */}
      <div className="announcement-bar">
        <img src="/isham-logo.jpg" alt="Isham's Sourdough Logo" className="announcement-logo" />
      </div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          {/* Toggler for Mobile */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={isNavbarOpen ? 'true' : 'false'} 
            aria-label="Toggle navigation" 
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links (Centered) */}
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="/">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">ABOUT ME</a></li>
              <li className="nav-item"><a className="nav-link" href="/recipes">RECIPES</a></li>
              <li className="nav-item"><a className="nav-link" href="/tools">TOOLS</a></li>
              <li className="nav-item"><a className="nav-link order-link" href="/order">ORDER NOW</a></li>
            </ul>
          </div>

          {/* Social Media Icons (Right-Aligned) */}
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
            <a href="/search"><i className="fas fa-search"></i></a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Component {...pageProps} />
    </div>
  );
}
