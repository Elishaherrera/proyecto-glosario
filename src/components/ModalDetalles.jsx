import { useState } from "react";

export default function ModalDetalles() {
  const [isopen, setIsopen] = useState(false);
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
          <div className="bg-white p-5 rounded flex flex-col gap-5 h-[90vh] overflow-auto">
            <div className="p-4 space-y-2">
              <div className="inline-flex">
                <h3 className="font-bold text-2xl">amor</h3>
                <button
                  type="button"
                  className="rounded-md text-gray-400 hover:text-gray-500 cursor-pointer"
                  id="donateCloseBtn"
                >
                  <span className="sr-only">Cerrar</span>
                  <svg
                    className="h-6 w-6"
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

              <span className="text-gray-500">
                sustantivo • Última modificación: 2024-01-18
              </span>
              <button className="text-blue-600">+ Agregar referencia</button>
              <div className="border-b border-gray-400 p-2 m-2"></div>
              <h4 className="text-gray-800 font-medium">Definición</h4>
              <p className="text-gray-700">
                Sentimiento intenso del ser humano que busca el bien de otra
                persona
              </p>
              <h4 className="text-gray-800 font-medium">
                Palabras relacionadas
              </h4>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-800 rounded-2xl py-1 px-3 font-medium">
                  amar
                </span>
                <span className="bg-emerald-100 text-emerald-800 rounded-2xl py-1 px-3 font-medium">
                  amado
                </span>
                <span className="bg-emerald-100 text-emerald-800 rounded-2xl py-1 px-3 font-medium">
                  amando
                </span>
                <span className="bg-emerald-100 text-emerald-800 rounded-2xl py-1 px-3 font-medium">
                  amarás
                </span>
                <span className="bg-emerald-100 text-emerald-800 rounded-2xl py-1 px-3 font-medium">
                  amemos
                </span>
              </div>
              <h4 className="text-gray-800 font-medium">
                Referencias Bíblicas y Decisiones (2)
              </h4>
              <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 m-8 space-y-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-book w-4 h-4 text-blue-700"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                  <span className="font-medium">Juan 3:16</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-700 italic">
                    "Porque de tal manera amó Dios al mundo"
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-message-square w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span className="text-gray-700 text-sm">
                      Ágape - amor sacrificial divino
                    </span>
                  </div>
                  <span className="bg-orange-100 text-orange-800 font-medium rounded-full w-12 text-center py-1 px-2">
                    amó
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
