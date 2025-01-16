import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const VacationPlanComponent = ({ vacationRequest, vacationPlan }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={styles.card}>
      <div style={styles.header} onClick={toggleExpand}>
        <div style={styles.headerContent}>
          <h3 style={styles.title}>{vacationRequest.destination}</h3>
          <p style={styles.summary}>
            {vacationRequest.startDate} - {vacationRequest.endDate} | Party Size: {vacationRequest.partySize} | Preference: {vacationRequest.tripContent}
          </p>
        </div>
        <span style={styles.arrow}>{isExpanded ? '▼' : '▶'}</span>
      </div>
      {isExpanded && (
        <div style={styles.details}>
          <ReactMarkdown>{vacationPlan?.body || 'No vacation plan available.'}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    fontFamily: 'Outfit',
    color: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontFamily: 'Outfit',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.2em',
  },
  arrow: {
    fontSize: '1.2em',
    color: '#ddd',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginTop: '12px',
  },
  summary: {
    fontSize: '0.9em',
    margin: '5px 0 0',
    color: 'white',
    marginBottom: '10px',
  },
  details: {
    fontFamily: 'Outfit',
    color: 'white',
    marginTop: '10px',
  },
  planBody: {
    fontFamily: 'Outfit',
    color: 'white',
    whiteSpace: 'pre-wrap', // Preserve formatting (e.g., line breaks) in the plan body
    backgroundColor: '#f9f9f9',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default VacationPlanComponent;
