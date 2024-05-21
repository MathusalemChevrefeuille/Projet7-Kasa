import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Accueil from './Pages/Home/accueil'
import Apropos from './Pages/About/apropos'
import Header from './Layout/header'
import Footer from './Layout/footer'
import Logement from './Pages/Housing/logement'
import Erreur from './Pages/Error/erreur'
import "../assets/styles/style.css"

function App (){
  return(
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/logement/:houseid" element={<Logement />} />
              <Route path="*" element={<Erreur />} />
          </Routes>
        <Footer />
      </Router>
  )
}

  export default App