import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './sections/Hero'
import Contact from './sections/Contact'
import Projects from './sections/Projects/Projects'

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
          </>
        }
      />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
