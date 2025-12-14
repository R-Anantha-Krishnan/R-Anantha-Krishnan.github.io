import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './sections/Hero'
import Contact from './sections/Contact'

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
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
