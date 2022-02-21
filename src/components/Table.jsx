import { useState, useEffect } from "react";
import ItemTable from "./ItemTable";
import Total from "./Total";

const Table = ({ gastos, setGasto, eliminarGasto, keyId }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
      //console.log(totaly);
    }
  }, [gastos]);

  return (
    <div className="md:w-1/2 lg:w-3/5 max-w-max mx-10 mt-1  md:h-screen overflow-auto md:mb-5 ">
      {gastos && gastos.length ? (
        <div>
          {/* <h2 className="text-gray-700 font-black text-3xl text-center">
            Listado de Gastos
          </h2> */}
          <p className="text-xl mt-4 mb-5 text-center">
            Administra tus {""}
            <span className="text-blue-700 font-bold">Gastos</span>
          </p>
          <input className="mb-1 bg-transparent border-none  text-gray-800 mr-3 py-1 px-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Buscar por nombre"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <table className="table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Monto</th>
                <th>Pago</th>
                <th>Descripción</th>
                <th>Operación</th>
              </tr>
            </thead>
            <tbody>
              {gastos
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.nombre
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((gasto) => (
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
        <div className=" text-center mx-12 mt-3">
          <h2 className="text-gray-700 font-black text-3xl ">
            No hay gastos aun...
          </h2>
          <p className="text-lg mt-4 mb-5">
            Comienza agregando gastos y {""}
            <span className="text-blue-700 font-bold"> apareceran aqui</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Table;
