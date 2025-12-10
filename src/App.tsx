import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcases from './components/Showcases';
// import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="fixed inset-0 bg-gradient-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      <Navbar />
      <Hero />
      <Services />
      <Showcases />
      {/* <Skills /> */}
      <Reviews />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;