import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './Pages/accueil'
import Apropos from './Pages/apropos'
import Header from './Layout/header'
import Footer from './Layout/footer'
import Logement from './Pages/logement'
import Erreur from './Pages/erreur'
import "../assets/styles/style.css"

function App (){
  return(
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/logement" element={<Logement />} />
              <Route path="*" element={<Erreur />} />
          </Routes>
        <Footer />
      </Router>
  )
}

  export default App