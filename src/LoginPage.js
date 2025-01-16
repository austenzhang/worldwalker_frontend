import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('jwtToken', data.token);
        alert('Login successful!');
        navigate('/home');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to WorldWalker</h1>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.buttonContainer}>
          <button
            type="submit"
            style={{
              ...styles.button,
              backgroundColor: hoveredButton === 'login' ? '#0056b3' : '#007bff',
            }}
            onMouseEnter={() => setHoveredButton('login')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              ...styles.secondaryButton,
              backgroundColor: hoveredButton === 'back' ? '#9c9c9c' : '#b4b4b4',
            }}
            onMouseEnter={() => setHoveredButton('back')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    fontSize: '18px',
    color: 'white',
    textShadow: '2px 2px 4px black',
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url(/images/canyon.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  form: {
    fontFamily: 'Outfit',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    alignItems: 'center',
  },
  inputGroup: {
    fontFamily: 'Outfit',
    marginBottom: '15px',
    width: '100%',
  },
  input: {
    fontFamily: 'Outfit',
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '20px',
  },
  button: {
    fontFamily: 'Outfit',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    width: '45%',
    transition: 'background-color 0.3s',
  },
  secondaryButton: {
    fontFamily: 'Outfit',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    width: '45%',
    transition: 'background-color 0.3s',
  },
};

export default LoginPage;
