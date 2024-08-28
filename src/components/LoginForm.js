import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/slices/authSlice';  // Ya no importamos logout aquí, ya que se manejará en otro lugar
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Toggle para mostrar/esconder la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Manejo de la lógica de login
  const onSubmit = (data) => {
    const { user, email, password } = data;

    if (password === 'mod7ReactUSIP') {
      dispatch(loginSuccess({ user, email, token: 'dummy-token' }));
      setLoginError('');
      navigate('/dashboard');  // Redirigir al dashboard si el login es exitoso
    } else {
      setLoginError('Password incorrecto');  // Mostrar mensaje de error si el password es incorrecto
    }
  };

  // Función para limpiar el formulario
  const handleReset = () => {
    reset();  // Esto limpiará todos los campos del formulario
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login Form</h2>
        <div className="form-group">
          <label>Username:</label>
          <input {...register('user', { required: true })} placeholder="Enter your username" />
          {errors.user && <p className="error">Username is required</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Enter your email" />
          {errors.email && <p className="error">A valid email is required</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <div className="password-wrapper">
            <input 
              {...register('password', { required: true })} 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password" 
            />
            <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="error">Password is required</p>}
        </div>
        {loginError && <div className="error-message">{loginError}</div>}
        <button type="submit" className="submit-btn">Submit</button>  {/* Cambiar "Login" a "Submit" */}
        <button type="button" className="reset-btn" onClick={handleReset}>Clear Form</button>  {/* Botón para limpiar el formulario */}
      </form>
    </div>
  );
};

export default LoginForm;
