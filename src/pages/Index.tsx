
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import GraphicDesignSection from '../components/GraphicDesignSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  // Create animated cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.createElement('div');
      cursor.className = 'cursor-dot';
      cursor.style.position = 'fixed';
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursor.style.borderRadius = '50%';
      cursor.style.backgroundColor = 'rgba(120, 59, 236, 0.5)';
      cursor.style.pointerEvents = 'none';
      cursor.style.zIndex = '9999';
      document.body.appendChild(cursor);
      
      // Animate and remove
      setTimeout(() => {
        cursor.style.opacity = '0';
        cursor.style.transform = 'scale(2)';
        cursor.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
          cursor.remove();
        }, 500);
      }, 10);
    };
    
    // Only add the effect for non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="page-mask min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GraphicDesignSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
