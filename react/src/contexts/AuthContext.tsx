// contexts/AuthContext.tsx
import { createContext, useContext, useState, ReactNode, } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  userRole: string | null;
  login: (role: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  userRole: null,
  login: () => {},
  logout: () => {},
});
//console.log('por aca paso:');
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Recupera el estado inicial desde localStorage
  const [userRole, setUserRole] = useState<string | null>(
    localStorage.getItem("authRole") || null
    
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem("authRole")
  );

  const login = (role: string) => {
    console.log('Iniciando sesión con rol:'+ role);  // Verifica que el rol se pase correctamente
    setIsAuthenticated(true);
    setUserRole(role);
    // console.log('User rolvv es:', role);
    localStorage.setItem("authRole", role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem("authRole");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};