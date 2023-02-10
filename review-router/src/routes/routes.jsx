import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import { api } from '../services/api';

const AppRoutes = () => {
  const navigate = useNavigate(); /* Utilizar dentro de lógicas (FUNÇÕES) */

  const registerUser = async (formData) => {
    try {
      const response = await api.post('/users', formData);
      console.log(response.data);
      navigate('/');
      alert(response.data.message);
    } catch (error) {
      console.log(error);  
    }
  }

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage registerUser={registerUser} />} />
    </Routes>    
  )
}

export default AppRoutes;