import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Table from "./components/Table";

function App() {
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const obtenerLS = () => {
      const gastosLS = JSON.parse(localStorage.getItem('gastos'))  ?? [];
      setGastos(gastosLS);
    }

    obtenerLS();

  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  const keyId = () => {
   gastos.map(gasto => 
      gasto.id
    ) 
  }

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-10 md:flex">
        <Formulario
          gastos={gastos}
          setGastos={setGastos}
          gasto={gasto}
          setGasto={setGasto}
        />
      
        <Table
         gastos={gastos}
         setGasto={setGasto}
         eliminarGasto={eliminarGasto}
         keyId={keyId}
         />
       
      </div>
    </div>
  );
}

export default App;
