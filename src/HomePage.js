import React, { useState } from 'react';
import Select from 'react-select';
import ReactMarkdown from 'react-markdown';

const HomePage = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [partySize, setPartySize] = useState('');
  const [tripContent, setTripContent] = useState('');
  const [vacationPlan, setVacationPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const destinationOptions = [
    { value: 'Afghanistan', label: 'Afghanistan' },
    { value: 'Albania', label: 'Albania' },
    { value: 'Algeria', label: 'Algeria' },
    { value: 'Andorra', label: 'Andorra' },
    { value: 'Angola', label: 'Angola' },
    { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Armenia', label: 'Armenia' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Austria', label: 'Austria' },
    { value: 'Azerbaijan', label: 'Azerbaijan' },
    { value: 'Bahamas', label: 'Bahamas' },
    { value: 'Bahrain', label: 'Bahrain' },
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'Barbados', label: 'Barbados' },
    { value: 'Belarus', label: 'Belarus' },
    { value: 'Belgium', label: 'Belgium' },
    { value: 'Belize', label: 'Belize' },
    { value: 'Benin', label: 'Benin' },
    { value: 'Bhutan', label: 'Bhutan' },
    { value: 'Bolivia', label: 'Bolivia' },
    { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
    { value: 'Botswana', label: 'Botswana' },
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Brunei', label: 'Brunei' },
    { value: 'Bulgaria', label: 'Bulgaria' },
    { value: 'Burkina Faso', label: 'Burkina Faso' },
    { value: 'Burundi', label: 'Burundi' },
    { value: 'Cabo Verde', label: 'Cabo Verde' },
    { value: 'Cambodia', label: 'Cambodia' },
    { value: 'Cameroon', label: 'Cameroon' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Central African Republic', label: 'Central African Republic' },
    { value: 'Chad', label: 'Chad' },
    { value: 'Chile', label: 'Chile' },
    { value: 'China', label: 'China' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Comoros', label: 'Comoros' },
    { value: 'Congo (Congo-Brazzaville)', label: 'Congo (Congo-Brazzaville)' },
    { value: 'Costa Rica', label: 'Costa Rica' },
    { value: 'Croatia', label: 'Croatia' },
    { value: 'Cuba', label: 'Cuba' },
    { value: 'Cyprus', label: 'Cyprus' },
    { value: 'Czechia (Czech Republic)', label: 'Czechia (Czech Republic)' },
    { value: 'Denmark', label: 'Denmark' },
    { value: 'Djibouti', label: 'Djibouti' },
    { value: 'Dominica', label: 'Dominica' },
    { value: 'Dominican Republic', label: 'Dominican Republic' },
    { value: 'Ecuador', label: 'Ecuador' },
    { value: 'Egypt', label: 'Egypt' },
    { value: 'El Salvador', label: 'El Salvador' },
    { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
    { value: 'Eritrea', label: 'Eritrea' },
    { value: 'Estonia', label: 'Estonia' },
    { value: 'Eswatini (fmr. "Swaziland")', label: 'Eswatini (fmr. "Swaziland")' },
    { value: 'Ethiopia', label: 'Ethiopia' },
    { value: 'Fiji', label: 'Fiji' },
    { value: 'Finland', label: 'Finland' },
    { value: 'France', label: 'France' },
    { value: 'Gabon', label: 'Gabon' },
    { value: 'Gambia', label: 'Gambia' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Ghana', label: 'Ghana' },
    { value: 'Greece', label: 'Greece' },
    { value: 'Grenada', label: 'Grenada' },
    { value: 'Guatemala', label: 'Guatemala' },
    { value: 'Guinea', label: 'Guinea' },
    { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
    { value: 'Guyana', label: 'Guyana' },
    { value: 'Haiti', label: 'Haiti' },
    { value: 'Holy See', label: 'Holy See' },
    { value: 'Honduras', label: 'Honduras' },
    { value: 'Hungary', label: 'Hungary' },
    { value: 'Iceland', label: 'Iceland' },
    { value: 'India', label: 'India' },
    { value: 'Indonesia', label: 'Indonesia' },
    { value: 'Iran', label: 'Iran' },
    { value: 'Iraq', label: 'Iraq' },
    { value: 'Ireland', label: 'Ireland' },
    { value: 'Israel', label: 'Israel' },
    { value: 'Italy', label: 'Italy' },
    { value: 'Jamaica', label: 'Jamaica' },
    { value: 'Japan', label: 'Japan' },
    { value: 'Jordan', label: 'Jordan' },
    { value: 'Kazakhstan', label: 'Kazakhstan' },
    { value: 'Kenya', label: 'Kenya' },
    { value: 'Kiribati', label: 'Kiribati' },
    { value: 'Kuwait', label: 'Kuwait' },
    { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
    { value: 'Laos', label: 'Laos' },
    { value: 'Latvia', label: 'Latvia' },
    { value: 'Lebanon', label: 'Lebanon' },
    { value: 'Lesotho', label: 'Lesotho' },
    { value: 'Liberia', label: 'Liberia' },
    { value: 'Libya', label: 'Libya' },
    { value: 'Liechtenstein', label: 'Liechtenstein' },
    { value: 'Lithuania', label: 'Lithuania' },
    { value: 'Luxembourg', label: 'Luxembourg' },
    { value: 'Madagascar', label: 'Madagascar' },
    { value: 'Malawi', label: 'Malawi' },
    { value: 'Malaysia', label: 'Malaysia' },
    { value: 'Maldives', label: 'Maldives' },
    { value: 'Mali', label: 'Mali' },
    { value: 'Malta', label: 'Malta' },
    { value: 'Marshall Islands', label: 'Marshall Islands' },
    { value: 'Mauritania', label: 'Mauritania' },
    { value: 'Mauritius', label: 'Mauritius' },
    { value: 'Mexico', label: 'Mexico' },
    { value: 'Micronesia', label: 'Micronesia' },
    { value: 'Moldova', label: 'Moldova' },
    { value: 'Monaco', label: 'Monaco' },
    { value: 'Mongolia', label: 'Mongolia' },
    { value: 'Montenegro', label: 'Montenegro' },
    { value: 'Morocco', label: 'Morocco' },
    { value: 'Mozambique', label: 'Mozambique' },
    { value: 'Myanmar (Burma)', label: 'Myanmar (Burma)' },
    { value: 'Namibia', label: 'Namibia' },
    { value: 'Nauru', label: 'Nauru' },
    { value: 'Nepal', label: 'Nepal' },
    { value: 'Netherlands', label: 'Netherlands' },
    { value: 'New Zealand', label: 'New Zealand' },
    { value: 'Nicaragua', label: 'Nicaragua' },
    { value: 'Niger', label: 'Niger' },
    { value: 'Nigeria', label: 'Nigeria' },
    { value: 'North Korea', label: 'North Korea' },
    { value: 'North Macedonia', label: 'North Macedonia' },
    { value: 'Norway', label: 'Norway' },
    { value: 'Oman', label: 'Oman' },
    { value: 'Pakistan', label: 'Pakistan' },
    { value: 'Palau', label: 'Palau' },
    { value: 'Palestine State', label: 'Palestine State' },
    { value: 'Panama', label: 'Panama' },
    { value: 'Papua New Guinea', label: 'Papua New Guinea' },
    { value: 'Paraguay', label: 'Paraguay' },
    { value: 'Peru', label: 'Peru' },
    { value: 'Philippines', label: 'Philippines' },
    { value: 'Poland', label: 'Poland' },
    { value: 'Portugal', label: 'Portugal' },
    { value: 'Qatar', label: 'Qatar' },
    { value: 'Romania', label: 'Romania' },
    { value: 'Russia', label: 'Russia' },
    { value: 'Rwanda', label: 'Rwanda' },
    { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
    { value: 'Saint Lucia', label: 'Saint Lucia' },
    { value: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines' },
    { value: 'Samoa', label: 'Samoa' },
    { value: 'San Marino', label: 'San Marino' },
    { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
    { value: 'Saudi Arabia', label: 'Saudi Arabia' },
    { value: 'Senegal', label: 'Senegal' },
    { value: 'Serbia', label: 'Serbia' },
    { value: 'Seychelles', label: 'Seychelles' },
    { value: 'Sierra Leone', label: 'Sierra Leone' },
    { value: 'Singapore', label: 'Singapore' },
    { value: 'Slovakia', label: 'Slovakia' },
    { value: 'Slovenia', label: 'Slovenia' },
    { value: 'Solomon Islands', label: 'Solomon Islands' },
    { value: 'Somalia', label: 'Somalia' },
    { value: 'South Africa', label: 'South Africa' },
    { value: 'South Korea', label: 'South Korea' },
    { value: 'South Sudan', label: 'South Sudan' },
    { value: 'Spain', label: 'Spain' },
    { value: 'Sri Lanka', label: 'Sri Lanka' },
    { value: 'Sudan', label: 'Sudan' },
    { value: 'Suriname', label: 'Suriname' },
    { value: 'Sweden', label: 'Sweden' },
    { value: 'Switzerland', label: 'Switzerland' },
    { value: 'Syria', label: 'Syria' },
    { value: 'Tajikistan', label: 'Tajikistan' },
    { value: 'Tanzania', label: 'Tanzania' },
    { value: 'Thailand', label: 'Thailand' },
    { value: 'Timor-Leste', label: 'Timor-Leste' },
    { value: 'Togo', label: 'Togo' },
    { value: 'Tonga', label: 'Tonga' },
    { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
    { value: 'Tunisia', label: 'Tunisia' },
    { value: 'Turkey', label: 'Turkey' },
    { value: 'Turkmenistan', label: 'Turkmenistan' },
    { value: 'Tuvalu', label: 'Tuvalu' },
    { value: 'Uganda', label: 'Uganda' },
    { value: 'Ukraine', label: 'Ukraine' },
    { value: 'United Arab Emirates', label: 'United Arab Emirates' },
    { value: 'United Kingdom', label: 'United Kingdom' },
    { value: 'United States of America', label: 'United States of America' },
    { value: 'Uruguay', label: 'Uruguay' },
    { value: 'Uzbekistan', label: 'Uzbekistan' },
    { value: 'Vanuatu', label: 'Vanuatu' },
    { value: 'Venezuela', label: 'Venezuela' },
    { value: 'Vietnam', label: 'Vietnam' },
    { value: 'Yemen', label: 'Yemen' },
    { value: 'Zambia', label: 'Zambia' },
    { value: 'Zimbabwe', label: 'Zimbabwe' },
  ];

  const tripContentOptions = [
    { value: 'Culture', label: 'Culture'},
    { value: 'Nature', label: 'Nature' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Relaxation', label: 'Relaxation' },
    { value: 'Food & Drinks', label: 'Food & Drinks' },
    { value: 'Shopping', label: 'Shopping' },
    { value: 'Nightlife', label: 'Nightlife' },
  ];

  const handleGeneratePlan = async (event) => {
    event.preventDefault();
    setLoading(true);
    setVacationPlan(''); // Clear previous response

    //logging
    const send = {
      destination: destination.value,
      startDate,
      endDate,
      partySize,
      tripContent: tripContent.value,
    }

    console.log(send);
  
    const token = localStorage.getItem('jwtToken'); // Retrieve the token from localStorage
  
    try {
      const response = await fetch('http://localhost:8080/api/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the token to the Authorization header
        },
        body: JSON.stringify({
          destination: destination.value, // Send the selected value
          startDate,
          endDate,
          partySize,
          tripContent: tripContent.value, // Send the selected value
        }),
      });
  
      if (response.ok) {
        const data = await response.text();
        console.log(response.body)
        setVacationPlan(data);
      } else {
        setVacationPlan('Failed to generate a vacation plan. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setVacationPlan('An error occurred while generating the vacation plan.');
    } finally {
      setLoading(false);
    }
  };

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  

  return (
    <div style={styles.container}>
      <h1>Generate Your Vacation Plan</h1>
      <form onSubmit={handleGeneratePlan} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Destination:</label>
          <Select
            options={destinationOptions}
            value={destination}
            onChange={(selectedOption) => setDestination(selectedOption)}
            placeholder="Select a destination"
            isSearchable
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
              ...theme.colors,
                text: 'white',
                primary25: 'darkgrey',
                primary: 'white',
                neutral0: '#141414',
                neutral80: 'white',
              },
            })}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            min = {new Date().toISOString().split('T')[0]}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            min = {new Date().toISOString().split('T')[0]}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Party Size:</label>
          <input
            type="number"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
            required
            min="1" // Minimum party size
            step="1" // Ensure only integers are allowed
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Trip Content Preferences:</label>
          <Select
            options={tripContentOptions}
            value={tripContent}
            onChange={(selectedOption) => setTripContent(selectedOption)}
            placeholder="Select a category"
            theme={(theme) => ({
              ...theme,
              borderRadius: 5,
              colors: {
              ...theme.colors,
                text: 'white',
                primary25: 'darkgrey',
                primary: 'white',
                neutral0: '#141414',
                neutral80: 'white',
              },
            })}
          />

          {/* <select
            value={tripContent}
            onChange={(e) => setTripContent(e.target.value)}
            required
            style={styles.input}
          >
            <option value="" disabled>
              Select a category
            </option>
            {tripContentOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select> */}
        </div>
        <button
          type="submit"
          disabled={loading}
          onMouseEnter={() => handleMouseEnter('generate')}
          onMouseLeave={handleMouseLeave}
          style={{
            ...styles.button,
            backgroundColor: loading
              ? '#6c757d' // Grey color for disabled state
              : hoveredButton === 'generate'
              ? '#0056b3' // Hover color
              : '#007bff', // Default color
            cursor: loading ? 'not-allowed' : 'pointer', // Show appropriate cursor
          }}
        >
          {loading ? 'Generating... Please Wait' : 'Generate Plan'}
        </button>
      </form>
      {vacationPlan && (
        <div style={styles.vacationPlan}>
          <ReactMarkdown>{vacationPlan}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Outfit",
    color: 'white',
    textShadow: '2px 2px 4px black',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'transparent',
    minHeight: '100vh',
  },
  form: {
    fontFamily: "Outfit",
    margin: '20px auto',
    padding: '20px',
    border: '1px solid grey',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    maxWidth: '400px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    fontFamily: "Outfit",
    marginBottom: '15px',
    textAlign: 'left',
    width: '95%',
  },
  input: {
    fontFamily: "Outfit",
    backgroundColor: '#141414',
    color: 'white',
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    fontFamily: "Outfit",
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  vacationPlan: {
    fontFamily: "Outfit",
    color: 'white',
    marginTop: '20px',
    padding: '20px',
    border: '1px solid grey',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'left',
  },
};

export default HomePage;
