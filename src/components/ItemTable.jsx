import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ItemTable({ gasto, setGasto, eliminarGasto, totally }) {
  const { fecha, nombre, monto, formapago, descripcion, id } = gasto;

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este gasto?");

    if (respuesta) {
      eliminarGasto(id);
    }
  };
  return (
    <tr>
      <td>{gasto.fecha}</td>
      <td>{gasto.nombre}</td>
      <td>${gasto.monto}</td>
      <td>{gasto.formapago}</td>
      <td>{gasto.descripcion}</td>
      <td>
        <EditIcon
          class="inline-flex items-center justify-center w-5 h-5 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-300 rounded-full focus:shadow-outline hover:bg-blue-200"
          type="button"
          onClick={() => {
            setGasto(gasto);
          }}
        />

        <DeleteIcon
          class="inline-flex items-center justify-center w-5 h-5 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-300 rounded-full focus:shadow-outline hover:bg-red-200"
          type="button"
          onClick={handleEliminar}
        />
      </td>
    </tr>
  );
}

export default ItemTable;
