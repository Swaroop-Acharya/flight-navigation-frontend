import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (path, e) => {
    closeMenu();
    // Small delay to ensure route change completes before scrolling
    const scrollToForm = () => {
      if (path === '/') {
        const element = document.getElementById('route-status-form');
        if (element) {
          // Account for navbar height
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          // Retry if element not found yet
          setTimeout(scrollToForm, 100);
        }
      } else if (path === '/altroute') {
        const element = document.getElementById('alt-route-form');
        if (element) {
          // Account for navbar height
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          // Retry if element not found yet
          setTimeout(scrollToForm, 100);
        }
      }
    };
    setTimeout(scrollToForm, 150);
  };

  return (
    <>
      
      <nav className="bg-[rgb(7,26,61)] p-4 sm:p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-xl sm:text-2xl font-bold">{"</AIROTHON 6.0> AIRBUS"}</div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-4">
            <ul className="flex space-x-4">
              <li>
                <Link 
                  to="/" 
                  onClick={(e) => handleNavClick('/', e)}
                  className="font-semibold text-white text-base"
                >
                  Check Route Status
                </Link>
              </li>
              <li>
                <Link 
                  to="/altroute" 
                  onClick={(e) => handleNavClick('/altroute', e)}
                  className="font-semibold text-white text-base"
                >
                  Alternative Route
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={(e) => handleNavClick('/', e)}
                  className="font-semibold text-white text-base block py-2 hover:bg-[rgba(255,255,255,0.1)] rounded px-4"
                >
                  Check Route Status
                </Link>
              </li>
              <li>
                <Link
                  to="/altroute"
                  onClick={(e) => handleNavClick('/altroute', e)}
                  className="font-semibold text-white text-base block py-2 hover:bg-[rgba(255,255,255,0.1)] rounded px-4"
                >
                  Alternative Route
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <div id="player" className="overlay relative w-full">
        <video
          id="kpkVjs"
          crossOrigin="anonymous"
          preload="none"
          playsInline
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover"
          style={{ maxHeight: "600px", minHeight: "200px" }}
          poster="https://mediaassets.airbus.com/medias/domain38/media101851/555343-axnfdce994-whr.jpg"
        >
          <source
            src="https://mediaassets.airbus.com/medias/domain38/media101851/555343-axnfdce994-1080.mp4"
            type="video/mp4"
          />
        </video>
        <div className="overlayText absolute top-0 left-0 w-full h-full flex items-center justify-center px-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <div className="teaserbox text-center text-white">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl">Pioneering sustainable aerospace for<br className="hidden sm:block"/> a safe and united world</h2>
            
           
          </div>
        </div>
      </div>
    </>
  );
}
