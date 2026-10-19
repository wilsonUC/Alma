import { useState } from 'react'
import { Sparkles, Compass } from 'lucide-react'

const geometryStories = [
  {
    id: 'arboles',
    title: 'La Timidez de las Coronas & Fractales',
    tag: 'Arboterapia & Respeto Áurico',
    viralStat: '67.7K personas conectadas',
    summary:
      'En los bosques, las copas de los árboles evitan rozarse, dejando finas líneas de luz entre sus ramas. Reconocen el campo bioenergético y toroidal del árbol vecino, recordándonos que en la naturaleza el crecimiento es coexistencia, nunca competencia.',
    analogy:
      'Tu sistema nervioso central es un árbol invertido: el cerebro y la médula se ramifican de forma idéntica a las raíces y copa de los robles. Conectas cielo y tierra.',
    symbol: 'Patrón Fractal / Árbol de la Vida',
  },
  {
    id: 'ballenas',
    title: 'Red de Burbujas & Espiral de Fibonacci',
    tag: 'Geometría en el Océano',
    viralStat: '37.3K personas asombradas',
    summary:
      'Al alimentarse en equipo, las ballenas jorobadas liberan burbujas mientras nadan en círculos ascendentes. El dibujo que trazan en el mar es una espiral logarítmica perfecta basada en la proporción áurea (1.618), el mismo código con el que se forman las galaxias.',
    analogy:
      'El universo no improvisa: teje geometría sagrada tanto en las estrellas como bajo las profundidades marinas.',
    symbol: 'Espiral Áurea / Proporción 1.618',
  },
  {
    id: 'venus',
    title: 'La Danza Cósmica de la Tierra y Venus',
    tag: 'Pentagrama de los Cielos',
    viralStat: 'La Flor de Venus',
    summary:
      'Cada 8 años terrestres, Venus completa 13 órbitas alrededor del Sol. Al trazar sus posiciones relativas vistas desde el centro del sistema solar, dibujan un pentagrama de 5 pétalos matemáticamente perfecto: La Flor de Venus.',
    analogy:
      'Venus representa amor, armonía, belleza y proporción. El cielo es un mandala en movimiento perpetuo que resuena en nuestro propio ritmo biológico.',
    symbol: 'Pentagrama Sagrado / Ciclo 5 y 8',
  },
  {
    id: 'agua',
    title: 'Cimática: Cuando el Sonido se Hace Forma',
    tag: 'El Canto de la Rana & Mandalas',
    viralStat: 'La Memoria del Agua',
    summary:
      'Al vibrar agua dentro de diferentes frecuencias sonoras, las moléculas se organizan en formas geométricas estables. Cuando una rana canta sobre el agua, las ondas esculpen mandalas en la superficie.',
    analogy:
      'Dado que nuestro cuerpo es más del 70% agua, imagina el impacto biológico y celular que tienen las palabras, la música y los pensamientos que emites a diario.',
    symbol: 'Cimática / Ondas de Forma',
  },
]

export default function SacredGeometrySection() {
  const [activeStory, setActiveStory] = useState(geometryStories[0])

  return (
    <section id="geometria" className="relative py-28 bg-[#080312] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/35 bg-purple-950/40 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>El Lenguaje Invisible de la Creación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Geometría Sagrada en la <span className="text-gold-gradient">Naturaleza Viva</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-purple-200/80 leading-relaxed">
            Comprender la geometría sagrada es pasar de ver el mundo como algo caótico a contemplarlo como una obra de arte perfectamente diseñada. Tú eres parte integral de ese diseño.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Navigation Cards */}
          <div className="lg:col-span-5 space-y-3">
            {geometryStories.map((story) => {
              const isSelected = activeStory.id === story.id

              return (
                <button
                  key={story.id}
                  onClick={() => setActiveStory(story)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#dfba73] bg-[#1a0a30] shadow-xl shadow-purple-950/80 -translate-x-1 sm:translate-x-1'
                      : 'border-purple-900/30 bg-[#120522]/80 hover:border-purple-700/60 hover:bg-[#1a0930]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#dfba73]">
                      {story.tag}
                    </span>
                    <span className="text-[10px] text-purple-300/70 font-medium">
                      {story.viralStat}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    {story.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {story.summary}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Interactive Feature Preview Card */}
          <div className="lg:col-span-7 glass-sacred rounded-3xl p-8 sm:p-12 border border-[#dfba73]/35 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Ambient Background geometry */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-purple-500/20 pointer-events-none animate-spin-reverse-slow">
              <div className="absolute inset-4 rounded-full border border-[#dfba73]/15"></div>
              <div className="absolute inset-10 rounded-full border border-dashed border-purple-400/20"></div>
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full border border-[#dfba73]/40 bg-[#dfba73]/15 text-[#dfba73] text-[11px] font-semibold mb-4">
                {activeStory.symbol}
              </div>

              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                {activeStory.title}
              </h3>

              <p className="text-sm text-slate-200 leading-relaxed mb-8">
                {activeStory.summary}
              </p>

              {/* Reflection Box */}
              <div className="p-5 rounded-2xl bg-[#0e041d] border border-[#dfba73]/30 shadow-inner">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#dfba73] block mb-2">
                  La lección para tu cuerpo y tu energía:
                </span>
                <p className="font-serif italic text-base text-purple-100 leading-relaxed">
                  "{activeStory.analogy}"
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-900/40 flex items-center justify-between text-xs text-purple-300/80">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
                <span>Nada en el cosmos es casualidad</span>
              </span>
              <span className="text-purple-300/60">
                Todo responde a un orden armónico
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
