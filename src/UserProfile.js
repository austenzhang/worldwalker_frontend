import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    age: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [loading, setLoading] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  // Fetch profile data when the component loads
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const token = localStorage.getItem('jwtToken'); // Retrieve JWT token

      try {
        const response = await fetch('http://localhost:8080/api/user/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Include JWT token in Authorization header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data); // Set the retrieved data to profile
          setFormData(data); // Set the retrieved data to formData for editing
        } else {
          console.error('Failed to fetch profile data');
          alert('Could not load profile data. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        alert('An error occurred while fetching the profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []); // Empty dependency array ensures this runs only once

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(profile); // Reset form data to current profile
    setIsEditing(false);
  };

  const handleSave = async () => {
    setLoading(true);
    const token = localStorage.getItem('jwtToken'); // Retrieve JWT token

    try {
      const response = await fetch('http://localhost:8080/api/user/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Include JWT token in Authorization header
        },
        body: JSON.stringify(formData), // Send updated profile data
      });

      if (response.ok) {
        const updatedProfile = await response.json();
        setProfile(updatedProfile); // Update local profile with backend response
        setIsEditing(false);
      } else {
        const errorData = await response.json();
        alert(`Failed to update profile: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating the profile.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div style={styles.background}>
      <h1>User Profile</h1>
    <div style={styles.container}>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          {isEditing ? (
            <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div style={styles.inputGroup}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.inputGroup}>
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.buttonGroup}>
                <button
                  type="button"
                  onClick={handleSave}
                  //style={styles.saveButton}
                  disabled={loading}
                  onMouseEnter={() => handleMouseEnter('save')}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    ...styles.saveButton,
                    backgroundColor: loading
                      ? '#6c757d' // Grey color for disabled state
                      : hoveredButton === 'save'
                      ? '#0056b3' // Hover color
                      : '#007bff', // Default color
                    cursor: loading ? 'not-allowed' : 'pointer', // Show appropriate cursor
                  }}
                >
                  {loading ? 'Saving...' : 'Save'}
                </button>
                <button
                type = "button"
                onClick={handleCancel}
                onMouseEnter={() => handleMouseEnter('cancel')}
                onMouseLeave={handleMouseLeave}
                style={{
                  ...styles.cancelButton,
                  backgroundColor: hoveredButton === 'cancel' ? 'rgba(0, 0, 0, 0.35)' : 'transparent',
                }}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div style={styles.profileView}>
              <p>
                <strong>Username:</strong> {profile.username}
              </p>
              <p>
                <strong>First Name:</strong> {profile.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {profile.lastName}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Age:</strong> {profile.age}
              </p>
              <button
                onClick={handleEdit}
                onMouseEnter={() => handleMouseEnter('edit')}
                onMouseLeave={handleMouseLeave}
                style={{
                  ...styles.editButton,
                  backgroundColor: hoveredButton === 'edit' ? '#0056b3' : '#007bff',
                }}
              >
                Edit Profile
              </button>
            </div>
          )}
        </>
      )}
    </div>
    </div>
  );
};

const styles = {
  background:{
    // backgroundColor: 'black',
    // minHeight: '100vh',
    // width: '100%',
    fontFamily: "Outfit",
    color: 'white',
    textShadow: '2px 2px 4px black',
    userSelect: 'none',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'transparent',
    minHeight: '100vh',
  },
  container: {
    fontFamily: "Outfit",
    color: 'white',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid grey',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  form: {
    fontFamily: "Outfit",
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  inputGroup: {
    fontFamily: "Outfit",
    width: '95%',
    marginBottom: '15px',
  },
  input: {
    fontFamily: "Outfit",
    color: 'white',
    backgroundColor: '#141414',
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  buttonGroup: {
    fontFamily: "Outfit",
    display: 'flex',
    justifyContent: 'space-between',
  },
  saveButton: {
    fontFamily: "Outfit",
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color .3s',
  },
  cancelButton: {
    fontFamily: "Outfit",
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color .3s',
  },
  editButton: {
    fontFamily: "Outfit",
    padding: '10px 20px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color .3s',
  },
  profileView: {
    textAlign: 'left',
  },
};

export default UserProfile;
