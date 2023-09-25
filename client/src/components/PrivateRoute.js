import React from 'react'
import { Navigate ,useRoutes} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
const PrivateRoute = ({children}) => {
 
  let {user}=useContext(AuthContext)
  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute

