import IngresarTrabajador
from "../components/trabajadores/IngresarTrabajador";

import RevisarTrabajador
from "../components/trabajadores/RevisarTrabajador";

import RealizarInforme
from "../components/trabajadores/RealizarInforme";

function TrabajadoresPage() {

  return (
    <div>

      <IngresarTrabajador />

      <hr />

      <RevisarTrabajador />

      <hr />

      <RealizarInforme />

    </div>
  );
}

export default TrabajadoresPage;