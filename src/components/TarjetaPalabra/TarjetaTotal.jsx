import React from "react";
import ModalDetalles from "../ModalDetalles";

export default function TarjetaTotal({ icono, titulo, numero }) {
  return (
    <div className="bg-white shadow-sm border border-gray-200 py-4 w-[32%] p-3 mb-6 justify-start rounded-lg">
      <div className="flex flex-col">
        <div className="flex gap-2 mb-2">
          {icono}
          <span className="text-gray-600 font-medium text-sm">{titulo}</span>
        </div>
        <span className="font-bold text-2xl">{numero}</span>
      </div>
    </div>
  );
}
