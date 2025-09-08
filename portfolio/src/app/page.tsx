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
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  );
}
