import { useState } from "react";

import FormContainer from "../common/FormContainer";
import Button from "../common/Button";

function RealizarInforme() {

  const [informe, setInforme] = useState({
    trabajador: "",
    tipoInforme: "",
    observaciones: ""
  });

  const handleChange = (e) => {

    setInforme({
      ...informe,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(informe);

    alert("Informe generado correctamente");

  };

  return (
    <FormContainer title="Generar Informe">

      <form onSubmit={handleSubmit}>

        <div className="mb-3">

          <label className="form-label fw-bold">
            Trabajador
          </label>

          <select
            name="trabajador"
            className="form-select"
            value={informe.trabajador}
            onChange={handleChange}
          >
            <option value="">
              Seleccione...
            </option>

            <option value="Carlos Ramírez">
              Carlos Ramírez
            </option>

            <option value="Ana Torres">
              Ana Torres
            </option>

            <option value="Luis Gómez">
              Luis Gómez
            </option>

          </select>

        </div>

        <div className="mb-3">

          <label className="form-label fw-bold">
            Tipo de Informe
          </label>

          <select
            name="tipoInforme"
            className="form-select"
            value={informe.tipoInforme}
            onChange={handleChange}
          >
            <option value="">
              Seleccione...
            </option>

            <option value="Desempeño">
              Desempeño
            </option>

            <option value="Asistencia">
              Asistencia
            </option>

            <option value="Evaluación">
              Evaluación
            </option>

          </select>

        </div>

        <div className="mb-3">

          <label className="form-label fw-bold">
            Observaciones
          </label>

          <textarea
            rows="5"
            className="form-control"
            name="observaciones"
            value={informe.observaciones}
            onChange={handleChange}
          />

        </div>

        <Button
          text="Generar Informe"
          type="submit"
          variant="primary"
        />

      </form>

    </FormContainer>
  );
}

export default RealizarInforme;