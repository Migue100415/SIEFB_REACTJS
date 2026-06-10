import { useEffect, useState } from "react";

import FormContainer from "../common/FormContainer";
import DataTable from "../common/DataTable";

import {
  obtenerRegistros,
  eliminarRegistro
} from "../../services/registroContableService";

function RevisarRegistrosContables() {

  const [busqueda, setBusqueda] =
    useState("");

  const [registros, setRegistros] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    let activo = true;

    async function cargarDatos() {

      try {

        const data =
          await obtenerRegistros();

        if (activo) {
          setRegistros(data);
        }

      } catch (error) {

        console.error(
          "Error cargando registros:",
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

  const handleDelete =
    async (id) => {

      const confirmar =
        window.confirm(
          "¿Desea eliminar este registro?"
        );

      if (!confirmar) {
        return;
      }

      try {

        await eliminarRegistro(id);

        setRegistros(
          registros.filter(
            (registro) =>
              registro.id !== id
          )
        );

        alert(
          "Registro eliminado correctamente"
        );

      } catch (error) {

        console.error(error);

        alert(
          "Error al eliminar el registro"
        );

      }

    };

  const columns = [
    {
      key: "fecha",
      label: "Fecha"
    },
    {
      key: "cantidadPago",
      label: "Cantidad"
    },
    {
      key: "comprobante",
      label: "Comprobante"
    },
    {
      key: "tipo",
      label: "Tipo"
    }
  ];

  const registrosFiltrados =
    registros.filter((registro) =>
      registro.comprobante
        ?.toLowerCase()
        .includes(
          busqueda.toLowerCase()
        )
    );

  return (

    <FormContainer
      title="Consultar Registros Contables"
    >

      <div className="mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Buscar comprobante..."
          value={busqueda}
          onChange={(e) =>
            setBusqueda(e.target.value)
          }
        />

      </div>

      {loading ? (

        <p>
          Cargando registros...
        </p>

      ) : (

        <DataTable
          columns={columns}
          data={registrosFiltrados}
          onDelete={handleDelete}
  
        />

      )}

    </FormContainer>

  );
}

export default RevisarRegistrosContables;