
import React, { useEffect, useState } from 'react';

function Home() {
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    // Recuperar el nombre del usuario desde localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setNombre(storedUser.nombre);
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Bienvenido, {nombre || 'Estudiante'} 👋</h2>

      <section style={{ marginTop: '30px' }}>
        <h3>📰 Noticias del centro educativo</h3>
        <ul>
          <li>📅 Taller de ciencias este viernes a las 10:00 a.m.</li>
          <li>🧪 Feria de proyectos — inscripciones abiertas</li>
          <li>🎓 Grados programados para el 15 de junio</li>
        </ul>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h3>📚 Acceso directo a clases</h3>
        <p>
          Puedes consultar los materiales en este enlace:
        </p>
        <a
          href="https://drive.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir a material de estudio
        </a>
      </section>
    </div>
  );
}

export default Home;


