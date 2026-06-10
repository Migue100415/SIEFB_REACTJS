function DataTable({
  columns,
  data,
  onDelete,
  onEdit
}) {

  const mostrarAcciones =
    onDelete || onEdit;

  return (

    <table className="table table-striped table-hover">

      <thead>

        <tr>

          {columns.map((column) => (

            <th key={column.key}>
              {column.label}
            </th>

          ))}

          {mostrarAcciones && (
            <th>Acciones</th>
          )}

        </tr>

      </thead>

      <tbody>

        {data.length > 0 ? (

          data.map((item) => (

            <tr key={item.id}>

              {columns.map((column) => (

                <td key={column.key}>
                  {item[column.key]}
                </td>

              ))}

              {mostrarAcciones && (

                <td>

                  {onEdit && (

                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() =>
                        onEdit(item)
                      }
                    >
                      Editar
                    </button>

                  )}

                  {onDelete && (

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        onDelete(item.id)
                      }
                    >
                      Eliminar
                    </button>

                  )}

                </td>

              )}

            </tr>

          ))

        ) : (

          <tr>

            <td
              colSpan={
                columns.length +
                (mostrarAcciones ? 1 : 0)
              }
              className="text-center"
            >
              No se encontraron registros
            </td>

          </tr>

        )}

      </tbody>

    </table>

  );
}

export default DataTable;