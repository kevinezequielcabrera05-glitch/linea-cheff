import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Cocinas from './pages/Cocinas.jsx'
import Anafes from './pages/Anafes.jsx'
import Hornos from './pages/Hornos.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cocinas" element={<Cocinas />} />
      <Route path="/anafes" element={<Anafes />} />
      <Route path="/hornos" element={<Hornos />} />
    </Routes>
  )
}

export default App
