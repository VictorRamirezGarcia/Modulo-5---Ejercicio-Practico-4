
// components/AuthorizedRoute.tsx
// import { useAuth } from '../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  allowedRoles: string[]
};

export const AuthorizedRoute = ({ allowedRoles }: Props) => {

  const userRole  = localStorage.getItem('userRole');

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;

};