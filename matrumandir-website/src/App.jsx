import { Routes, Route } from 'react-router-dom'
import Headers from './components/Headers'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Coordinator from './pages/Coordinator'
import Programs from './pages/Programs'
import Competitions from './pages/Competitions'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/coordinator" element={<Coordinator />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/competition" element={<Competitions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}