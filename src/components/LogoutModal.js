import React from 'react';
import './LogoutModal.css'; // Asegúrate de que los estilos están aplicados
import { useForm } from 'react-hook-form';  // Importar useForm para manejar el formulario
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';  // Importar la acción de logout

const LogoutModal = ({ closeModal, onConfirm }) => {
  const { reset } = useForm();  // Utilizar reset de useForm para limpiar el formulario
  const dispatch = useDispatch();

  const handleLogout = () => {
    reset();  // Limpiar el formulario
    dispatch(logout());  // Despachar la acción de logout
    onConfirm();  // Llamar a la función de confirmación del logout
  };

  return (
    <div className="modal">
      <button className="close-button" onClick={closeModal}>X</button>

      <div className="modal-content">
        <span>¿Estás seguro de que quieres cerrar sesión?</span>
        <button className="confirm-button" onClick={handleLogout}>Presionar para salir</button>
      </div>
    </div>
  );
};

export default LogoutModal;
