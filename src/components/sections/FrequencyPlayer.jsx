import { useState, useRef, useEffect } from 'react'
import { Play, Square, Volume2, Sparkles, Waves, Info } from 'lucide-react'

const frequencies = [
  {
    hz: 396,
    name: '396 Hz - Liberación',
    chakra: 'Chakra Raíz (Muladhara)',
    description: 'Ayuda a disolver sentimientos de culpa, miedos arraigados y bloqueos del pasado.',
    color: '#ef4444',
  },
  {
    hz: 432,
    name: '432 Hz - Armonía Natural',
    chakra: 'Afinación del Cosmos',
    description: 'La frecuencia natural de la Tierra y el agua. Induce estados de paz y claridad profunda.',
    color: '#10b981',
  },
  {
    hz: 528,
    name: '528 Hz - El Milagro',
    chakra: 'Transformación & ADN',
    description: 'Conocida como la frecuencia de la regeneración y el amor. Restaura el equilibrio interior.',
    color: '#dfba73',
  },
  {
    hz: 639,
    name: '639 Hz - Conexión & Corazón',
    chakra: 'Chakra Corazón (Anahata)',
    description: 'Facilita la armonía en las relaciones interpersonales, la compasión y el amor incondicional.',
    color: '#22c55e',
  },
  {
    hz: 741,
    name: '741 Hz - Expresión & Limpieza',
    chakra: 'Chakra Garganta (Vishuddha)',
    description: 'Desbloquea la voz auténtica, limpia toxinas energéticas y potencia la intuición.',
    color: '#06b6d4',
  },
  {
    hz: 852,
    name: '852 Hz - Tercer Ojo',
    chakra: 'Chakra Tercer Ojo (Ajna)',
    description: 'Abre la visión interior, disuelve ilusiones del ego y conecta con la sabiduría profunda.',
    color: '#818cf8',
  },
  {
    hz: 963,
    name: '963 Hz - Conexión Divina',
    chakra: 'Chakra Corona (Sahasrara)',
    description: 'La frecuencia de la Unidad y la Luz Divina. Activa la glándula pineal y el estado YO SOY.',
    color: '#c084fc',
  },
]

