import React, { useEffect, useState } from 'react';
import VacationPlanComponent from './VacationPlanComponent';

const HistoryPage = () => {
  const [vacationRequests, setVacationRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      const token = localStorage.getItem('jwtToken'); // Retrieve JWT token

      try {
        const response = await fetch('https://worldwalkerbackend-a8d48ad74b49.herokuapp.com/vacation/history', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`, // Include JWT token in Authorization header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setVacationRequests(data); // Set the vacation requests from the backend
        } else {
          console.error('Failed to fetch vacation history');
          alert('Could not load vacation history. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching vacation history:', error);
        alert('An error occurred while fetching the vacation history.');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div style = {styles.background}>
    <div style={styles.container}>
      <h1>Vacation History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        vacationRequests.map((request) => (
          <VacationPlanComponent
            key={request.id}
            vacationRequest={request}
            vacationPlan={request.vacationPlan} // Pass vacationPlan to the component
          />
        ))
      )}
    </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Outfit",
    color: 'white',
    textShadow: '2px 2px 4px black',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'transparent',
  },
  background: {
    backgroundColor: 'transparent',
  },
};

export default HistoryPage;
