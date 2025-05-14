
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Traer usuario almacenado del localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      alert('Inicio de sesión exitoso 🎉');
      navigate('/home');
    } else {
      alert('Correo o contraseña incorrectos ❌');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Iniciar sesión
        </button>
      </form>
      <p style={{ marginTop: '10px' }}>
        ¿No tienes cuenta? <Link to="/register">Registrarse</Link>
      </p>
    </div>
  );
}

export default Login;


