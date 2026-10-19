import { Sparkles, Heart, ArrowUp, MessageCircle } from 'lucide-react'
import logoImg from '../../assets/logo.jpg'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#06020e] border-t border-[#dfba73]/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle Purple & Gold Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-purple-900/15 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border border-[#dfba73]/50 p-0.5 bg-gradient-to-tr from-purple-600 to-[#dfba73] overflow-hidden shadow-md">
                <img
                  src={logoImg}
                  alt="Alma Sagrada"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-gold-gradient">
                Alma Sagrada
              </span>
            </div>
            <p className="text-xs text-purple-200/70 leading-relaxed">
              Un puente entre la sabiduría ancestral y la conciencia cuántica. Acompañamos tu proceso de sanación a través de Reiki a distancia, frecuencias sonoras y biodescodificación del linaje.
            </p>
            <p className="font-serif italic text-sm text-[#dfba73]/90">
              "Como es adentro, es afuera... Nada está separado."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#dfba73] mb-4">
              Terapias & Sanación
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/80">
              <li>
                <a href="#servicios" className="hover:text-[#dfba73] transition-colors">
                  Reiki Usui a Distancia
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#dfba73] transition-colors">
                  Sanación del Linaje Materno & Paterno
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#dfba73] transition-colors">
                  Armonización de Chakras y Aura
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#dfba73] transition-colors">
                  Limpiezas Energéticas con Sahumos
                </a>
              </li>
              <li>
                <a href="#frecuencias" className="hover:text-[#dfba73] transition-colors">
                  Sonoterapia & Frecuencias Solfeggio
                </a>
              </li>
            </ul>
          </div>

          {/* Formación y Escuela */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#dfba73] mb-4">
              Formaciones & Cursos
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/80">
              <li>
                <a href="#cursos" className="hover:text-[#dfba73] transition-colors">
                  Reiki Nivel 1: El Despertar del Sanador
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#dfba73] transition-colors">
                  Reiki Nivel 2: Sanación a Distancia
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#dfba73] transition-colors">
                  Reiki Nivel 3 & Maestría: Llama Trina
                </a>
              </li>
              <li>
                <a href="#geometria" className="hover:text-[#dfba73] transition-colors">
                  Geometría Sagrada en la Naturaleza
                </a>
              </li>
              <li>
                <a href="#chakras" className="hover:text-[#dfba73] transition-colors">
                  Guía de Mudras y Cristales
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto & Comunidad */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#dfba73] mb-4">
              Comunidad Consciente
            </h4>
            <p className="text-xs text-purple-200/70">
              Agenda tu consulta o sesión personalizada directamente a través de WhatsApp.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/51980570301?text=%C2%A1Hola!%20Vengo%20desde%20la%20web%20Alma%20Sagrada%20y%20deseo%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-950/40 flex items-center justify-center text-emerald-400 hover:border-emerald-400 hover:scale-105 transition-all shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-pink-500/30 bg-pink-950/40 flex items-center justify-center text-pink-400 hover:border-pink-400 hover:scale-105 transition-all shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-[#dfba73]/40 bg-[#160a2c] flex items-center justify-center text-[#dfba73] hover:border-[#dfba73] hover:scale-105 transition-all cursor-pointer ml-auto"
                aria-label="Volver arriba"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3 rounded-xl bg-[#130626] border border-purple-500/20 text-[11px] text-purple-200/80">
              <span className="text-[#dfba73] font-semibold">Atención Online:</span> Sesiones a distancia disponibles para todo el mundo hispanohablante.
            </div>
          </div>
        </div>

        {/* Disclaimer Legal Ético */}
        <div className="border-t border-purple-900/40 pt-6 pb-4">
          <p className="text-[11px] text-purple-300/60 leading-relaxed text-center max-w-4xl mx-auto">
            <strong className="text-purple-200">Aviso importante:</strong> Las terapias holísticas, energéticas y complementarias (Reiki, sonoterapia, biodescodificación) no sustituyen el diagnóstico, prescripción médica o tratamiento psicológico profesional. Son caminos complementarios de armonización y autoconocimiento interior.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/60 gap-3">
          <p>© {new Date().getFullYear()} Alma Sagrada. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-[11px] text-purple-300/80">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
            <span>para elevar la consciencia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
