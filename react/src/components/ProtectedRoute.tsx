
// components/ProtectedRoute.tsx
// import { useAuth } from '../contexts/AuthContext';
// import { Navigate, Outlet } from 'react-router-dom';

// export const ProtectedRoute = () => {
//   const { isAuthenticated } = useAuth();
  
//   if (!isAuthenticated) {
//     console.log('Redirigiendo a:', isAuthenticated);
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };


import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('authToken') !== null;
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

//export default ProtectedRoute;
