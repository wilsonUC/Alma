import { Star, Heart, Sparkles, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carolina Morales',
    location: 'Lima, Perú',
    service: 'Sanación del Linaje Transgeneracional',
    quote:
      'Siempre sentí el peso de ser la "oveja negra" y cargaba patrones de escasez que venían de mis ancestros. Al sanar la herida con la energía de mamá y papá, fue como desatar un nudo invisible. Mis proyectos comenzaron a fluir y recuperé mi paz interior.',
    badge: 'Desbloqueo Emocional',
    initial: 'C',
  },
  {
    name: 'Andrea Gutiérrez',
    location: 'Arequipa, Perú',
    service: 'Reiki Usui a Distancia',
    quote:
      'Tenía meses con insomnio severo y una opresión pesada en el pecho por burnout laboral. A la media hora de iniciar la sesión de Reiki a distancia sentí una corriente cálida en todo el cuerpo. Esa noche dormí 8 horas seguidas sin despertarme.',
    badge: 'Alivio del Burnout',
    initial: 'A',
  },
  {
    name: 'Luciana Valenzuela',
    location: 'Santiago, Chile',
    service: 'Alumna Formación Reiki Niveles 1 y 2',
    quote:
      'Pensé que para hacer Reiki se necesitaba un "don" exclusivo. La metodología de Alma Sagrada me demostró que todos somos canales de luz si se nos guía con respeto y consciencia. El manual y la sintonización marcaron un antes y después en mi vida.',
    badge: 'Alumna Graduada',
    initial: 'L',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-[#080312] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/35 bg-purple-950/40 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Testimonios & Transformaciones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Almas que Encontraron su <span className="text-gold-gradient">Propio Centro</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-purple-200/80 leading-relaxed">
            Cada proceso de sanación es único. Conoce las experiencias de consultantes y alumnas que confiaron en este camino.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <article
              key={idx}
              className="glass-sacred rounded-3xl p-8 border border-[#dfba73]/25 flex flex-col justify-between hover:border-[#dfba73]/60 transition-all duration-300 hover:-translate-y-1 relative shadow-xl"
            >
              <div>
                {/* Top: Stars and Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex gap-1 text-[#dfba73]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#dfba73]/30 bg-[#dfba73]/10 text-[#dfba73]">
                    {item.badge}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#dfba73]/30 mb-3" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom user info */}
              <div className="mt-8 pt-6 border-t border-purple-900/40 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#1b0a30] border border-[#dfba73]/40 flex items-center justify-center font-serif font-bold text-[#dfba73] text-sm shadow-md">
                  {item.initial}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{item.name}</h3>
                  <p className="text-[11px] text-[#dfba73]">{item.service}</p>
                  <p className="text-[10px] text-purple-300/70">{item.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
