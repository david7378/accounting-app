import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ gastos, setGastos, gasto, setGasto,  }) => {
  const [fecha, setFecha] = useState("");
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");
  const [formapago, setFormapago] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(gasto).length > 0) {
      setFecha(gasto.fecha);
      setNombre(gasto.nombre);
      setMonto(gasto.monto);
      setFormapago(gasto.formapago);
      setDescripcion(gasto.descripcion);
    }
  }, [gasto]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario

    if ([fecha, nombre, monto, formapago, descripcion].includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }
    setError(false);

    // Objeto de gasto
    const objetoGasto = {
      fecha,
      nombre,
      monto,
      formapago,
      descripcion,
    };

    if (gasto.id) {
      // Editando el registro
      objetoGasto.id = gasto.id;

      const gastosActualizados = gastos.map( gastoState =>
        gastoState.id === gasto.id ? objetoGasto : gastoState
      );

      setGastos(gastosActualizados);
      setGasto({});
    } else {
      // Nuevo registro
      objetoGasto.id = generarId();
      setGastos([...gastos, objetoGasto]);
    }

    // Reiniciar el form
    setFecha("");
    setNombre("");
    setMonto("");
    setFormapago("");
    setDescripcion("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mt-3">
      <h2 className="text-gray-700 font-black text-3xl text-center">
        Seguimiento de cuentas
      </h2>

      <p className="text-lg mt-4 text-center mb-5">
        Carga tus gastos diarios y {""}
        <span className="text-blue-700 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha del gasto
          </label>
          <input
            id="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="monto"
            className="block text-gray-700 uppercase font-bold"
          >
            Monto
          </label>
          <input
            id="monto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Monto $"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="formapago"
            className="block text-gray-700 uppercase font-bold"
          >
            Forma de pago
          </label>
          <input
            id="formapago"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Forma de pago"
            value={formapago}
            onChange={(e) => setFormapago(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripcion
          </label>
          <textarea
            id="descripcion"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Descripcion del gasto a agregar..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={gasto.id ? "Editar Gasto" : "Agregar  Gasto"}
        />
      </form>
    </div>
  );
};

export default Formulario;
