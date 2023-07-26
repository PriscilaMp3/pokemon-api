import React from 'react';

const Footer = ({ paginaInicio, cambioPagina }) => {
  return (
    <footer>
      <div className="pagination">
        <button onClick={() => cambioPagina (paginaInicio - 1)} disabled={paginaInicio=== 1}>
          Anterior
        </button>
        <span> Pagina {paginaInicio}</span>
        <button onClick={() => cambioPagina(paginaInicio + 1)}>Siguiente</button>
      </div>
    </footer>
  );
};

export default Footer;