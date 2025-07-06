import { Routes, Route } from 'react-router-dom'
import Headers from './components/Headers'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Coordinator from './pages/Coordinator'
import Activities from './pages/Activities'
import Competitions from './pages/Competitions'
import CompetitionDetails from './pages/CompetitionDetails'
import Results from './pages/Results'
import GalleryPage from './pages/GalleryPage'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/coordinator" element={<Coordinator />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/competition" element={<Competitions />} />
        <Route path="/competition-details/:id" element={<CompetitionDetails />} />
        <Route path="/results" element={<Results />} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}