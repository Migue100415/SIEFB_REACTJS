import { useEffect, useState } from "react";

import FormContainer from "../common/FormContainer";
import DataTable from "../common/DataTable";

import {
  obtenerTrabajadores
} from "../../services/trabajadorService";

function RevisarTrabajador() {

  const [busqueda, setBusqueda] =
    useState("");

  const [trabajadores, setTrabajadores] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    let activo = true;

    async function cargarDatos() {

      try {

        const data =
          await obtenerTrabajadores();

        if (activo) {
          setTrabajadores(data);
        }

      } catch (error) {

        console.error(
          "Error cargando trabajadores:",
          error
        );

      } finally {

        if (activo) {
          setLoading(false);
        }

      }

    }

    cargarDatos();

    return () => {
      activo = false;
    };

  }, []);

  const columns = [
    {
      key: "nombre",
      label: "Nombre"
    },
    {
      key: "documento",
      label: "Documento"
    },
    {
      key: "telefono",
      label: "Teléfono"
    },
    {
      key: "arl",
      label: "ARL"
    }
  ];

  const trabajadoresFiltrados =
    trabajadores.filter(
      (trabajador) =>
        trabajador.nombre
          ?.toLowerCase()
          .includes(
            busqueda.toLowerCase()
          )
    );

  return (
    <FormContainer title="Consultar Trabajadores">

      <div className="mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Buscar trabajador..."
          value={busqueda}
          onChange={(e) =>
            setBusqueda(e.target.value)
          }
        />

      </div>

      {loading ? (

        <p>Cargando trabajadores...</p>

      ) : (

        <DataTable
          columns={columns}
          data={trabajadoresFiltrados}
        />

      )}

    </FormContainer>
  );
}

export default RevisarTrabajador;