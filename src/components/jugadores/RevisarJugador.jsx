import { useEffect, useState } from "react";

import FormContainer from "../common/FormContainer";
import DataTable from "../common/DataTable";

import {
  obtenerJugadores
} from "../../services/jugadorService";

function RevisarJugador() {

  const [busqueda, setBusqueda] = useState("");

  const [jugadores, setJugadores] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

  async function cargarDatos() {

    try {

      const data =
        await obtenerJugadores();

      setJugadores(data);

    } catch (error) {

      console.error(
        "Error cargando jugadores:",
        error
      );

    } finally {

      setLoading(false);

    }

  }

  cargarDatos();

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
      key: "eps",
      label: "EPS"
    }
  ];

  const jugadoresFiltrados =
    jugadores.filter((jugador) =>
      jugador.nombre
        ?.toLowerCase()
        .includes(
          busqueda.toLowerCase()
        )
    );

  return (
    <FormContainer title="Consultar Jugadores">

      <div className="mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Buscar jugador..."
          value={busqueda}
          onChange={(e) =>
            setBusqueda(e.target.value)
          }
        />

      </div>

      {loading ? (

        <p>Cargando jugadores...</p>

      ) : (

        <DataTable
          columns={columns}
          data={jugadoresFiltrados}
        />

      )}

    </FormContainer>
  );
}

export default RevisarJugador;