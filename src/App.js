import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import Navbar from './Navbar';
import RegistrationPage from './RegistrationPage';
import ErrorPage from './ErrorPage';
import LandingPage from './LandingPage';
import ProtectedRoute from './ProtectedRoute';
import HistoryPage from './HistoryPage';


function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Define routes where the Navbar should not be shown
  const noNavbarRoutes = ['/login', '/', '/register'];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/error" element={<ErrorPage />} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/history" 
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
