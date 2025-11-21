import { useEffect, useRef } from 'react';
import seneshImage from '../assets/senesh.jpeg';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  
  // Check if element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  // Add animation when section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    
    const handleScroll = () => {
      if (section && isInViewport(section)) {
        section.classList.add('animate-fade-in-up');
        section.style.opacity = '1';
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Add 3D effect to image
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    
    const handleMouseMove = (e) => {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Limit the rotation to a smaller range
      const tiltX = -y / 20;
      const tiltY = x / 20;
      
      image.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };
    
    image.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
      image.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-container opacity-0"
    >
      <h2 className="section-title text-center mb-16">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="perspective" ref={imageRef}>
          <div className="preserve-3d transition-transform duration-200 ease-out">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-xl shadow-primary/10">
              <img
                src={seneshImage}
                alt="Senesh Perera"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-5">
          <div className="glass-panel p-2 rounded-lg inline-block mb-2">
            <span className="text-xs font-mono text-primary">Full Stack Developer , UI/UX Designer & Graphic Designer</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3">Senesh Perera</h3>
          
          <p className="text-muted-foreground leading-relaxed">
            A 24-year-old undergraduate IT student at the Institute of Technology, 
            University of Moratuwa (ITUM), pursuing a National Diploma in Technology. 
            I specialize in full-stack development, mobile development, and UI/UX designing, 
            blending creativity with technical expertise to craft impactful digital experiences.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Proficient in React.js, Tailwind CSS, Node.js, MongoDB, and skilled with design tools 
            like Figma and Adobe XD, I am deeply passionate about using technology to build innovative 
            solutions that address real-world challenges.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Driven by curiosity and a collaborative mindset, I continuously seek opportunities to learn, 
            grow, and contribute to transformative projects in the tech world.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            <div className="glass-panel p-4 rounded-lg">
              <h4 className="font-medium mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">
                Higher National Diploma, Information Technology<br />
                University of Moratuwa<br />
                2022 - 2026
              </p>
            </div>
            
            <div className="glass-panel p-4 rounded-lg">
              <h4 className="font-medium mb-2">Experience</h4>
              <p className="text-sm text-muted-foreground">
                Freelance Developer<br />
                Graphic Designer at Fiverr<br />
                Business Owner at Graphic Guru
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
