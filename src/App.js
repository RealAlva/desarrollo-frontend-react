import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';  // Importar el Navbar
import ProtectedRoute from './components/ProtectedRoute';  // Ruta protegida

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        {isAuthenticated && <Navbar />}  {/* Mostrar el Navbar solo si el usuario está autenticado */}
        
        <Routes>
          <Route path="/" element={<LandingPage />} />  {/* Ruta pública */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
