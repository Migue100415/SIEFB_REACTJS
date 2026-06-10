import { useState } from "react";

import FormContainer from "../common/FormContainer";
import InputField from "../common/InputField";
import Button from "../common/Button";

function PagoMensualidad() {

  const [pago, setPago] = useState({
    jugador: "",
    fecha: "",
    valor: "",
    observacion: ""
  });

  const handleChange = (e) => {

    setPago({
      ...pago,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(pago);

    alert("Mensualidad registrada");

  };

  return (
    <FormContainer title="Pago de Mensualidad">

      <form onSubmit={handleSubmit}>

        <InputField
          label="Jugador"
          name="jugador"
          value={pago.jugador}
          onChange={handleChange}
          required
        />

        <InputField
          label="Fecha"
          type="date"
          name="fecha"
          value={pago.fecha}
          onChange={handleChange}
        />

        <InputField
          label="Valor"
          type="number"
          name="valor"
          value={pago.valor}
          onChange={handleChange}
        />

        <div className="mb-3">

          <label className="form-label fw-bold">
            Observaciones
          </label>

          <textarea
            className="form-control"
            rows="4"
            name="observacion"
            value={pago.observacion}
            onChange={handleChange}
          />

        </div>

        <Button
          text="Registrar Pago"
          type="submit"
          variant="success"
        />

      </form>

    </FormContainer>
  );
}

export default PagoMensualidad;