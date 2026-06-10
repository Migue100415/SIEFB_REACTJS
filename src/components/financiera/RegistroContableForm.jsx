import { useState } from "react";

import FormContainer from "../common/FormContainer";
import Button from "../common/Button";

import {
  crearRegistro
} from "../../services/registroContableService";

function RegistroContableForm({
  titulo
}) {

  const [registro, setRegistro] =
    useState({
      fecha: "",
      cantidadPago: "",
      comprobante: "",
      tipo: "ENTRADA"
    });

  const handleChange = (e) => {

    setRegistro({
      ...registro,
      [e.target.name]:
        e.target.value
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const payload = {
          ...registro,
          cantidadPago:
            Number(
              registro.cantidadPago
            ),
          administrador: {
            id: 1
          }
        };

        await crearRegistro(
          payload
        );

        alert(
          "Registro guardado correctamente"
        );

        setRegistro({
          fecha: "",
          cantidadPago: "",
          comprobante: "",
          tipo: "ENTRADA"
        });

      } catch (error) {

        console.error(error);

        alert(
          "Error al guardar"
        );

      }

    };

  return (
    <FormContainer
      title={titulo}
    >

      <form
        onSubmit={
          handleSubmit
        }
      >

        <div className="mb-3">

          <label className="form-label">
            Fecha
          </label>

          <input
            type="date"
            name="fecha"
            className="form-control"
            value={
              registro.fecha
            }
            onChange={
              handleChange
            }
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Cantidad
          </label>

          <input
            type="number"
            name="cantidadPago"
            className="form-control"
            value={
              registro.cantidadPago
            }
            onChange={
              handleChange
            }
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Comprobante
          </label>

          <input
            type="text"
            name="comprobante"
            className="form-control"
            value={
              registro.comprobante
            }
            onChange={
              handleChange
            }
          />

        </div>

        <div className="mb-4">

          <label className="form-label">
            Tipo Movimiento
          </label>

          <select
            name="tipo"
            className="form-select"
            value={
              registro.tipo
            }
            onChange={
              handleChange
            }
          >

            <option value="ENTRADA">
              Entrada
            </option>

            <option value="SALIDA">
              Salida
            </option>

          </select>

        </div>

        <Button
          text="Registrar"
          variant="success"
          type="submit"
        />

      </form>

    </FormContainer>
  );
}

export default RegistroContableForm;