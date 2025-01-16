import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>WorldWalker</h1>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => navigate('/login')}
          onMouseEnter={() => handleMouseEnter('login')}
          onMouseLeave={handleMouseLeave}
          style={{
            ...styles.button,
            backgroundColor: hoveredButton === 'login' ? '#0056b3' : '#007bff',
          }}
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          onMouseEnter={() => handleMouseEnter('register')}
          onMouseLeave={handleMouseLeave}
          style={{
            ...styles.button,
            backgroundColor: hoveredButton === 'register' ? '#0056b3' : '#007bff',
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Outfit',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(/images/canyon.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: '50px',
    color: 'white',
    textShadow: '2px 2px 4px black',
    marginBottom: '25px',
    userSelect: 'none',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    fontFamily: 'Outfit',
    padding: '10px 20px',
    margin: '10px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    userSelect: 'none',
    transition: 'background-color 0.3s',
  },
};

export default LandingPage;
