import React from 'react';
// Elimina esta línea:
// import Navbar from '../components/Navbar';  // Asegúrate de importar correctamente el Navbar

const Dashboard = () => {
  return (
    <div>
      {/* Elimina también esta línea que renderiza el Navbar */}
      {/* <Navbar /> */}
      <h1>Dashboard</h1>
      <p>You are logged in and can view this page.</p>
    </div>
  );
};

export default Dashboard;
