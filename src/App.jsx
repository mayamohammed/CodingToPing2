import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Methode from './components/Methode';
import Projets from './components/Projets';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Methode />
        <Projets />
      </main>
      <Footer />
    </>
  );
}
