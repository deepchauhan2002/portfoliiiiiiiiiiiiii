import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="relative">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
