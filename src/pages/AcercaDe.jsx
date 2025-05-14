
import React from 'react';

function AcercaDe() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Acerca de Nuestra Institución</h2>

      <img
        src="https://cdn.pixabay.com/photo/2015/09/02/12/45/students-918982_1280.jpg"
        alt="Equipo docente"
        style={{ width: '100%', maxWidth: '700px', borderRadius: '10px', marginBottom: '20px' }}
      />

      <section style={{ marginBottom: '20px' }}>
        <h3>📖 Historia</h3>
        <p>
          Fundada en 1998, nuestra academia ha formado miles de estudiantes en distintas áreas del conocimiento,
          fomentando siempre la excelencia, el respeto y la innovación.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3>🎯 Misión</h3>
        <p>
          Brindar educación de calidad, inclusiva y transformadora para el desarrollo integral de nuestros estudiantes.
        </p>
      </section>

      <section>
        <h3>👁 Visión</h3>
        <p>
          Ser una institución líder en educación con impacto regional, nacional e internacional, comprometida con la
          innovación y el desarrollo humano.
        </p>
      </section>
    </div>
  );
}

export default AcercaDe;

