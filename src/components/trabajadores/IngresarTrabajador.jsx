import { useState } from "react";

import FormContainer from "../common/FormContainer";
import InputField from "../common/InputField";
import Button from "../common/Button";

import {
  crearTrabajador
} from "../../services/trabajadorService";

function IngresarTrabajador() {

  const [trabajador, setTrabajador] = useState({
    documento: "",
    nombre: "",
    direccion: "",
    telefono: "",
    actaMedica: "",
    eps: "",
    foto: "",
    fechaNacimiento: "",
    arl: "",
    diaIngreso: ""
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {

    setTrabajador({
      ...trabajador,
      [e.target.name]: e.target.value
    });

  };

  const validarFormulario = () => {

    const nuevosErrores = {};

    if (!trabajador.documento.trim()) {
      nuevosErrores.documento =
        "El documento es obligatorio";
    } else if (trabajador.documento.length > 20) {
      nuevosErrores.documento =
        "Máximo 20 caracteres";
    }

    if (!trabajador.nombre.trim()) {
      nuevosErrores.nombre =
        "El nombre es obligatorio";
    } else if (trabajador.nombre.length > 60) {
      nuevosErrores.nombre =
        "Máximo 60 caracteres";
    }

    if (!trabajador.direccion.trim()) {
      nuevosErrores.direccion =
        "La dirección es obligatoria";
    }

    if (!trabajador.telefono.trim()) {
      nuevosErrores.telefono =
        "El teléfono es obligatorio";
    }

    if (!trabajador.actaMedica.trim()) {
      nuevosErrores.actaMedica =
        "El acta médica es obligatoria";
    }

    if (!trabajador.eps.trim()) {
      nuevosErrores.eps =
        "La EPS es obligatoria";
    }

    if (!trabajador.foto.trim()) {
      nuevosErrores.foto =
        "La foto es obligatoria";
    }

    if (!trabajador.fechaNacimiento) {
      nuevosErrores.fechaNacimiento =
        "La fecha de nacimiento es obligatoria";
    }

    if (!trabajador.arl.trim()) {
      nuevosErrores.arl =
        "La ARL es obligatoria";
    }

    if (!trabajador.diaIngreso) {
      nuevosErrores.diaIngreso =
        "La fecha de ingreso es obligatoria";
    }

    setErrores(nuevosErrores);

    return (
      Object.keys(nuevosErrores).length === 0
    );
  };

  const limpiarFormulario = () => {

    setTrabajador({
      documento: "",
      nombre: "",
      direccion: "",
      telefono: "",
      actaMedica: "",
      eps: "",
      foto: "",
      fechaNacimiento: "",
      arl: "",
      diaIngreso: ""
    });

    setErrores({});
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    try {

      await crearTrabajador(trabajador);

      alert(
        "Trabajador registrado correctamente"
      );

      limpiarFormulario();

    } catch (error) {

      console.error(error);

      alert(
        "Error al registrar trabajador"
      );

    }

  };

  return (
    <FormContainer title="Registro de Trabajador">

      <form onSubmit={handleSubmit}>

        <InputField
          label="Documento"
          name="documento"
          value={trabajador.documento}
          onChange={handleChange}
        />
        {errores.documento &&
          <small className="text-danger">
            {errores.documento}
          </small>
        }

        <InputField
          label="Nombre Completo"
          name="nombre"
          value={trabajador.nombre}
          onChange={handleChange}
        />
        {errores.nombre &&
          <small className="text-danger">
            {errores.nombre}
          </small>
        }

        <InputField
          label="Dirección"
          name="direccion"
          value={trabajador.direccion}
          onChange={handleChange}
        />
        {errores.direccion &&
          <small className="text-danger">
            {errores.direccion}
          </small>
        }

        <InputField
          label="Teléfono"
          name="telefono"
          value={trabajador.telefono}
          onChange={handleChange}
        />
        {errores.telefono &&
          <small className="text-danger">
            {errores.telefono}
          </small>
        }

        <InputField
          label="Acta Médica"
          name="actaMedica"
          value={trabajador.actaMedica}
          onChange={handleChange}
        />
        {errores.actaMedica &&
          <small className="text-danger">
            {errores.actaMedica}
          </small>
        }

        <InputField
          label="EPS"
          name="eps"
          value={trabajador.eps}
          onChange={handleChange}
        />
        {errores.eps &&
          <small className="text-danger">
            {errores.eps}
          </small>
        }

        <InputField
          label="Foto"
          name="foto"
          value={trabajador.foto}
          onChange={handleChange}
        />
        {errores.foto &&
          <small className="text-danger">
            {errores.foto}
          </small>
        }

        <InputField
          label="Fecha de Nacimiento"
          type="date"
          name="fechaNacimiento"
          value={trabajador.fechaNacimiento}
          onChange={handleChange}
        />
        {errores.fechaNacimiento &&
          <small className="text-danger">
            {errores.fechaNacimiento}
          </small>
        }

        <InputField
          label="ARL"
          name="arl"
          value={trabajador.arl}
          onChange={handleChange}
        />
        {errores.arl &&
          <small className="text-danger">
            {errores.arl}
          </small>
        }

        <InputField
          label="Fecha de Ingreso"
          type="date"
          name="diaIngreso"
          value={trabajador.diaIngreso}
          onChange={handleChange}
        />
        {errores.diaIngreso &&
          <small className="text-danger">
            {errores.diaIngreso}
          </small>
        }

        <div className="d-flex gap-2 mt-4">

          <Button
            text="Cancelar"
            variant="danger"
            type="button"
            onClick={limpiarFormulario}
          />

          <Button
            text="Registrar"
            variant="success"
            type="submit"
          />

        </div>

      </form>

    </FormContainer>
  );
}

export default IngresarTrabajador;