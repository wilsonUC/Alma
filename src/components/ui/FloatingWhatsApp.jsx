import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingWhatsApp({ onOpenModal }) {
  const [showTooltip, setShowTooltip] = useState(true)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative mb-2.5 max-w-[220px] rounded-2xl bg-[#121622] p-3 text-xs text-slate-200 border border-emerald-500/30 shadow-xl shadow-black/50 animate-fade-in flex items-start justify-between gap-2">
          <div>
            <span className="font-bold text-[#dfba73] block mb-0.5">Alma Sagrada</span>
            <p className="text-[11px] leading-tight text-slate-300">
              ¿Dudas sobre tu sesión o curso? Escríbenos con confianza.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Cerrar tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => onOpenModal('Consulta General WhatsApp')}
        className="group relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/60 transition-all duration-300 hover:scale-108 cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500/25 animate-ping opacity-75"></span>
        <MessageCircle className="w-7 h-7 fill-white stroke-none transition-transform group-hover:scale-110" />
      </button>
    </div>
  )
}
