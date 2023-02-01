import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({children}) => {

 const {user}=useAuth0()
  if(user)
  {
    return children
  }
  else {
    return <Navigate to="/"/>
  }


};
export default PrivateRoute;
