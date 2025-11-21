import { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  
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
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a mock submission - in a real application, you'd send this to a server
    setTimeout(() => {
      // Removed toast notification
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-container opacity-0 relative overflow-hidden"
    >
      <h2 className="section-title text-center">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <p className="text-muted-foreground leading-relaxed">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="mt-1 mr-4 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a 
                  href="mailto:seneshperera2000@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  seneshperera2000@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="mt-1 mr-4 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <a 
                  href="tel:+94774714871" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +94 77 471 4871
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Linkedin className="mt-1 mr-4 text-primary" />
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/senesh-perera-24b7a426b" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  LinkedIn Profile <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Github className="mt-1 mr-4 text-primary" />
              <div>
                <h3 className="font-medium">GitHub</h3>
                <a 
                  href="https://github.com/Seneshperera" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  GitHub Profile <ExternalLink size={12} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-5 rounded-xl">
            <h3 className="font-medium mb-3">Current Status</h3>
            <p className="text-muted-foreground text-sm">
              I'm currently available for freelance projects, part-time work, and open to discussing full-time opportunities.
            </p>
            <div className="flex items-center mt-4">
              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
              <span className="ml-2 text-sm">Available for new projects</span>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="contact-input resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
              ) : (
                <>
                  Send Message <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
