import { useState } from "react";

import InputField from "../common/InputField";
import Button from "../common/Button";
import FormContainer from "../common/FormContainer";


import {
  crearJugador
} from "../../services/jugadorService";


function IngresarJugador() {

  const [jugador, setJugador] = useState({
    documento: "",
    nombre: "",
    direccion: "",
    telefono: "",
    actaMedica: "",
    eps: "",
    foto: "",
    fechaNacimiento: "",
    nombreAcudiente: "",
    diaInscripcion: ""
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setJugador({
      ...jugador,
      [e.target.name]: e.target.value
    });
  };

  const validarFormulario = () => {

    const nuevosErrores = {};

    if (!jugador.documento.trim()) {
      nuevosErrores.documento =
        "El documento es obligatorio";
    } else if (jugador.documento.length > 20) {
      nuevosErrores.documento =
        "Máximo 20 caracteres";
    }

    if (!jugador.nombre.trim()) {
      nuevosErrores.nombre =
        "El nombre es obligatorio";
    } else if (jugador.nombre.length > 60) {
      nuevosErrores.nombre =
        "Máximo 60 caracteres";
    }

    if (!jugador.direccion.trim()) {
      nuevosErrores.direccion =
        "La dirección es obligatoria";
    }

    if (!jugador.telefono.trim()) {
      nuevosErrores.telefono =
        "El teléfono es obligatorio";
    }

    if (!jugador.actaMedica.trim()) {
      nuevosErrores.actaMedica =
        "El acta médica es obligatoria";
    }

    if (!jugador.eps.trim()) {
      nuevosErrores.eps =
        "La EPS es obligatoria";
    }

    if (!jugador.foto.trim()) {
      nuevosErrores.foto =
        "La foto es obligatoria";
    }

    if (!jugador.fechaNacimiento) {
      nuevosErrores.fechaNacimiento =
        "La fecha de nacimiento es obligatoria";
    }

    if (!jugador.nombreAcudiente.trim()) {
      nuevosErrores.nombreAcudiente =
        "El nombre del acudiente es obligatorio";
    }

    if (!jugador.diaInscripcion) {
      nuevosErrores.diaInscripcion =
        "La fecha de inscripción es obligatoria";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  if (!validarFormulario()) {
    return;
  }

  try {

    await crearJugador(jugador);

    alert(
      "Jugador registrado correctamente"
    );

    setJugador({
      documento: "",
      nombre: "",
      direccion: "",
      telefono: "",
      actaMedica: "",
      eps: "",
      foto: "",
      fechaNacimiento: "",
      nombreAcudiente: "",
      diaInscripcion: ""
    });

    setErrores({});

  } catch (error) {

    console.error(error);

    alert(
      "Error al registrar jugador"
    );

  }

};

  return (
    <FormContainer title="Registro de Jugador">

      <form onSubmit={handleSubmit}>

        <InputField
          label="Documento"
          name="documento"
          value={jugador.documento}
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
          value={jugador.nombre}
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
          value={jugador.direccion}
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
          value={jugador.telefono}
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
          value={jugador.actaMedica}
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
          value={jugador.eps}
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
          value={jugador.foto}
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
          value={jugador.fechaNacimiento}
          onChange={handleChange}
        />
        {errores.fechaNacimiento &&
          <small className="text-danger">
            {errores.fechaNacimiento}
          </small>
        }

        <InputField
          label="Nombre Acudiente"
          name="nombreAcudiente"
          value={jugador.nombreAcudiente}
          onChange={handleChange}
        />
        {errores.nombreAcudiente &&
          <small className="text-danger">
            {errores.nombreAcudiente}
          </small>
        }

        <InputField
          label="Fecha de Inscripción"
          type="date"
          name="diaInscripcion"
          value={jugador.diaInscripcion}
          onChange={handleChange}
        />
        {errores.diaInscripcion &&
          <small className="text-danger">
            {errores.diaInscripcion}
          </small>
        }

        <div className="d-flex gap-2 mt-4">

          <Button
            text="Cancelar"
            variant="danger"
          />

          <Button
            text="Registrar"
            type="submit"
            variant="success"
          />

        </div>

      </form>

    </FormContainer>
  );
}

export default IngresarJugador;