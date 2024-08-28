import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Obtener el estado de autenticación

  return isAuthenticated ? children : <Navigate to="/" />; // Si está autenticado, renderizar el componente hijo; si no, redirigir al login
};

export default ProtectedRoute;
