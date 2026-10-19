import { useState, useEffect } from 'react'
import { Sparkles, Menu, X, Heart, Shield, Waves, Compass, BookOpen } from 'lucide-react'
import logoImg from '../../assets/logo.jpg'

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Terapias', href: '#servicios', icon: Heart },
    { name: 'Frecuencias', href: '#frecuencias', icon: Waves },
    { name: 'Chakras', href: '#chakras', icon: Compass },
    { name: 'Geometría', href: '#geometria', icon: Shield },
    { name: 'Cursos Reiki', href: '#cursos', icon: BookOpen },
    { name: 'Preguntas', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0417]/92 backdrop-blur-md border-b border-[#dfba73]/20 py-2.5 shadow-xl shadow-purple-950/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Image */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#dfba73]/60 p-0.5 bg-gradient-to-tr from-[#7c3aed] via-[#1c0b33] to-[#dfba73] shadow-md shadow-purple-900/50 transition-all duration-300 group-hover:scale-105 group-hover:border-[#dfba73] overflow-hidden">
            <img
              src={logoImg}
              alt="Logo Alma Sagrada"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none"></div>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-2xl font-bold tracking-wider text-gold-gradient block leading-none">
              Alma Sagrada
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-purple-300/80 font-medium block mt-0.5">
              Sanación & Consciencia
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 hover:text-[#dfba73] hover:bg-purple-900/25 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenBooking('Consulta General')}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-[#dfba73]/60 bg-gradient-to-r from-purple-900/40 via-[#dfba73]/15 to-purple-950/40 text-[#dfba73] font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:border-[#dfba73] hover:shadow-[0_0_25px_rgba(223,186,115,0.4)] hover:scale-102 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
              <span>Agendar Sesión</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#dfba73] via-purple-600 to-[#b8860b] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-[#dfba73] hover:bg-purple-950/50 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c051a]/98 border-b border-[#dfba73]/25 px-6 py-6 backdrop-blur-xl animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-[#dfba73] hover:bg-purple-950/40 transition-colors"
              >
                {link.icon && <link.icon className="w-4 h-4 text-[#dfba73]" />}
                <span>{link.name}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-purple-900/40">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenBooking('Consulta General')
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#dfba73] via-purple-600 to-[#b8860b] text-[#080312] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-900/40"
              >
                <Sparkles className="w-4 h-4" />
                <span>Agendar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
