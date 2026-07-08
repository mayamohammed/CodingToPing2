import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Methode from './components/Methode';
import Projets from './components/Projets';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import SolutionDetail from './pages/SolutionDetail';
import Contact from './pages/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Solutions />
      <Methode />
      <Projets />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
