import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-content-primary">
      <Navbar />
      <main>
        <Hero />
        {/* Placeholder sections for future tasks */}
        <section id="about" className="min-h-[60vh]" />
        <section id="projects" className="min-h-[60vh]" />
        <section id="stack" className="min-h-[60vh]" />
        <section id="contact" className="min-h-[60vh]" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
