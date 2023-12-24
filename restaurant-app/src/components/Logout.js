import React, { useEffect } from 'react'
import { useNavigate,Navigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function Logout() {
  localStorage.clear()
  return <Navigate to="/login" replace />
}
