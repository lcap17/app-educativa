
import React from 'react';

function Contacto() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>📬 Contáctanos</h2>

      {/* FORMULARIO */}
      <form onSubmit={(e) => e.preventDefault()} style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Tu nombre"
          required
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%', maxWidth: '400px' }}
        />
        <input
          type="email"
          placeholder="Tu correo"
          required
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%', maxWidth: '400px' }}
        />
        <textarea
          placeholder="Tu mensaje"
          required
          style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%', maxWidth: '400px', height: '100px' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Enviar
        </button>
      </form>

      {/* INFORMACIÓN DE CONTACTO */}
      <div style={{ marginBottom: '20px' }}>
        <p><strong>Teléfono:</strong> (604) 123 4567</p>
        <p><strong>Correo:</strong> contacto@educativa.edu.co</p>
        <p><strong>Dirección:</strong> Calle 45 #12-34, Medellín, Colombia</p>
      </div>

      {/* MAPA */}
      <div>
        <h4>📍 Nuestra ubicación</h4>
        <a
          href="https://www.google.com/maps/place/Medellín,+Antioquia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/03/31/18/05/map-1296733_1280.png"
            alt="Mapa"
            style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
          />
        </a>
      </div>
    </div>
  );
}

export default Contacto;

