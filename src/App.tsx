import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/layout/FloatingContact';
import { Preloader } from './components/layout/Preloader';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Education } from './components/sections/Education';
import { TechTimeline } from './components/sections/TechTimeline';
import { Blog } from './components/sections/Blog';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Services } from './components/sections/Services';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <Preloader />
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <TechTimeline />
        <Services />
        <Pricing />
        <Blog />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
