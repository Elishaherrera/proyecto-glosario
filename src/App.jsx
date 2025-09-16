import "./App.css";
import React, { useState } from "react";
import Modal from "./components/Modal";
import ModalRef from "./components/ModalRef";
import ModalDetalles from "./components/ModalDetalles";
import TarjetaPalabra from "./components/TarjetaPalabra";

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
            <Modal />
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

        <TarjetaPalabra
          titulo="amor"
          palabra="sustantivo"
          referencias="# 2 referencias"
          parrafo="Sentimiento intenso del ser humano que busca el bien de otra persona"
          palabras="amar"
          unoMas="+ 1 más"
        />
        <TarjetaPalabra
          titulo="Paz"
          palabra="sustantivo"
          referencias="# 1 referencia"
          parrafo="Estado de tranquilidad y armonía"
          palabras="pacífico"
        />

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
      </div>
    </>
  );
}
export default App;
