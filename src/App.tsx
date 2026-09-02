import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-content-primary">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <section id="about" className="min-h-[60vh]" />
        <section id="stack" className="min-h-[60vh]" />
        <section id="contact" className="min-h-[60vh]" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
