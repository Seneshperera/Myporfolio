import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PenTool, Palette, Image, Layout, Crop } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import logoImg from './assets/branding/WhatsApp Image 2025-11-22 at 03.18.15.jpeg';
import socialImg from './assets/Socialmedia/WhatsApp Image 2025-11-22 at 03.15.04 (1).jpeg';
import posterImg from './assets/poster/WhatsApp Image 2025-11-22 at 03.16.31.jpeg';
import uiImg from './assets/UI design/WhatsApp Image 2025-11-22 at 03.06.16.jpeg';
import illustImg from './assets/illustrate/WhatsApp Image 2025-11-22 at 03.17.24.jpeg';

// Updated images from assets folders
const social = socialImg;
const nelum = posterImg;
const ui = uiImg;
const logo = logoImg;
const illust = illustImg;


// Graphic design project data
const graphicProjects = [
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, typography, and brand guidelines.",
    image: logo,
    category: "Branding",
    path: "/designs/brand-identity"
  },
  {
    title: "Social Media Campaign",
    description: "Series of engaging social media posts designed for a marketing campaign with consistent visual language.",
    image: social,
    category: "Social Media",
    path: "/designs/poster-collection"
  },
  {
    title: "Poster Design Collection",
    description: "Set of promotional posters for events and marketing campaigns with bold typography and imagery.",
    image: nelum,
    category: "Print Design",
    path: "/designs/poster-collection"
  },
  {
    title: "UI Design System",
    description: "Comprehensive UI design system with reusable components for web and mobile applications.",
    image: ui,
    category: "UI Design",
    path: "/designs/ui-design-system"
  },
  {
    title: "Illustration Series",
    description: "Custom digital illustrations for marketing materials and product branding.",
    image: illust,
    category: "Illustration",
    path: "/designs/illustration-series"
  }
];

// Design service categories
const designServices = [
  {
    title: "Brand Identity",
    icon: <PenTool className="h-6 w-6 text-primary" />,
    description: "Logos, color palettes, typography, and brand guidelines that capture your brand's essence."
  },
  {
    title: "Print Design",
    icon: <Palette className="h-6 w-6 text-primary" />,
    description: "Brochures, business cards, flyers, posters, and other print materials with professional finish."
  },
  {
    title: "Digital Design",
    icon: <Image className="h-6 w-6 text-primary" />,
    description: "Social media graphics, digital ads, email templates, and other online visual content."
  },
  {
    title: "UI/UX Design",
    icon: <Layout className="h-6 w-6 text-primary" />,
    description: "User interfaces and experiences for websites, mobile apps, and other digital products."
  },
  {
    title: "Photo Editing",
    icon: <Crop className="h-6 w-6 text-primary" />,
    description: "Professional photo retouching, color correction, and manipulation for various uses."
  }
];

// Filter categories
const categories = ["All", "Branding", "Print Design", "Social Media", "UI Design", "Illustration"];

const GraphicDesignSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(graphicProjects);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  
  // Reset cards refs array
  cardsRef.current = [];
  
  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setVisibleProjects(graphicProjects);
    } else {
      setVisibleProjects(graphicProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);
  
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
  }, [visibleProjects]);
  
  // Add to refs collection
  const addToCardRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  
  return (
    <section 
      id="graphic-design" 
      ref={sectionRef}
      className="section-container glass-panel rounded-3xl mx-4 sm:mx-8 md:mx-auto mt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/5 z-0"></div>
      
      <div className="relative z-10">
        <h2 className="section-title text-center">Graphic Design</h2>
        
        <div className="mb-12">
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            As a passionate graphic designer, I create visually compelling designs that communicate effectively and leave lasting impressions. Explore my design work showcasing creativity and attention to detail.
          </p>
          
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Design projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              ref={addToCardRefs}
              className="opacity-0 transform translate-y-10 transition-all duration-500"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/80 backdrop-blur-sm border-muted">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/80 text-primary-foreground mb-2 inline-block">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <button
                    onClick={() => navigate(project.path)}
                    className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors duration-300 text-sm font-medium"
                  >
                    View Details
                  </button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Design services */}
        <div className="my-16">
          <h3 className="text-2xl font-bold text-center mb-10">Design Services</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designServices.map((service, index) => (
              <div 
                key={index} 
                className="glass-panel p-6 rounded-xl animate-fade-in-up" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3 p-2 rounded-lg bg-secondary text-secondary-foreground">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Design software proficiency */}
        <div className="glass-panel p-6 rounded-xl mb-10">
          <h3 className="text-xl font-bold mb-6 text-center">Design Software Proficiency</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Figma</span>
                <span className="text-sm text-muted-foreground">95%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-progress" style={{ width: "95%" }}></span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Adobe Photoshop</span>
                <span className="text-sm text-muted-foreground">90%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-progress" style={{ width: "90%" }}></span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Adobe Illustrator</span>
                <span className="text-sm text-muted-foreground">85%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-progress" style={{ width: "85%" }}></span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Adobe XD</span>
                <span className="text-sm text-muted-foreground">88%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-progress" style={{ width: "88%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignSection;
