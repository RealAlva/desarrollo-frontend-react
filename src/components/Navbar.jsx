import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice'; // Importar la acción de logout
import { useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal'; // Asegúrate de importar el modal de logout
import './Navbar.css'; // Importar los estilos del navbar

const Navbar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Estado para mostrar el modal
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, email } = useSelector((state) => state.auth); // Obtener el usuario autenticado desde Redux

  const handleLogoutClick = () => {
    setShowLogoutModal(true); // Mostrar el modal de logout al hacer clic en el botón "Logout"
  };

  const handleLogoutConfirm = () => {
    dispatch(logout()); // Despachar la acción de logout
    navigate('/'); // Redirigir al usuario a la página de login
    setShowLogoutModal(false); // Cerrar el modal después de hacer logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Forms</li>
        </ul>
      </div>
      <div className="navbar-right">
        {user && email && (
          <div>
            Bienvenido {user}: {email}
          </div>
        )}
        <button type="button" onClick={handleLogoutClick}>Logout</button> {/* Botón para abrir el modal */}
      </div>

      {/* Modal de logout */}
      {showLogoutModal && (
        <LogoutModal 
          closeModal={() => setShowLogoutModal(false)} // Cerrar el modal sin hacer logout
          onConfirm={handleLogoutConfirm} // Confirmar el logout
        />
      )}
    </nav>
  );
};

export default Navbar;
