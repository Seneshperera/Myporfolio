
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    name: "Methuli",
    position: "Owner",
    company: "Grren glo Dehydrated foods",
    testimonial: "senesh created a label design that has appriceated by directors of cargills, keels and other companies. it has become a great advantage for my business.",
    //image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  // Handle animation on scroll
  useEffect(() => {
    const section = sectionRef.current;
    
    const handleScroll = () => {
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
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
  
  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section-container opacity-0"
    >
      <h2 className="section-title text-center">Client Testimonials</h2>
      
      <div 
        ref={testimonialsRef}
        className="relative max-w-4xl mx-auto mt-12"
      >
        <div className="testimonial-card relative">
          <div className="absolute -top-6 left-8 text-primary">
            <Quote size={48} className="opacity-25" />
          </div>
          
          <div className="relative z-10">
            <div className="mb-6 space-y-4">
              <p className="text-lg italic leading-relaxed">
                "{testimonials[activeIndex].testimonial}"
              </p>
            </div>
            
            <div className="flex items-center">
              <img 
                //src={testimonials[activeIndex].image} 
                alt={testimonials[activeIndex].name} 
                className="w-12 h-12 rounded-full mr-4 glass-panel p-1"
              />
              
              <div>
                <h4 className="font-medium">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].position} at {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation controls */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-primary w-6' : 'bg-muted'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full glass-panel hover:bg-primary/10 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full glass-panel hover:bg-primary/10 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
