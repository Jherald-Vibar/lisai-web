import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import Navbar from './components/Home Page/Navbar'
import Footer from './components/Home Page/Footer'
import Hero from './components/Home Page/Hero'
import ServiceHighlights from './components/Home Page/ServiceHighlights'
import VideoSection from './components/Home Page/VideoSection'
import AboutUs from './components/Home Page/AboutUs'
import ContactUs from './components/Home Page/ContactUs'
import AboutUsPage from './components/AboutUs/AboutUsPage'
import ServicesPage from './components/ServicesPage/ServicesPage'
import JobsPage from './components/JobsPage/JobsPage'
import ContactPage from './components/ContactPage/ContactPage'
import ApplyIntro from './components/JobsPage/ApplyIntro'
import ApplyForm from './components/JobsPage/ApplyForm'

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <ServiceHighlights />
      <VideoSection />
      <AboutUs />
      <ContactUs />
    </>
  )
}

function Layout() {
  const location = useLocation()
  const isApplyPage = location.pathname.startsWith('/apply')

  return (
    <>
      {!isApplyPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/apply/:position" element={<ApplyIntro />} />
        <Route path="/apply/:position/form" element={<ApplyForm />} />
      </Routes>
      {!isApplyPage && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App