export default function FrequencyPlayer() {
  const [selectedFreq, setSelectedFreq] = useState(frequencies[2]) // Default 528 Hz
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)

  const audioCtxRef = useRef(null)
  const oscRef = useRef(null)
  const gainNodeRef = useRef(null)

  const stopTone = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      try {
        gainNodeRef.current.gain.linearRampToValueAtTime(
          0.0001,
          audioCtxRef.current.currentTime + 0.3
        )
        setTimeout(() => {
          if (oscRef.current) {
            oscRef.current.stop()
            oscRef.current.disconnect()
            oscRef.current = null
          }
          setIsPlaying(false)
        }, 320)
      } catch (e) {
        setIsPlaying(false)
      }
    } else {
      setIsPlaying(false)
    }
  }

  const playTone = (freqHz) => {
    stopTone()

    setTimeout(() => {
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext
        if (!AudioContextClass) return

        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass()
        }

        if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume()
        }

        const ctx = audioCtxRef.current
        const osc = ctx.createOscillator()
        const gainNode = ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freqHz, ctx.currentTime)

        gainNode.gain.setValueAtTime(0.0001, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(
          Math.max(0.001, volume * 0.4),
          ctx.currentTime + 0.4
        )

        osc.connect(gainNode)
        gainNode.connect(ctx.destination)

        osc.start()

        oscRef.current = osc
        gainNodeRef.current = gainNode
        setIsPlaying(true)
      } catch (err) {
        console.error('Audio context error:', err)
      }
    }, 100)
  }

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopTone()
    } else {
      playTone(selectedFreq.hz)
    }
  }

  const handleSelectFreq = (f) => {
    setSelectedFreq(f)
    if (isPlaying) {
      playTone(f.hz)
    }
  }

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current && isPlaying) {
      gainNodeRef.current.gain.linearRampToValueAtTime(
        Math.max(0.001, volume * 0.4),
        audioCtxRef.current.currentTime + 0.1
      )
    }
  }, [volume, isPlaying])

  useEffect(() => {
    return () => {
      stopTone()
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {})
      }
    }
  }, [])

  return (
    <section id="frecuencias" className="relative py-28 bg-[#080312] overflow-hidden scroll-mt-16">
      {/* Sacred Geometry Background Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-purple-900/20 pointer-events-none animate-spin-slow">
        <div className="absolute inset-8 rounded-full border border-[#dfba73]/10"></div>
        <div className="absolute inset-20 rounded-full border border-dashed border-purple-500/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/35 bg-purple-950/40 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Waves className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Sonoterapia Viva & Cimática</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            El Sonido que <span className="text-gold-gradient">Moldea la Materia</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-purple-200/80 leading-relaxed">
            Tal como el agua responde formando mandalas sagrados ante las vibraciones sonoras, las células de tu cuerpo absorben y se sintonizan con estas ondas. Prueba en vivo nuestras frecuencias Solfeggio.
          </p>
        </div>

        {/* Interactive Sound Station Card */}
        <div className="max-w-4xl mx-auto glass-sacred rounded-3xl p-6 sm:p-10 border border-[#dfba73]/30 purple-glow relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Frequency buttons */}
            <div className="lg:col-span-7 space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 block mb-2">
                Selecciona una Frecuencia Sagrada:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {frequencies.map((f) => {
                  const isSelected = selectedFreq.hz === f.hz
                  return (
                    <button
                      key={f.hz}
                      onClick={() => handleSelectFreq(f)}
                      className={`text-left p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-[#dfba73] bg-purple-900/40 shadow-lg shadow-purple-950/60 scale-102'
                          : 'border-purple-900/30 bg-[#160a2c]/60 hover:border-purple-700/50 hover:bg-[#1f0d3d]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{f.name}</span>
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: f.color }}
                        ></span>
                      </div>
                      <span className="text-[10px] text-purple-300/70 block mt-0.5">
                        {f.chakra}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right side: Player visualizer & controls */}
            <div className="lg:col-span-5 bg-[#120624] rounded-2xl p-6 border border-purple-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-purple-600/20 blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#dfba73]/15 blur-xl"></div>

              {/* Animated Sound Waves Display */}
              <div className="h-16 flex items-center justify-center gap-1.5 my-4">
                {isPlaying ? (
                  <>
                    <div className="w-1.5 bg-[#dfba73] rounded-full animate-soundwave-1"></div>
                    <div className="w-1.5 bg-purple-400 rounded-full animate-soundwave-2"></div>
                    <div className="w-1.5 bg-[#dfba73] rounded-full animate-soundwave-3"></div>
                    <div className="w-1.5 bg-cyan-400 rounded-full animate-soundwave-4"></div>
                    <div className="w-1.5 bg-[#dfba73] rounded-full animate-soundwave-5"></div>
                    <div className="w-1.5 bg-purple-400 rounded-full animate-soundwave-2"></div>
                    <div className="w-1.5 bg-[#dfba73] rounded-full animate-soundwave-1"></div>
                  </>
                ) : (
                  <div className="text-xs text-purple-300/70 font-medium flex items-center gap-2">
                    <Waves className="w-4 h-4 text-[#dfba73]" />
                    <span>Pulsa reproducir para sintonizar</span>
                  </div>
                )}
              </div>

              <div className="font-serif text-3xl font-bold text-white mb-1">
                {selectedFreq.hz} <span className="text-sm font-sans text-[#dfba73]">Hz</span>
              </div>
              <p className="text-xs font-semibold text-purple-200 mb-2">
                {selectedFreq.chakra}
              </p>
              <p className="text-[11px] text-purple-300/80 leading-relaxed px-2 mb-6">
                {selectedFreq.description}
              </p>

              {/* Main Play / Stop Button */}
              <button
                onClick={handleTogglePlay}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer ${
                  isPlaying
                    ? 'bg-rose-600 text-white shadow-rose-600/40 hover:bg-rose-500 hover:scale-105'
                    : 'bg-gradient-to-r from-[#dfba73] via-[#e5c384] to-[#b8860b] text-[#080312] shadow-[#dfba73]/30 hover:scale-105'
                }`}
                aria-label={isPlaying ? 'Detener frecuencia' : 'Reproducir frecuencia'}
              >
                {isPlaying ? (
                  <Square className="w-5 h-5 fill-white stroke-none" />
                ) : (
                  <Play className="w-6 h-6 fill-current stroke-none translate-x-0.5" />
                )}
              </button>

              {/* Volume Slider */}
              <div className="mt-6 w-full flex items-center gap-2 text-purple-300 px-4">
                <Volume2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full h-1 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-[#dfba73]"
                />
              </div>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-purple-900/40 flex items-center gap-2 text-[11px] text-purple-300/80">
            <Info className="w-4 h-4 text-[#dfba73] shrink-0" />
            <span>
              Tip holístico: Escucha estas frecuencias con auriculares durante tus meditaciones o antes de dormir para permitir que el campo bioenergético se calibre.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
