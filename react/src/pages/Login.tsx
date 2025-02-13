// pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const { login } = useAuth();
  const navigate = useNavigate();

  const validUsers = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'doctor', password: 'doctor456', role: 'doctor' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user = validUsers.find(
    u => u.username === username && u.password === password
    );

    if (user) {
    console.log('user role del login:' + user.role);
    // login(user.role);
    localStorage.setItem('authToken', 'mockToken123');
    localStorage.setItem('userRole', user.role);
    navigate('/home');
    } else {
    alert('Credenciales incorrectas');
    }
};

return (
    <div>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}