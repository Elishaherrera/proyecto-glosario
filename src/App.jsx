import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-gray-50">
        <div className="bg-white shadow-sm border-b border-gray-200 py-4 flex">
          <div className="inline-flex items-center gap-4 px-4">
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
          <div className="inline-flex">
            <button className="bg-blue-600 px-4 py-2 gap-2 inline-flex rounded-lg text-white mt-4 hover:bg-blue-700 transition-colors cursor-pointer">
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
                class="lucide lucide-plus w-4 h-4"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Nueva entrada
            </button>
          </div>
        </div>
        <div className="bg-white shadow-sm border border-gray-200 py-6 px-6 flex m-12 rounded-lg">
          <input
            type="text"
            placeholder="Buscar por palabra, palabras relacionadas, referencia o traducción..."
            className="w-260 px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select className="ml-4 px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Todos los tipos</option>
            <option>Verbos</option>
            <option>Sustantivos</option>
            <option>Adjetivos</option>
            <option>Adverbios</option>
          </select>
        </div>
        <div className="bg-white flex-col shadow-sm border border-gray-200 py-6 px-8 flex m-12 rounded-lg space-y-2">
          <h1 className="font-bold text-xl hover:text-blue-600 cursor-pointer">
            amor
          </h1>
          <span className="bg-gray-100 text-gray-500 px-2 py-1 w-20 rounded text-sm">
            sustantivo
          </span>
          <span className="text-gray-500 text-sm"># 2 referencias</span>
          <p className="mt-4 text-gray-700">
            Sentimiento intenso del ser humano que busca el bien de otra persona
          </p>
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
          <div className="border-1 border-gray-200"></div>
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
            <span className="text-gray-600 text-sm">Juan 3:16</span>
          </div>
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
            <span className="text-gray-600 text-sm">1 corintios 13:4</span>
          </div>
          <span className="text-blue-700 font-medium hover:text-blue-800 cursor-pointer text-sm">
            Ver detalles →
          </span>
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
      </div>
    </>
  );
}

export default App;
