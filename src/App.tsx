import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GithubProjects from '@/components/GithubProjects';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-content-primary">
      <Navbar />
      <main>
        <Hero />
        <GithubProjects />
        <section id="about" className="min-h-[60vh]" />
        <section id="stack" className="min-h-[60vh]" />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}

export default App;
