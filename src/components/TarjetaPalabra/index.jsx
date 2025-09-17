import React from "react";
import ModalRef from "../ModalRef";
import ModalDetalles from "../ModalDetalles";

export default function TarjetaPalabra({
  titulo,
  palabra,
  referencias,
  parrafo,
  palabras,
  unoMas,
  icono,
  versiculos,
  verDetalles,
}) {
  return (
    <div className="bg-white flex-col shadow-sm border border-gray-200 py-6 px-8 flex m-12 rounded-xl space-y-2 container mx-auto">
      <div className="inline-flex justify-between items-center">
        <h1 className="font-bold text-xl hover:text-blue-600 cursor-pointer">
          {titulo}
        </h1>
        <div className="space-x-2">
          <ModalRef />
          <span className="text-gray-400 text-sm">17-09-2025</span>
        </div>
      </div>
      <div className="inline-flex items-center gap-4">
        <span className="bg-gray-100 text-gray-500 px-2 py-1 w-20 rounded text-sm">
          {palabra}
        </span>
        <span className="text-gray-500 text-sm">{referencias}</span>
      </div>
      <p className="mt-4 text-gray-700">{parrafo}</p>
      <div className="inline-flex items-center gap-2 mt-2">
        {palabras.map((p, i) => {
          return (
            <span className="bg-green-50 text-emerald-700 px-2 py-1  rounded text-sm">
              {p}
            </span>
          );
        })}

        <span className="bg-gray-100 text-gray-500 px-2 py-1 w-17 rounded text-sm">
          {unoMas}
        </span>
      </div>
      <div className="border-b border-gray-200 mb-2 mt-2"></div>
      <div className="flex  justify-between items-center">
        <div className="space-x-4">
          {versiculos.map((v, i) => {
            return (
              <div className="inline-flex space-x-2 items-center">
                {icono}
                <span className="text-gray-600 text-sm">{v}</span>
              </div>
            );
          })}
        </div>
        <div className="inline-flex justify-end items-center">
          <ModalDetalles />
        </div>
      </div>
    </div>
  );
}
