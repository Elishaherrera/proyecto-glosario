import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <>
      <div className=" bg-gray-50">
        <div className="bg-white shadow-sm border-b border-gray-200 p-2 px-12 flex">
          <div className="flex-grow">
            <div className="inline-flex items-center gap-4">
              <div>
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
                  class="lucide lucide-book w-8 h-8 text-blue-600"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold">Glosario de Traducción</h1>
                <p className="text-gray-500 text-sm">
                  Registro de decisiones para traductores
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center">
            <button className="bg-blue-600 px-4 py-2 gap-2 inline-flex rounded-lg text-white hover:bg-blue-700 transition-colors cursor-pointer">
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
                class="lucide lucide-plus w-4 h-4 text-center items-center justify-center mt-0.5"
              >
                ><path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Nueva entrada
            </button>
          </div>
        </div>
        <div className="bg-white shadow-sm border border-gray-200 p-6 flex m-12 rounded-xl">
          <div className="flex-1 relative">
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
              class="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Buscar por palabra, palabras relacionadas, referencia o traducción..."
              className="w-240 pl-10 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
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
              class="lucide lucide-filter w-5 h-5 text-gray-400"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </div>
          <select className="ml-4 px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Todos los tipos</option>
            <option>Verbos</option>
            <option>Sustantivos</option>
            <option>Adjetivos</option>
            <option>Adverbios</option>
          </select>
        </div>
        <div className="bg-white flex-col shadow-sm border border-gray-200 py-6 px-8 flex m-12 rounded-xl space-y-2">
          <h1 className="font-bold text-xl hover:text-blue-600 cursor-pointer">
            amor
          </h1>
          <div className="inline-flex items-center gap-4">
            <span className="bg-gray-100 text-gray-500 px-2 py-1 w-20 rounded text-sm">
              sustantivo
            </span>
            <span className="text-gray-500 text-sm"># 2 referencias</span>
          </div>
          <p className="mt-4 text-gray-700">
            Sentimiento intenso del ser humano que busca el bien de otra persona
          </p>
          <div className="inline-flex items-center gap-2 mt-2">
            <span className="bg-green-50 text-emerald-700 px-2 py-1 w-12 rounded text-sm">
              amar
            </span>
            <span className="bg-green-50 text-emerald-700 px-2 py-1 w-14 rounded text-sm">
              amado
            </span>
            <span className="bg-green-50 text-emerald-700 px-2 py-1 w-16 rounded text-sm">
              amando
            </span>
            <span className="bg-green-50 text-emerald-700 px-2 py-1 w-14 rounded text-sm">
              amarás
            </span>
            <span className="bg-gray-100 text-gray-500 px-2 py-1 w-17 rounded text-sm">
              + 1 más
            </span>
          </div>
          <div className="border border-gray-200 m-2"></div>
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
              class="lucide lucide-book w-3 h-3 text-gray-600"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
            <div className="flex-grow">
              <div className="inline-flex items-center gap-4">
                <span className="text-gray-600 text-sm">Juan 3:16</span>
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
                    class="lucide lucide-book w-3 h-3 text-gray-600"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                  <span className="text-gray-600 text-sm">
                    1 corintios 13:4
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center justify-center">
                <span className="text-blue-700 font-medium hover:text-blue-800 cursor-pointer text-sm">
                  Ver detalles →
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm border border-gray-200 p-4 m-12 rounded-lg">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
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
                class="lucide lucide-file-text w-5 h-5 text-blue-600"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              <span className="text-gray-600 font-medium text-sm">
                Total de palabras
              </span>
            </div>
            <span className="font-bold text-2xl">2</span>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <div className="font-bold text-xl p-2">Nueva entrada</div>
          <div className="border-b border-gray-400 p-2 m-2"></div>
          <div className="inline-flex gap-8">
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">Palabra *</span>
              <input
                type="text"
                className="w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">Tipo de palabra</span>
              <select className="w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4">
                <option>Seleccionar...</option>
                <option>Sustantivo</option>
                <option>Verbo</option>
                <option>Adjetivo</option>
                <option>Adverbio</option>
                <option>Preposición</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-medium">
              Palabras relacionadas (separadas por comas)
            </span>
            <input
              type="text"
              placeholder="amar, amado, amando, amarás..."
              className="w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <span className="text-gray-800 font-medium">Definición</span>
            <textarea className="w-80 h-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"></textarea>
            <div className="border-b border-gray-400 p-2 m-2"></div>
            <h4 className="font-medium">Primera Referencia Bíblica</h4>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex flex-col">
                <span className="text-gray-800 font-medium">Libro *</span>
                <input
                  type="text"
                  placeholder="Mateo"
                  className="w-60 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-medium">Cap. *</span>
                <input
                  type="number"
                  className="w-60 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-800 font-medium">Vers. *</span>
                <input
                  type="number"
                  className="w-60 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                />
              </div>
            </div>
            <span className="text-gray-800 font-medium">Contexto</span>
            <textarea
              placeholder="Texto del versículo donde aparece la palabra..."
              className="w-80 h-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            ></textarea>
            <div className="border-b border-gray-400 p-2 m-2"></div>
            <span className="font-bold">Decisión de Traducción</span>
            <div className="inline-flex gap-4">
              <input type="radio" className="mt-2" /> Usar decisión anterior
              <input type="radio" className="mt-2" /> Nueva decisión
            </div>
            <span className="mt-4 text-gray-800 font-medium">
              Nueva Traducción *
            </span>
            <input
              type="text"
              placeholder="Cómo se tradujo esta palabra en este contexto"
              className="w-92 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
            <span className="text-gray-800 font-medium mt-4">
              Notas sobre la Decisión
            </span>
            <textarea
              placeholder="Razones para esta desición de traducción..."
              className="w-80 h-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            ></textarea>
          </div>
          <div className="border-b border-gray-400 p-2 m-2"></div>
          <div className="space-x-2">
            <button className="bg-gray-100 border-1 border-gray-400 px-4 py-2 gap-2 inline-flex rounded-lg text-gray-700 mt-4 hover:bg-gray-200 transition-colors cursor-pointer ml-4">
              Cancelar
            </button>
            <button className="bg-blue-600 px-4 py-2 gap-2 inline-flex rounded-lg text-white mt-4 hover:bg-blue-700 transition-colors cursor-pointer">
              Guardar entrada
            </button>
          </div>
        </div>

        <div className="p-4 m-12">
          <h3 className="font-bold text-xl">Agregar Referencia a "amor"</h3>
          <div className="border-b border-gray-400 p-2 m-2"></div>
          <div className="inline-flex gap-8">
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">Palabra *</span>
              <input
                type="text"
                className="w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">Tipo de palabra</span>
              <select className=" w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4">
                <option>Seleccionar...</option>
                <option>Sustantivo</option>
                <option>Verbo</option>
                <option>Adjetivo</option>
                <option>Adverbio</option>
                <option>Preposición</option>
              </select>
            </div>
          </div>
          <div className="border-b border-gray-400 p-2 m-2"></div>
          <h4 className="font-medium">Nueva referencia bíblica</h4>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">Libro *</span>
              <input
                type="text"
                placeholder="Mateo"
                className="w-60 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">Cap. *</span>
              <input
                type="number"
                className="w-60 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium">Vers. *</span>
              <input
                type="number"
                className="w-60 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-medium">Contexto</span>
            <textarea
              placeholder="Texto del versículo donde aparece la palabra..."
              className="w-80 h-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            ></textarea>
            <div className="border-b border-gray-400 p-2 m-2"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Decisión de Traducción</span>
          </div>
          <div className="inline-flex gap-4">
            <input type="radio" className="mt-2" /> Usar decisión anterior
            <input type="radio" className="mt-2" /> Nueva decisión
          </div>
          <div className="flex flex-col">
            <span className="mt-8 text-gray-800 font-medium">
              Nueva Traducción *
            </span>
            <input
              type="text"
              placeholder="Cómo se tradujo esta palabra en este contexto"
              className="w-92 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 font-medium">
              Notas sobre la decisión
            </span>
            <textarea
              placeholder="Razones para esta desición de traducción..."
              className="w-80 h-24 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            ></textarea>
          </div>
        </div>
        <div className="border-b border-gray-400 p-2 m-2"></div>
        <div className="space-x-2">
          <button className="bg-gray-100 border-1 border-gray-400 px-4 py-2 gap-2 inline-flex rounded-lg text-gray-700 mt-4 hover:bg-gray-200 transition-colors cursor-pointer ml-4">
            Cancelar
          </button>
          <button className="bg-blue-600 px-4 py-2 gap-2 inline-flex rounded-lg text-white mt-4 hover:bg-blue-700 transition-colors cursor-pointer">
            Agregar referencia
          </button>
        </div>

        <div className="p-4 m-12">
          <h3 className="font-bold text-2xl">amor</h3>
          <span className="text-gray-500">
            sustantivo • Última modificación: 2024-01-18
          </span>
          <button className="text-blue-600">+ Agregar referencia</button>
          <div className="border-b border-gray-400 p-2 m-2"></div>
          <h4 className="text-gray-800 font-medium">Definición</h4>
          <p className="text-gray-700">
            Sentimiento intenso del ser humano que busca el bien de otra persona
          </p>
          <h4 className="text-gray-800 font-medium">Palabras relacionadas</h4>
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
    </>
  );
}
export default App;
