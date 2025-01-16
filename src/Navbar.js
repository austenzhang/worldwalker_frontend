import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleLogout = () => {
    // Clear authentication (if using localStorage/sessionStorage, you can clear the token here)
    localStorage.removeItem('jwtToken'); // Example: clearing auth token
    navigate('/login'); // Redirect to the login page
  };

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>WorldWalker</h1>
      <div style={styles.navLinks}>
        <button onClick={() => navigate('/home')}
        onMouseEnter={() => handleMouseEnter('home')}
        onMouseLeave={handleMouseLeave}
        style={{
          ...styles.navButton,
          backgroundColor: hoveredButton === 'home' ? 'rgba(0, 0, 0, 0.35)' : 'transparent',
        }}
        >
          Home
        </button>
        <button onClick={() => navigate('/profile')}
        onMouseEnter={() => handleMouseEnter('profile')}
        onMouseLeave={handleMouseLeave}
        style={{
          ...styles.navButton,
          backgroundColor: hoveredButton === 'profile' ? 'rgba(0, 0, 0, 0.35)' : 'transparent',
        }}
        >
          Profile
        </button>
        <button onClick={() => navigate('/history')}
        onMouseEnter={() => handleMouseEnter('history')}
        onMouseLeave={handleMouseLeave}
        style={{
          ...styles.navButton,
          backgroundColor: hoveredButton === 'history' ? 'rgba(0, 0, 0, 0.35)' : 'transparent',
        }}
        >
          History
        </button>
        <button onClick={handleLogout} 
        onMouseEnter={() => handleMouseEnter('logout')}
        onMouseLeave={handleMouseLeave}
        style={{
          ...styles.logoutButton,
          backgroundColor: hoveredButton === 'logout' ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    fontFamily: "Outfit",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white',
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid grey',
  },
  logo: {
    fontFamily: "Outfit",
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  navLinks: {
    fontFamily: "Outfit",
    display: 'flex',
    gap: '10px',
  },
  navButton: {
    fontFamily: "Outfit",
    padding: '8px 16px',
    backgroundColor: 'transparent',
    color: 'white',
    //border: '1px solid grey',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  logoutButton: {
    fontFamily: "Outfit",
    padding: '8px 16px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
};

export default Navbar;
