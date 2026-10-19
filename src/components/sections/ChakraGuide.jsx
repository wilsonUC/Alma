import { useState } from 'react'
import { Sparkles, Shield, Heart, Eye, Crown, Zap, Flame, Compass } from 'lucide-react'

const chakrasData = [
  {
    id: 'corona',
    number: 7,
    name: 'Sahasrara (Corona)',
    element: 'Pensamiento Puro / Luz Cósmica',
    location: 'Corona de la cabeza',
    mantra: 'OM / Silencio',
    color: '#a855f7',
    icon: Crown,
    frequency: '963 Hz',
    crystal: 'Cuarzo Transparente / Selenita',
    signsBlocked: [
      'Sensación de desconexión espiritual o soledad existencial',
      'Materialismo extremo o rigidez mental',
      'Confusión sobre el propósito y la misión de vida',
    ],
    harmonized: [
      'Paz profunda y sensación de unidad cósmica (YO SOY)',
      'Claridad espiritual y entendimiento sincrónico',
    ],
  },
  {
    id: 'tercerojo',
    number: 6,
    name: 'Ajna (Tercer Ojo)',
    element: 'Luz / Consciencia',
    location: 'Entre las cejas',
    mantra: 'AUM',
    color: '#818cf8',
    icon: Eye,
    frequency: '852 Hz',
    crystal: 'Amatista / Lapislázuli',
    signsBlocked: [
      'Falta de intuición o desconfianza en tus corazonadas',
      'Dolores de cabeza recurrentes o sobreanálisis obsesivo',
      'Dificultad para visualizar proyectos y manifestar',
    ],
    harmonized: [
      'Intuición nítida, clarividencia y percepción sutil',
      'Sabiduría para ver más allá de las apariencias físicas',
    ],
  },
  {
    id: 'garganta',
    number: 5,
    name: 'Vishuddha (Garganta)',
    element: 'Éter / Sonido',
    location: 'Garganta y cuello',
    mantra: 'HAM',
    color: '#06b6d4',
    icon: Zap,
    frequency: '741 Hz',
    crystal: 'Turquesa / Aguamarina',
    signsBlocked: [
      'Callar lo que sientes por miedo al rechazo o al conflicto',
      'Mentir, exagerar o timidez extrema al comunicarte',
      'Afecciones constantes en garganta o tiroides',
    ],
    harmonized: [
      'Expresión auténtica, asertiva y honesta de tu verdad',
      'Capacidad de escuchar con empatía y crear con tu voz',
    ],
  },
  {
    id: 'corazon',
    number: 4,
    name: 'Anahata (Corazón)',
    element: 'Aire',
    location: 'Centro del pecho',
    mantra: 'YAM',
    color: '#10b981',
    icon: Heart,
    frequency: '639 Hz',
    crystal: 'Cuarzo Rosa / Jade Verde',
    signsBlocked: [
      'Rencor, incapacidad de perdonar o dolor por traición',
      'Cerrarse al amor por miedo a ser lastimado nuevamente',
      'Dependencia emocional o aislamiento afectivo',
    ],
    harmonized: [
      'Amor incondicional hacia ti misma y hacia los demás',
      'Puente de integración entre tus chakras terrenales y espirituales',
    ],
  },
  {
    id: 'plexo',
    number: 3,
    name: 'Manipura (Plexo Solar)',
    element: 'Fuego',
    location: 'Dos dedos sobre el ombligo',
    mantra: 'RAM',
    color: '#dfba73',
    icon: Flame,
    frequency: '528 Hz',
    crystal: 'Citrino / Ojo de Tigre / Pirita',
    signsBlocked: [
      'Baja autoestima, inseguridad y necesidad de validación ajena',
      'Falta de fuerza de voluntad o posponer tus metas',
      'Problemas digestivos o sensación de descontrol',
    ],
    harmonized: [
      'Poder personal, seguridad, fuego creador y liderazgo consciente',
      'Claridad para tomar decisiones y poner límites firmes',
    ],
  },
  {
    id: 'sacro',
    number: 2,
    name: 'Svadhisthana (Sacro)',
    element: 'Agua',
    location: 'Bajo vientre / Órganos reproductores',
    mantra: 'VAM',
    color: '#f97316',
    icon: Sparkles,
    frequency: '417 Hz',
    crystal: 'Cornalina / Piedra Luna',
    signsBlocked: [
      'Bloqueo creativo y falta de disfrute del placer cotidiano',
      'Sentimiento de culpa, vergüenza o represión de emociones',
      'Dificultad para recibir abundancia o conectar con la fertilidad vital',
    ],
    harmonized: [
      'Fluidez emocional, pasión vital y creatividad desbordante',
      'Conexión sana con el disfrute y el merecimiento',
    ],
  },
  {
    id: 'raiz',
    number: 1,
    name: 'Muladhara (Raíz)',
    element: 'Tierra',
    location: 'Base de la columna',
    mantra: 'LAM',
    color: '#ef4444',
    icon: Shield,
    frequency: '396 Hz',
    crystal: 'Turmalina Negra / Jaspe Rojo',
    signsBlocked: [
      'Miedo crónico al futuro o sensación de carencia económica',
      'Falta de arraigo, sentirse disperso o desprotegido',
      'Agotamiento físico y sensación de no pertenecer a este plano',
    ],
    harmonized: [
      'Sensación de total seguridad y confianza en la providencia de la vida',
      'Enraizamiento firme con la Madre Tierra y salud física robusta',
    ],
  },
]

