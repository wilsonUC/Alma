import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: '¿Cómo funciona una sesión de Reiki a distancia si estoy en otra ciudad o país?',
    answer:
      'En la física cuántica y las tradiciones herméticas ("Como es adentro, es afuera"), la energía y la consciencia no están confinadas a la distancia física tridimensional. Mediante la sintonización sagrada del practicante y los símbolos de conexión a distancia (Hon Sha Ze Sho Nen), se establece un puente energético directo con tu campo áurico en tiempo presente.',
  },
  {
    question: '¿Qué debo hacer durante la hora de mi sesión de Reiki?',
    answer:
      'Te recomendamos recostarte en un lugar tranquilo sin interrupciones, tomar un vaso de agua antes de iniciar, apagar las notificaciones de tu teléfono y simplemente cerrar los ojos con una respiración profunda. Puedes quedarte dormida si lo deseas; la energía actúa independientemente del estado de vigilia. Al finalizar la hora, te enviamos un audio detallado con lo percibido en cada chakra.',
  },
  {
    question: '¿Qué es la sanación del linaje y cómo influye en mi vida diaria?',
    answer:
      'Nuestras familias transmiten inconscientemente lealtades, deudas emocionales y pactos no resueltos. Al honrar a tus ancestros y sanar conscientemente la relación energética con mamá (quien rige el recibir, la abundancia y la salud) y papá (quien rige la dirección, el trabajo y los límites), liberas a tus futuras generaciones y desbloqueas tu propio camino.',
  },
  {
    question: '¿Necesito un "don especial" para hacer los cursos de Reiki?',
    answer:
      'No. Todos los seres humanos nacemos con canales de energía sutil. El curso de Reiki Nivel 1 te enseña a despertar, limpiar y canalizar esa energía de forma ordenada, protegida y consciente mediante la sintonización tradicional del método Usui.',
  },
  {
    question: '¿Cuáles son los medios de pago disponibles?',
    answer:
      'Si estás en Perú puedes abonar vía Yape, Plin o Transferencia Bancaria (BCP, BBVA, Interbank). Si estás en el extranjero, aceptamos pagos seguros a través de PayPal o tarjeta de débito/crédito internacional.',
  },
]

export default function FaqSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-28 bg-[#0b0417] overflow-hidden scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/35 bg-purple-950/40 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Claridad & Respuestas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Preguntas <span className="text-gold-gradient">Frecuentes</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-purple-200/80">
            Resolvemos tus dudas antes de iniciar tu proceso de sanación o formación.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#dfba73]/50 bg-[#160a2c] shadow-lg shadow-purple-950/60'
                    : 'border-purple-900/30 bg-[#0e041d] hover:border-purple-700/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'border-[#dfba73] text-[#dfba73] rotate-180 bg-[#dfba73]/15'
                        : 'border-purple-800 text-purple-300/70'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-purple-900/40 animate-fade-in">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-sacred border border-[#dfba73]/25 shadow-xl">
          <p className="text-xs sm:text-sm text-purple-200/90 mb-3">
            ¿Tienes alguna consulta específica o no encuentras tu caso aquí?
          </p>
          <button
            onClick={() => onOpenBooking('Pregunta Personalizada')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#dfba73] hover:text-[#f5d58a] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Habla con nosotros directamente por WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  )
}
