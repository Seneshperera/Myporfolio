
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer & UI/UX Designer";
  
  useEffect(() => {
    let index = 0;
    
    // Type animation
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      
      if (index > fullText.length) {
        clearInterval(typingInterval);
        
        // Blink cursor animation after typing is done
        setInterval(() => {
          setShowCursor(show => !show);
        }, 500);
      }
    }, 100);
    
    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  
  // Create floating dots for background animation
  useEffect(() => {
    const createDots = () => {
      const dotsContainer = document.querySelector('.hero-dots-container');
      if (!dotsContainer) return;
      
      for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.classList.add('floating-dots');
        
        // Random positioning
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        
        // Random delay
        dot.style.animationDelay = `${Math.random() * 15}s`;
        
        dotsContainer.appendChild(dot);
      }
    };
    
    createDots();
  }, []);
  
  // Handle spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.querySelector('.spotlight-effect') as HTMLElement;
      if (!spotlight) return;
      
      // Get mouse position relative to the container
      const rect = spotlight.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update spotlight position
      spotlight.style.setProperty('--x', `${x}px`);
      spotlight.style.setProperty('--y', `${y}px`);
      spotlight.style.opacity = '1';
    };
    
    const handleMouseLeave = () => {
      const spotlight = document.querySelector('.spotlight-effect') as HTMLElement;
      if (spotlight) {
        spotlight.style.opacity = '0';
      }
    };
    
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden"
    >
      <div className="hero-dots-container absolute inset-0 pointer-events-none"></div>
      <div className="spotlight-effect"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-primary mb-3 inline-block font-mono text-sm md:text-base">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Senesh Perera
          </h1>
          <div className="min-h-10 mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              {text}
              {showCursor && <span className="hero-cursor"></span>}
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Blending creativity with technical expertise to craft impactful digital experiences. 
            Currently focused on building innovative solutions that address real-world challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-muted hover:border-primary rounded-lg transition-all duration-300 hover:text-primary"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <ChevronDown size={28} className="text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
