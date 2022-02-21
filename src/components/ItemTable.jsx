import React from "react";

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
        <button
          type="button"
          className="h-8 px-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg cursor-pointer focus:shadow-outline hover:bg-indigo-800"
          onClick={() => {
            setGasto(gasto);
          }}
        >
          Editar
        </button>
        <button
          className="h-8 ml-3 px-2 text-sm text-indigo-100 transition-colors duration-150 bg-red-600 rounded-lg cursor-pointer focus:shadow-outline hover:bg-red-800"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default ItemTable;
