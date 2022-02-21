const Gasto = ({ gasto, setGasto, eliminarGasto }) => {
  const { fecha, nombre, monto, formapago, descripcion, id } = gasto;

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este gasto?");

    if (respuesta) {
      eliminarGasto(id);
    }
  };
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Monto: {""}
        <span className="font-normal normal-case">${monto}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Forma de pago: {""}
        <span className="font-normal normal-case">{formapago}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripcion: {""}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => {
            setGasto(gasto);
          }}
        >
          Editar
        </button>

        <button
          className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Gasto;
