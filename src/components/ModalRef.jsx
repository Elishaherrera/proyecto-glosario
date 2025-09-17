import { useState } from "react";

export default function ModalRef() {
  const [isopen, setIsopen] = useState(false);
  return (
    <>
      <button
        className="bg-blue-50 hover:bg-blue-100 py-1 px-4 rounded-md text-blue-700 text-sm cursor-pointer"
        onClick={() => setIsopen(true)}
      >
        + Ref
      </button>
      {isopen && (
        <div className="fixed z-200  inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col gap-5 h-[90vh] overflow-auto">
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-xl">Agregar Referencia a "amor"</h3>
              <div className="border-b border-gray-300"></div>
              <div className="inline-flex gap-8">
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">Palabra *</span>
                  <input
                    type="text"
                    placeholder="amor"
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">
                    Tipo de palabra
                  </span>
                  <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4">
                    <option>Seleccionar...</option>
                    <option>Sustantivo</option>
                    <option>Verbo</option>
                    <option>Adjetivo</option>
                    <option>Adverbio</option>
                    <option>Preposición</option>
                  </select>
                </div>
              </div>
              <div className="border-b border-gray-300"></div>
              <h4 className="font-medium">Nueva referencia bíblica</h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">Libro *</span>
                  <input
                    type="text"
                    placeholder="Mateo"
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">Cap. *</span>
                  <input
                    type="number"
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium">Vers. *</span>
                  <input
                    type="number"
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-medium">Contexto</span>
                <textarea
                  placeholder="Texto del versículo donde aparece la palabra..."
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                ></textarea>
                <div className="border-b border-gray-300 mb-2"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Decisión de Traducción</span>
              </div>
              <div className="inline-flex gap-4">
                <input
                  type="radio"
                  name="desiciontraduccion"
                  className="mt-2"
                />{" "}
                Usar decisión anterior
                <input
                  type="radio"
                  name="desiciontraduccion"
                  className="mt-2"
                />{" "}
                Nueva decisión
              </div>
              <div className="flex flex-col">
                <span className="mt-2 text-gray-800 font-medium">
                  Nueva Traducción *
                </span>
                <input
                  type="text"
                  placeholder="Cómo se tradujo esta palabra en este contexto"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-medium">
                  Notas sobre la decisión
                </span>
                <textarea
                  placeholder="Razones para esta desición de traducción..."
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                ></textarea>
              </div>
              <div className="border-b border-gray-300"></div>
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-100 border-1 border-gray-400 px-4 py-2 gap-2 inline-flex rounded-lg text-gray-700 mt-4 hover:bg-gray-200 transition-colors cursor-pointer ml-4"
                  onClick={() => setIsopen(false)}
                >
                  Cancelar
                </button>
                <button className="bg-blue-600 px-4 py-2 gap-2 inline-flex rounded-lg text-white mt-4 hover:bg-blue-700 transition-colors cursor-pointer">
                  Agregar referencia
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
