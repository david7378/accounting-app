import React from "react";

function Total({ totally }) {
  return (
    <div className="bg-blue-700 text-white font-bold uppercase shadow-md">
      <p className="text-center shadow-md">Total: <span className=" mx-1">${totally}</span></p>
    </div>
  );
}

export default Total;
