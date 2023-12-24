import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoutes({children}) {
return(
 localStorage.getItem('login')?
 children:
 <Navigate to="/login" replace />
   )
  }
export default ProtectedRoutes