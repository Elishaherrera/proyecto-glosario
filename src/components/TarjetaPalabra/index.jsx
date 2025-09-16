import React from "react";
import ModalRef from "../ModalRef";

export default function TarjetaPalabra({
  titulo,
  palabra,
  referencias,
  parrafo,
  palabras,
  unoMas,
}) {
  return (
    <div className="bg-white flex-col shadow-sm border border-gray-200 py-6 px-8 flex m-12 rounded-xl space-y-2">
      <h1 className="font-bold text-xl hover:text-blue-600 cursor-pointer">
        {titulo}
      </h1>
      <div className="inline-flex items-center gap-4">
        <span className="bg-gray-100 text-gray-500 px-2 py-1 w-20 rounded text-sm">
          {palabra}
        </span>
        <span className="text-gray-500 text-sm">{referencias}</span>
        <ModalRef />
      </div>
      <p className="mt-4 text-gray-700">{parrafo}</p>
      <div className="inline-flex items-center gap-2 mt-2">
        <span className="bg-green-50 text-emerald-700 px-2 py-1 w-12 rounded text-sm">
          {palabras}
        </span>
        <span className="bg-gray-100 text-gray-500 px-2 py-1 w-17 rounded text-sm">
          {unoMas}
        </span>
      </div>
    </div>
  );
}
