import { useState, useEffect } from 'react'
import { X, Sparkles, MessageCircle } from 'lucide-react'

export default function BookingModal({ isOpen, onClose, initialService = 'Reiki Usui a Distancia' }) {
  const [name, setName] = useState('')
  const [service, setService] = useState(initialService)
  const [location, setLocation] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    if (initialService) {
      setService(initialService)
    }
  }, [initialService])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    const phone = '51980570301' // Número de WhatsApp de contacto
    const message = `¡Hola! Vengo desde la página web de Alma Sagrada ✨
Mi nombre es: ${name.trim() || 'Consultante'}
Estoy interesada/o en: ${service}
Ciudad/País: ${location.trim() || 'No especificado'}
${notes.trim() ? `Motivo / Consulta: ${notes.trim()}` : ''}`

    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${phone}?text=${encoded}`
    window.open(url, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl glass-sacred p-6 sm:p-8 border border-[#dfba73]/40 shadow-2xl shadow-purple-950/80">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-purple-300 hover:text-white hover:bg-purple-950/80 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Small Logo */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-11 h-11 rounded-full border border-[#dfba73]/60 p-0.5 bg-gradient-to-tr from-purple-600 to-[#dfba73] overflow-hidden shadow-md">
            <img
              src="/logo.jpg"
              alt="Alma Sagrada"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#dfba73]">
              <Sparkles className="w-3 h-3 text-[#dfba73]" />
              <span>Agenda Personalizada</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white leading-tight">
              Comienza tu <span className="text-gold-gradient">Sanación</span>
            </h3>
          </div>
        </div>

        <p className="text-xs text-purple-200/80 mb-6">
          Completa tus datos para abrir WhatsApp con tu consulta lista para atenderte con amor.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-purple-200 mb-1.5">
              Tu Nombre:
            </label>
            <input
              type="text"
              required
              placeholder="Ej: María Elena"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0e041d] border border-purple-900/60 text-white text-xs placeholder:text-purple-400/40 focus:outline-none focus:border-[#dfba73] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-200 mb-1.5">
              Terapia o Formación de interés:
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0e041d] border border-purple-900/60 text-white text-xs focus:outline-none focus:border-[#dfba73] transition-colors"
            >
              <option value="Reiki Usui a Distancia (1h)">Reiki Usui a Distancia (1h)</option>
              <option value="Sanación del Linaje & Árbol Familiar">Sanación del Linaje & Árbol Familiar</option>
              <option value="Limpieza Energética & Corte Kármico">Limpieza Energética & Corte Kármico</option>
              <option value="Alineación de Chakras & Lectura de Aura">Alineación de Chakras & Lectura de Aura</option>
              <option value="Curso Reiki Nivel 1: El Despertar del Sanador">Curso Reiki Nivel 1: El Despertar del Sanador</option>
              <option value="Curso Reiki Nivel 2: Sanación a Distancia">Curso Reiki Nivel 2: Sanación a Distancia</option>
              <option value="Curso Reiki Nivel 3 & Maestría: Llama Trina">Curso Reiki Nivel 3 & Maestría: Llama Trina</option>
              <option value="Orientación / Consulta General">Orientación / Consulta General</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-200 mb-1.5">
              Tu Ciudad o País:
            </label>
            <input
              type="text"
              placeholder="Ej: Lima, Perú / Santiago, Chile / México"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0e041d] border border-purple-900/60 text-white text-xs placeholder:text-purple-400/40 focus:outline-none focus:border-[#dfba73] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-purple-200 mb-1.5">
              ¿Qué te gustaría armonizar o consultar? (Opcional):
            </label>
            <textarea
              rows={2}
              placeholder="Ej: Siento mucho cansancio, estrés, o quisiera sanar un patrón familiar..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0e041d] border border-purple-900/60 text-white text-xs placeholder:text-purple-400/40 focus:outline-none focus:border-[#dfba73] transition-colors resize-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/70 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none" />
              <span>Continuar por WhatsApp</span>
            </button>
            <p className="mt-2 text-center text-[11px] text-purple-300/60">
              Respuesta en menos de 24 horas • Atención 100% personalizada y confidencial
            </p>
          </div>
        </form>

      </div>
    </div>
  )
}
