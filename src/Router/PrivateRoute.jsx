import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Components/Context/AuthContext';
import { div } from 'motion/react-client';

const PrivateRoute = ({ children }) => {

  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return <div><span className="loading loading-infinity loading-xs"></span>
      <span className="loading loading-infinity loading-sm"></span>
      <span className="loading loading-infinity loading-md"></span>
      <span className="loading loading-infinity loading-lg"></span>
      <span className="loading loading-infinity loading-xl"></span></div>
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname}></Navigate>
  }
  return children;
};

export default PrivateRoute;