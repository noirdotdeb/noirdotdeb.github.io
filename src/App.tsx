import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import GithubProjects from '@/components/GithubProjects';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-content-primary">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <GithubProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
