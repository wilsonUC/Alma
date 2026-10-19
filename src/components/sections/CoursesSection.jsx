import { Sparkles, Award, BookOpen, Check, ArrowRight, Users } from 'lucide-react'

const courses = [
  {
    level: 'Nivel 1',
    name: 'Shoden: El Despertar del Sanador',
    subtitle: 'Aprende a sanarte a ti misma y a tus seres queridos',
    price: 'S/ 150',
    duration: '4 semanas / Acceso de por vida',
    badge: 'Inicio desde Cero',
    description:
      'Abre tus canales energéticos para canalizar la energía vital universal. Aprende a realizarte autotratamiento y aplicar Reiki a personas, plantas y animales.',
    topics: [
      'Historia y los 5 principios sagrados del Dr. Mikao Usui',
      'Anatomía energética: 7 chakras y campos áuricos',
      'Iniciación energética y apertura de canales sutiles',
      'Protocolos paso a paso para autotratamiento diario',
      'Limpieza energética de objetos y ambientes',
    ],
  },
  {
    level: 'Nivel 2',
    name: 'Okuden: Sanación a Distancia',
    subtitle: 'El dominio de los Símbolos Sagrados y el tiempo',
    price: 'S/ 190',
    duration: '4 semanas / Acceso de por vida',
    badge: 'Expansión Cuántica',
    highlight: true,
    description:
      'Transciende las barreras físicas del tiempo y el espacio. Integra los tres símbolos sagrados de Reiki para sanar a distancia, limpiar traumas pasados y armonizar el futuro.',
    topics: [
      'Estudio e integración de los 3 símbolos sagrados',
      'Cho Ku Rei (Potencia), Sei He Ki (Emocional), Hon Sha Ze Sho Nen (Distancia)',
      'Protocolo de sanación cuántica a distancia',
      'Sanación de heridas de la infancia y patrones repetitivos',
      'Técnicas de protección áurica y telepatía energética',
    ],
  },
  {
    level: 'Nivel 3 & Maestría',
    name: 'Shinpiden: La Llama Trina & Maestría',
    subtitle: 'Conexión con el Yo Superior y docencia espiritual',
    price: 'S/ 260',
    duration: '6 semanas / Formación continua',
    badge: 'Maestría Espiritual',
    description:
      'Alcanza el grado maestro de Reiki Usui. Aprende a sintonizar a otros practicantes y a trabajar con la poderosa Llama Trina (Poder, Sabiduría y Amor Divino).',
    topics: [
      'Símbolo maestro Dai Ko Myo y conexión crística',
      'Trabajo y activación de la sagrada Llama Trina',
      'Protocolo de iniciaciones y sintonizaciones para alumnos',
      'Ética del maestro y acompañamiento de almas en despertar',
      'Diploma de Maestro/a Reiki Usui con aval internacional',
    ],
  },
]

export default function CoursesSection({ onOpenBooking }) {
  return (
    <section id="cursos" className="relative py-28 bg-[#0b0417] overflow-hidden scroll-mt-16">
      {/* Background circles */}
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-purple-900/20 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/35 bg-purple-950/40 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Escuela de Formación Holística</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Conviértete en <span className="text-gold-gradient">Terapeuta Reiki</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-purple-200/80 leading-relaxed">
            Todos nacemos con la capacidad de canalizar energía sanadora. Aprende con un método estructurado, cálido y ético desde tu hogar, con sintonización individualizada y certificación.
          </p>
        </div>

        {/* Courses Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {courses.map((course) => (
            <div
              key={course.level}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                course.highlight
                  ? 'bg-gradient-to-b from-[#250d40] via-[#1a0830] to-[#120522] border-2 border-[#dfba73] shadow-2xl shadow-purple-950/80 lg:-translate-y-2'
                  : 'glass-sacred border border-[#dfba73]/25 hover:border-[#dfba73]/50'
              }`}
            >
              {course.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#dfba73] via-[#e5c384] to-[#b8860b] text-[#080312] text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                  Recomendado para Terapeutas
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#dfba73]">
                    {course.level}
                  </span>
                  <span className="text-[10px] font-semibold text-purple-200/80 px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/60">
                    {course.badge}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  {course.name}
                </h3>
                <p className="text-xs text-purple-200/70 mb-6">
                  {course.subtitle}
                </p>

                <div className="pb-6 mb-6 border-b border-purple-900/40">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white">
                      {course.price}
                    </span>
                    <span className="text-xs text-purple-300/70">pago único</span>
                  </div>
                  <span className="text-[11px] text-[#dfba73] mt-1 block font-medium">
                    {course.duration}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {course.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 block mb-2">
                    Lo que aprenderás:
                  </span>
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="p-3.5 rounded-xl bg-[#0e041d] border border-purple-900/50 text-[11px] text-purple-200/90 mb-6 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#dfba73] shrink-0" />
                  <span>Incluye Manual en PDF + Sintonización + Certificado</span>
                </div>

                <button
                  onClick={() => onOpenBooking(`Curso: ${course.name}`)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    course.highlight
                      ? 'bg-gradient-to-r from-[#dfba73] via-[#e5c384] to-[#b8860b] text-[#080312] shadow-lg shadow-[#dfba73]/30 hover:scale-102'
                      : 'border border-[#dfba73]/40 bg-[#dfba73]/10 text-[#dfba73] hover:bg-[#dfba73] hover:text-[#080312]'
                  }`}
                >
                  <span>Pedir Información del Curso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Community Proof */}
        <div className="mt-16 text-center text-xs text-purple-300/80 flex items-center justify-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#dfba73]" />
            <span>+150 Alumnas formadas en sanación</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#dfba73]" />
            <span>Linaje tradicional Usui con aval</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#dfba73]" />
            <span>Acompañamiento personalizado en WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  )
}
