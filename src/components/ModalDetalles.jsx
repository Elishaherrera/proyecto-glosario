import { useState } from "react";
import TarjetaDecision from "./TarjetaDecision";

export default function ModalDetalles() {
  const [isopen, setIsopen] = useState(false);
  const palabras = ["amar", "amado", "amando", "amarás", "amemos"];
  const decisiones = [
    {
      versiculo: "juan 3:16",
      palabra: "amó",
      referenciaBiblica: "Porque de tal manera amó Dios al mundo",
      decision: "Ágape - amor sacrificial divino",
    },
    {
      versiculo: "1 Corintios 13:4",
      palabra: "amor",
      referenciaBiblica: "El amor es sufrido, es benigno",
      decision: "Se mantiene la traducción tradicional por familiaridad",
    },
  ];
  return (
    <>
      <button
        className="text-blue-700 font-medium hover:text-blue-800 cursor-pointer text-sm"
        onClick={() => setIsopen(true)}
      >
        Ver detalles →
      </button>
      {isopen && (
        <div className="fixed z-200  inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-2 rounded-xl flex flex-col gap-5 h-[85vh] w-[120vh] overflow-auto">
            <div className="p-3 space-y-2">
              <div className="flex justify-between items-start">
                <div className="inline-flex">
                  <h3 className="font-bold text-2xl">amor</h3>
                </div>
                <div className="space-x-4">
                  <button className="text-blue-600 hover:bg-blue-50 cursor-pointer rounded-lg p-2 text-sm">
                    + Agregar referencia
                  </button>
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500 cursor-pointer"
                    id="donateCloseBtn"
                  >
                    <span className="sr-only">Cerrar</span>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">
                  sustantivo • Última modificación: 17-09-2025
                </span>
              </div>
              <div className="border-b border-gray-200"></div>
              <h4 className="text-gray-800 font-medium mt-4">Definición</h4>
              <p className="text-gray-700">
                Sentimiento intenso del ser humano que busca el bien de otra
                persona
              </p>
              <h4 className="text-gray-800 font-medium mb-4">
                Palabras relacionadas
              </h4>
              <div className="flex items-center gap-2">
                {palabras.map((p, i) => {
                  return (
                    <span className="bg-emerald-100 text-emerald-800 text-sm rounded-2xl py-1 px-3 font-medium">
                      {p}
                    </span>
                  );
                })}
              </div>
              <h4 className="text-gray-800 font-medium mt-4">
                Referencias Bíblicas y Decisiones (2)
              </h4>
              {decisiones.map((d, i) => {
                return (
                  <TarjetaDecision
                    versiculo={d.versiculo}
                    palabra={d.palabra}
                    referenciaBiblica={d.referenciaBiblica}
                    decision={d.decision}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
