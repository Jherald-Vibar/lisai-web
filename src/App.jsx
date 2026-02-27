import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Home Page/Navbar'
import Footer from './components/Home Page/Footer'
import Hero from './components/Home Page/Hero'
import ServiceHighlights from './components/Home Page/ServiceHighlights'
import AboutUs from './components/Home Page/AboutUs'
import ContactUs from './components/Home Page/ContactUs'
import AboutUsPage from './components/AboutUs/AboutUsPage'
import ServicesPage from './components/ServicesPage/ServicesPage'
import JobsPage from './components/JobsPage/JobsPage'
import ContactPage from './components/ContactPage/ContactPage'

function HomePage() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <AboutUs />
      <ContactUs />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App