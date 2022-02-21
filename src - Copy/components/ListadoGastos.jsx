import Gasto from "./Gasto";


function ListadoGastos({ gastos, setGasto, eliminarGasto }) {

    

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {gastos && gastos.length ? (
          <>
              <h2 className="font-black text-3xl text-center">Listado de Gastos</h2>
              <p className="text-xl mt-4 mb-5 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold">Gastos</span>
              </p>

            { gastos.map((gasto) => (
                <Gasto 
                  key={gasto.id} 
                  gasto={gasto} 
                  setGasto={setGasto} 
                  eliminarGasto={eliminarGasto}
                />
            ))}
          </>
        ) : (
          <>
              <h2 className="text-gray-700 font-black text-3xl text-center">
                No hay gastos aun...
              </h2>
              <p className="text-xl mt-4 mb-5 text-center">
                Comienza agregando gastos y {""}
                <span className="text-indigo-600 font-bold"> apareceran aqui</span>
              </p>
          </>
        )}
    </div>
  );
}

export default ListadoGastos;
