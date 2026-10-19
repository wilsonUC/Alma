import { Sparkles, ArrowRight, Waves, Heart, Compass, ShieldCheck } from 'lucide-react'
import logoImg from '../../assets/logo.jpg'

export default function HeroSection({ onOpenBooking }) {
  return (
    <section className="relative min-h-[95vh] pt-32 pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#080312] via-[#120722] to-[#080312]">
      {/* Background Sacred Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-purple-900/20 via-[#dfba73]/10 to-teal-900/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-950/40 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-16 right-10 w-80 h-80 bg-[#dfba73]/8 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Rotating Sacred Mandala SVG in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[950px] sm:h-[950px] opacity-[0.07] pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#dfba73] fill-none stroke-[0.8]">
          <circle cx="100" cy="100" r="96" />
          <circle cx="100" cy="100" r="90" strokeDasharray="3 4" stroke="#c084fc" />
          <circle cx="100" cy="100" r="45" />
          <circle cx="100" cy="55" r="45" />
          <circle cx="100" cy="145" r="45" />
          <circle cx="61.03" cy="77.5" r="45" />
          <circle cx="138.97" cy="77.5" r="45" />
          <circle cx="61.03" cy="122.5" r="45" />
          <circle cx="138.97" cy="122.5" r="45" />
          <circle cx="100" cy="10" r="45" opacity="0.5" />
          <circle cx="100" cy="190" r="45" opacity="0.5" />
          <circle cx="22.06" cy="55" r="45" opacity="0.5" />
          <circle cx="177.94" cy="55" r="45" opacity="0.5" />
          <circle cx="22.06" cy="145" r="45" opacity="0.5" />
          <circle cx="177.94" cy="145" r="45" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Floating Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#dfba73]/40 bg-[#1a0c2e]/85 backdrop-blur-md shadow-lg shadow-purple-950/40 text-[#dfba73] text-xs font-semibold tracking-wider mb-6 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>Espacio Holístico & Escuela de Sanación Consciente</span>
            </div>

            {/* Main Title with Gold & Mystic Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
              El cuerpo sana cuando el alma recuerda su{' '}
              <span className="text-gold-gradient block sm:inline">orden sagrado</span>.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Acompañamos tu despertar a través de <strong className="text-purple-300 font-medium">Reiki Usui a distancia</strong>, biodescodificación del <strong className="text-purple-300 font-medium">árbol transgeneracional</strong>, sonoterapia con <strong className="text-[#dfba73] font-medium">frecuencias Solfeggio</strong> y la sabiduría viva de la naturaleza.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenBooking('Sesión de Reiki a Distancia')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#dfba73] via-[#e5c384] to-[#b8860b] text-[#080312] font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#dfba73]/25 hover:shadow-2xl hover:shadow-[#dfba73]/40 hover:scale-103 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 fill-[#080312]" />
                <span>Agendar Sesión a Distancia</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#frecuencias"
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-purple-500/35 bg-[#170a2a]/80 backdrop-blur-sm text-purple-200 hover:text-[#dfba73] hover:border-[#dfba73]/60 hover:bg-[#200d3a] font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Waves className="w-4 h-4 text-[#dfba73]" />
                <span>Escuchar Frecuencias en Vivo</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-12 pt-8 border-t border-purple-900/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#dfba73]">+500</p>
                <p className="text-[11px] text-slate-400">Sesiones Realizadas</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-purple-300">+150</p>
                <p className="text-[11px] text-slate-400">Terapeutas Formadas</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#dfba73]">100%</p>
                <p className="text-[11px] text-slate-400">Enfoque Personalizado</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-serif font-bold text-purple-300">Global</p>
                <p className="text-[11px] text-slate-400">Atención Online a Distancia</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Mandala Logo Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            
            {/* Glowing Orb Backdrop */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-600/30 via-[#dfba73]/20 to-teal-500/15 blur-2xl animate-pulse-mystic pointer-events-none"></div>

            {/* Mandala Ornate Rotating Rings */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer Decorative Gold Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#dfba73]/40 animate-spin-slow pointer-events-none"></div>
              
              {/* Middle Purple Ring with jewels */}
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-spin-reverse-slow pointer-events-none"></div>

              {/* Main Central Circular Logo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-[#dfba73] via-[#7c3aed] to-[#dfba73] shadow-2xl shadow-purple-950/80 purple-glow-lg overflow-hidden group">
                <img
                  src={logoImg}
                  alt="Alma Sagrada - Sanación Holística y Geometría"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Soft Glass Shine overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-white/10 pointer-events-none"></div>
              </div>

              {/* Floating Pill Badges */}
              <div className="absolute -top-3 -right-2 sm:right-0 px-3.5 py-1.5 rounded-full bg-[#18082e]/90 border border-[#dfba73]/40 shadow-xl shadow-purple-950/60 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-bold text-[#dfba73] animate-bounce" style={{ animationDuration: '4s' }}>
                <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
                <span>Reiki Usui & Llama Trina</span>
              </div>

              <div className="absolute -bottom-3 -left-2 sm:left-0 px-3.5 py-1.5 rounded-full bg-[#18082e]/90 border border-purple-500/40 shadow-xl shadow-purple-950/60 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-bold text-purple-200">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span>Sanación del Linaje</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
