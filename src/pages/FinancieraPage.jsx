import { useState } from "react";

import RegistroContableForm
from "../components/financiera/RegistroContableForm";

import RevisarRegistrosContables
from "../components/financiera/RevisarRegistrosContables";

function FinancieraPage() {

  const [
    registroSeleccionado,
    setRegistroSeleccionado
  ] = useState(null);

  const [
    recargar,
    setRecargar
  ] = useState(false);

  const actualizarTabla = () => {

    setRegistroSeleccionado(null);

    setRecargar(
      valor => !valor
    );

  };

  return (
    <>

      <RegistroContableForm
        titulo="Registro Contable"
        registroSeleccionado={
          registroSeleccionado
        }
        onGuardar={
          actualizarTabla
        }
        onCancelar={() =>
          setRegistroSeleccionado(
            null
          )
        }
      />

      <hr />

      <RevisarRegistrosContables
        onEdit={
          setRegistroSeleccionado
        }
        recargar={recargar}
      />

    </>
  );
}

export default FinancieraPage;