
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';

//import image details
import movie from './assets/movie.jpeg'

// Project data
const projects = [
  {
    title: "Theater seat booking system",
    description: "A full-stack Theater seat booking application with seat booking , upcoming movies , Trilers.",
    image: movie,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    //demoLink: "#",
    codeLink: "https://github.com/Seneshperera/Theater-Seat-Booking-System.git"
  },
  {
    title: "International research conference",
    description: "A responsive website that has build for International research conference.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    //demoLink: "#",
    codeLink: "https://github.com/Seneshperera/International-conference-24.git"
  },
  {
    title: "Library Management System",
    description: "Library managment system that has build by using java.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400",
    tags: ["Java"],
    //demoLink: "#",
    codeLink: "https://github.com/Seneshperera/Library-Management-System-by-java.git"
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Reset cards refs array
  cardsRef.current = [];
  
  // Add animation when section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    
    const handleScroll = () => {
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        // Animate each card with delay
        cards.forEach((card, index) => {
          if (card) {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 200);
          }
        });
        
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Add to refs collection
  const addToCardRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  
  // Handle project modal open/close
  const openProjectModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const modal = document.querySelector('.project-modal-content');
      if (modal && !modal.contains(e.target as Node) && selectedProject !== null) {
        closeProjectModal();
      }
    };
    
    if (selectedProject !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-container"
    >
      <h2 className="section-title text-center">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            ref={addToCardRefs}
            className="project-card opacity-0 transform translate-y-10 transition-all duration-500"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4 group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <button 
                  onClick={() => openProjectModal(index)}
                  className="mb-4 p-2 bg-primary/90 rounded-full text-white translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                  aria-label="View project details"
                >
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between mt-auto pt-4 border-t border-border">
              <a 
                //href={project.demoLink} 
                className="text-sm flex items-center hover:text-primary transition-colors"
              >
                <ExternalLink size={16} className="mr-1" /> 
              </a>
              <a 
                href={project.codeLink} 
                className="text-sm flex items-center hover:text-primary transition-colors"
              >
                <Github size={16} className="mr-1" /> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="project-modal-content glass-panel rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-fade-in">
            <div className="relative">
              <img 
                src={projects[selectedProject].image} 
                alt={projects[selectedProject].title} 
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <button 
                onClick={closeProjectModal}
                className="absolute top-4 right-4 p-1 rounded-full bg-background/80 text-foreground hover:bg-primary/90 hover:text-primary-foreground transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{projects[selectedProject].title}</h3>
              
              <p className="text-muted-foreground mb-6">
                {projects[selectedProject].description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[selectedProject].tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="glass-panel p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Technical Overview</h4>
                  <p className="text-sm text-muted-foreground">
                    This project was built using React for the frontend, with responsive design
                    principles and modern JavaScript practices. Backend integration uses RESTful APIs.
                  </p>
                </div>
                
                <div className="glass-panel p-4 rounded-lg">
                  <h4 className="font-medium mb-2">My Contribution</h4>
                  <p className="text-sm text-muted-foreground">
                    Designed and developed the complete application from concept to deployment,
                    including UI/UX design, frontend implementation, and backend integration.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  //href={projects[selectedProject].demoLink} 
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 text-center flex-1"
                >
                  
                </a>
                <a 
                  href={projects[selectedProject].codeLink} 
                  className="px-6 py-3 border border-muted hover:border-primary rounded-lg transition-all duration-300 hover:text-primary text-center flex-1"
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
