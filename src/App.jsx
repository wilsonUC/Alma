import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import FrequencyPlayer from './components/sections/FrequencyPlayer'
import ChakraGuide from './components/sections/ChakraGuide'
import SacredGeometrySection from './components/sections/SacredGeometrySection'
import CoursesSection from './components/sections/CoursesSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FaqSection from './components/sections/FaqSection'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import BookingModal from './components/ui/BookingModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Reiki Usui a Distancia')

  const handleOpenBooking = (serviceName = 'Reiki Usui a Distancia') => {
    setSelectedService(serviceName)
    setModalOpen(true)
  }

  const handleCloseBooking = () => {
    setModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#090b10] text-slate-100 font-sans selection:bg-[#dfba73] selection:text-[#090b10]">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <FrequencyPlayer />
        <ChakraGuide onOpenBooking={handleOpenBooking} />
        <SacredGeometrySection />
        <CoursesSection onOpenBooking={handleOpenBooking} />
        <TestimonialsSection />
        <FaqSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements & Modal */}
      <FloatingWhatsApp onOpenModal={handleOpenBooking} />
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  )
}
