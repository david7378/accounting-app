import { useState, useEffect } from "react";
import ItemTable from "./ItemTable";
import Total from "./Total";

const Table = ({ gastos, setGasto, eliminarGasto, keyId }) => {
  const [totally, setTotally] = useState(0);

  useEffect(() => {
    if (gastos.length > 0) {
      const totaly = gastos
        .map((i) => i.monto)
        .reduce((a, b) => {
          console.log(a, b);
          return parseInt(a) + parseInt(b);
        });
      setTotally(totaly);
      console.log(totaly);
    }
  }, [gastos]);

  return (
    <div className="md:w-1/2 lg:w-3/5 max-w-max md:h-screen overflow-y-scroll mt-3">
      {gastos && gastos.length ? (
        <div>
          <h2 className="text-gray-700 font-black text-3xl text-center">Listado de Gastos</h2>
          <p className="text-xl mt-4 mb-5 text-center">
            Administra tus {""}
            <span className="text-blue-700 font-bold">Gastos</span>
          </p>

          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Monto</th>
                <th>Forma de pago</th>
                <th>Descripcion</th>
                <th>Operacion</th>
              </tr>
            </thead>
            <tbody>
              {gastos.map((gasto) => (
                <ItemTable
                  key={gasto.id}
                  gasto={gasto}
                  setGasto={setGasto}
                  eliminarGasto={eliminarGasto}
                />
              ))}
            </tbody>
          </table>
          <Total totally={totally} />
        </div>
      ) : (
        <>
          <h2 className="text-gray-700 font-black text-3xl text-center">
            No hay gastos aun...
          </h2>
          <p className="text-lg mt-4 text-center mb-5">
            Comienza agregando gastos y {""}
            <span className="text-blue-700 font-bold"> apareceran aqui</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Table;
