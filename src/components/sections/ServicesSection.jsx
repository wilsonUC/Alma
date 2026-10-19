import { Sparkles, Heart, Shield, CheckCircle, ArrowRight, Clock, MapPin } from 'lucide-react'

const services = [
  {
    id: 'reiki',
    title: 'Reiki Usui a Distancia',
    subtitle: 'Sesión Individual Personalizada (1 Hora)',
    badge: 'Más Solicitado',
    badgeColor: 'border-[#dfba73]/50 bg-[#dfba73]/15 text-[#dfba73]',
    icon: Sparkles,
    price: 'S/ 80',
    originalPrice: 'S/ 120',
    description:
      'Armonización energética profunda para disolver el cansancio acumulado, la ansiedad y los bloqueos sutiles en tus 7 chakras y cuerpos áuricos.',
    features: [
      'Lectura y escaneo bioenergético de chakras',
      'Canalización de energía vital universal a distancia',
      'Desbloqueo de nudos emocionales y fatiga crónica',
      'Corte de ataduras energéticas y cordones densos',
      'Devolución con notas y audio guía personalizado al terminar',
    ],
    mode: '100% Online a Distancia (Conexión en sintonía)',
    ctaText: 'Reservar Sesión de Reiki',
  },
  {
    id: 'linaje',
    title: 'Sanación del Linaje & Árbol Familiar',
    subtitle: 'Biodescodificación Transgeneracional',
    badge: 'Transformación Profunda',
    badgeColor: 'border-purple-400/50 bg-purple-900/30 text-purple-200',
    icon: Heart,
    price: 'S/ 110',
    originalPrice: 'S/ 160',
    description:
      'Rompe lealtades inconscientes repetitivas. Sana tu vínculo con la energía materna (abundancia y nutrición) y paterna (seguridad y dirección).',
    features: [
      'Estudio del árbol genealógico y lealtades invisibles',
      'Sanación de la herida con mamá (recibir, proyectos y salud)',
      'Sanación de la herida con papá (vocación, dinero y acción)',
      'Liberación del rol de la "oveja negra" del clan',
      'Inclusión y honra de los miembros no reconocidos',
    ],
    mode: 'Sesión guiada individual 1 a 1',
    ctaText: 'Sanar mi Linaje Familiar',
  },
  {
    id: 'limpieza',
    title: 'Limpieza Energética & Corte Kármico',
    subtitle: 'Protección Áurica y Cierre de Ciclos',
    badge: 'Desbloqueo Vital',
    badgeColor: 'border-cyan-400/50 bg-cyan-950/30 text-cyan-200',
    icon: Shield,
    price: 'S/ 90',
    originalPrice: 'S/ 130',
    description:
      'Limpia la pesadez energética de ambientes cargados o vampirismo energético. Aprende a crear tu escudo y cortar lazos con el pasado.',
    features: [
      'Corte de contratos álmicos obsoletos y pactos',
      'Protocolo de sahumado sagrado (salvia, romero, ruda)',
      'Receta personalizada de baños de descarga y sal marina',
      'Sellado áurico y protección contra influencias densas',
      'Activación de códigos de abundancia y apertura de caminos',
    ],
    mode: 'Sesión integral + Guía práctica en PDF',
    ctaText: 'Solicitar Limpieza Energética',
  },
]

export default function ServicesSection({ onOpenBooking }) {
  return (
    <section id="servicios" className="relative py-28 bg-[#0b0417] overflow-hidden scroll-mt-16">
      {/* Background radial purple and gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-900/15 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Terapias Holísticas Individuales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Vuelve al Equilibrio de tu <span className="text-gold-gradient">Cuerpo, Mente y Alma</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-purple-200/80 leading-relaxed">
            No tienes que seguir cargando con lo que no te pertenece. Nuestras sesiones a distancia cruzan cualquier distancia física mediante la resonancia cuántica y el amor incondicional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.id}
                className="relative rounded-3xl glass-sacred p-8 flex flex-col justify-between border border-[#dfba73]/25 transition-all duration-300 hover:border-[#dfba73]/60 hover:shadow-2xl hover:shadow-purple-950/50 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${service.badgeColor}`}
                    >
                      {service.badge}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#1b0a30] border border-[#dfba73]/30 flex items-center justify-center text-[#dfba73] group-hover:scale-110 group-hover:border-[#dfba73] transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#dfba73] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-purple-200/70 font-medium mt-1">
                    {service.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2.5 pb-6 border-b border-purple-900/40">
                    <span className="text-3xl font-extrabold text-white">
                      {service.price}
                    </span>
                    <span className="text-xs text-slate-500 line-through">
                      {service.originalPrice}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold ml-auto">
                      Cupos por agenda
                    </span>
                  </div>

                  <p className="mt-6 text-xs text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-6 space-y-2.5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-purple-900/40">
                  <div className="flex items-center gap-2 text-[11px] text-purple-300/80 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#dfba73]" />
                    <span>{service.mode}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#e5c384] to-[#b8860b] text-[#080312] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#dfba73]/20 hover:scale-102 hover:shadow-[#dfba73]/30 transition-all cursor-pointer"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        {/* Confidence banner */}
        <div className="mt-16 p-6 rounded-2xl border border-purple-500/30 bg-[#16092b]/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
              <Clock className="w-6 h-6 text-[#dfba73]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">¿Dudas sobre cuál terapia elegir para tu momento actual?</h4>
              <p className="text-xs text-purple-200/70">
                Escríbenos por WhatsApp y te orientamos con amor y empatía sobre tu caso personal.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking('Orientación Terapéutica')}
            className="px-5 py-2.5 rounded-full border border-[#dfba73]/60 bg-gradient-to-r from-purple-900/50 to-purple-950/60 text-[#dfba73] text-xs font-bold hover:border-[#dfba73] transition-all cursor-pointer shrink-0"
          >
            Orientación Gratuita
          </button>
        </div>

      </div>
    </section>
  )
}
