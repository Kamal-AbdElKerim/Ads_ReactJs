import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const navbar = document.querySelector('.navbar-area');
      const sticky = navbar.offsetTop;

      setIsSticky(window.scrollY > sticky);
      setShowBackToTop(
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
      );
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    const navbarToggler = document.querySelector('.mobile-menu-btn');
    const navbar_collapse = document.querySelector('.navbar-collapse');
    navbarToggler.classList.toggle('active');
    navbar_collapse.classList.toggle('show');

  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <header className={isSticky ? 'header navbar-area sticky' : 'header navbar-area'}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to={'/home'}>
                  <img src={`http://127.0.0.1:8000/ADS-Logo_RGB.svg`} height="85px" alt="Logo" />
                </Link>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
          
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={toggleMobileMenu} 
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        to="/pageAds"
                      >
                        Ads
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending ? 'pending' : isActive ? 'active' : ''
                        }
                        to="/Dashboard/user"
                      >
                        Profile
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="login-button">
                  <ul>
                    {localStorage.getItem('access_token') ? (
                      <li>
                        <a href="javascript:void(0)" onClick={handleLogout}>
                          <i className="lni lni-enter" /> Logout
                        </a>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link to="/login">
                            <i className="lni lni-enter" /> Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/register">
                            <i className="lni lni-user" /> Register
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="button header-button">
                  <Link to="/AddAds" className="btn">
                    Post an Ad
                  </Link>
                </div>
              </nav>
              {/* navbar */}
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      {/* container */}
      <div className={showBackToTop ? 'scroll-top' : 'scroll-top hidden'}>
        {/* Back to top button */}
      </div>
    </header>
  );
}
