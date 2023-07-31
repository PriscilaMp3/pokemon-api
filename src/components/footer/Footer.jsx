import React from "react";

const Footer = ({ paginaInicio, cambioPagina }) => {
  return (
    <footer>
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6">
          <div className="pagination">
            <button
              class="btn btn-warning"
              onClick={() => cambioPagina(paginaInicio - 1)}
              disabled={paginaInicio === 1}
            >
              Anterior
            </button>
            <span class="form-control"> Pagina {paginaInicio}</span>
            <button
              class="btn btn-warning"
              onClick={() => cambioPagina(paginaInicio + 1)}
              disabled={paginaInicio === 65}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
