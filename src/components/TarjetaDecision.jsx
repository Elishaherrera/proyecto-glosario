export default function TarjetaDecision({
  versiculo,
  palabra,
  referenciaBiblica,
  decision,
}) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-2">
      <div className="inline-flex justify-between w-full">
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
          <span className="font-medium">{versiculo}</span>
        </div>
        <span className="bg-orange-100 text-orange-800 font-medium rounded-full text-center py-1 px-2">
          {palabra}
        </span>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-700 italic">{referenciaBiblica}</p>
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
          <span className="text-gray-600 text-sm">{decision}</span>
        </div>
      </div>
    </div>
  );
}
