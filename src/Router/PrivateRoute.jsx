import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../Components/Context/AuthContext';

const PrivateRoute = ({children}) => {

  const {user} = use(AuthContext);

  if(!user){
    <Navigate to="/signin"></Navigate>
  }
  return children;
};

export default PrivateRoute;