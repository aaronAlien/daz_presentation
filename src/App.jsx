import { Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/NavBar'
import Home from './pages/Home'
import WebDev from './pages/WebDev'
import DataSci from './pages/DataSci'
import NLP from './pages/NLP'
import WebDevProject from './pages/WebDevProject'
import DataSciProject from './pages/DataSciProject'
import NLPProject from './pages/NLPProject'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdev" element={<WebDev />} />
          <Route path="/webdev/project/:id" element={<WebDevProject />} />
          <Route path="/datasci" element={<DataSci />} />
          <Route path="/datasci/project/:id" element={<DataSciProject />} />
          <Route path="/nlp" element={<NLP />} />
          <Route path="nlp/project/:id" element={<NLPProject />} />
        </Routes> 
      </main>
      <Footer />
    </div>
    
  )
}

export default App