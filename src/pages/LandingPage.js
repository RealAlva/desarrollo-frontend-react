import React from 'react';
import LoginForm from '../components/LoginForm';  // Importar el formulario de login
import './LandingPage.css';  // Asegúrate de que los estilos estén aplicados

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1>Bienvenido a Nuestra Aplicación</h1>
      <p>Accede a tu cuenta para continuar.</p>
      
      <div className="form-section">
        <LoginForm />
      </div>
    </div>
  );
};

export default LandingPage;