export default function ChakraGuide({ onOpenBooking }) {
  const [activeChakra, setActiveChakra] = useState(chakrasData[3]) // Default Anahata (Heart)

  return (
    <section id="chakras" className="relative py-28 bg-[#0b0417] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/35 bg-purple-950/40 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Mapa Energético del Ser</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Descubre los <span className="text-gold-gradient">7 Vórtices de tu Energía</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-purple-200/80 leading-relaxed">
            Cada síntoma físico o emocional es una señal que tu cuerpo emite para comunicarte un bloqueo. Explora cada centro energético y aprende a armonizarlo.
          </p>
        </div>

        {/* Chakra Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {chakrasData.map((chakra) => {
            const isSelected = activeChakra.id === chakra.id

            return (
              <button
                key={chakra.id}
                onClick={() => setActiveChakra(chakra)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border text-white shadow-xl scale-105'
                    : 'border-purple-900/30 bg-[#150a2b]/60 text-purple-200/70 hover:text-white hover:bg-[#200d3d]'
                }`}
                style={{
                  borderColor: isSelected ? chakra.color : undefined,
                  backgroundColor: isSelected ? `${chakra.color}25` : undefined,
                  boxShadow: isSelected ? `0 0 25px ${chakra.color}40` : undefined,
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: chakra.color }}
                ></span>
                <span>{chakra.number}. {chakra.name.split(' ')[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Chakra Detail Card */}
        <div className="max-w-4xl mx-auto glass-sacred rounded-3xl p-6 sm:p-10 border border-[#dfba73]/30 relative overflow-hidden transition-all duration-300 shadow-2xl">
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none transition-colors duration-500"
            style={{ backgroundColor: activeChakra.color }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Chakra Core Info */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: activeChakra.color }}
                >
                  <activeChakra.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300">
                    Chakra #{activeChakra.number}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {activeChakra.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-200 pt-2">
                <div className="flex justify-between py-1.5 border-b border-purple-900/40">
                  <span className="text-purple-300/80">Ubicación:</span>
                  <span className="font-semibold text-white">{activeChakra.location}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-900/40">
                  <span className="text-purple-300/80">Elemento:</span>
                  <span className="font-semibold text-white">{activeChakra.element}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-900/40">
                  <span className="text-purple-300/80">Bija Mantra:</span>
                  <span className="font-bold text-[#dfba73] tracking-widest">{activeChakra.mantra}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-900/40">
                  <span className="text-purple-300/80">Frecuencia:</span>
                  <span className="font-semibold text-white">{activeChakra.frequency}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-purple-900/40">
                  <span className="text-purple-300/80">Cristal Aliado:</span>
                  <span className="font-semibold text-white">{activeChakra.crystal}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenBooking(`Alineación de Chakra: ${activeChakra.name}`)}
                className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#e5c384] to-[#b8860b] text-[#080312] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#dfba73]/20 hover:scale-102 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-[#080312]" />
                <span>Armonizar con Reiki</span>
              </button>
            </div>

            {/* Diagnostic & Balance */}
            <div className="md:col-span-7 space-y-6">
              {/* Signs blocked */}
              <div className="bg-[#120624]/90 p-5 rounded-2xl border border-rose-950/70 shadow-inner">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-3 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span>Señales de que este Chakra está bloqueado:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeChakra.signsBlocked.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-rose-400 text-sm leading-none">•</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In harmony */}
              <div className="bg-[#120624]/90 p-5 rounded-2xl border border-emerald-950/70 shadow-inner">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-3 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Cuando está en equilibrio experimentas:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeChakra.harmonized.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 text-sm leading-none">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
