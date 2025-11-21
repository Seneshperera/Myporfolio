import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import justParkImg from './assets/justpark/Bookingconfirmation.png';
import cinemaxImg from './assets/cinemax/Booking.png';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Just Park.lk',
      description: 'Smart cloud-based parking system with real-time availability, secure payments, admin dashboards, and municipal approval workflows.',
      image: justParkImg,
      category: 'web',
      technologies: ['React.js', 'Node.js', 'MySQL', 'IoT'],
      githubUrl: 'https://github.com/Seneshperera/justparkfull.git',
      liveUrl: '#',
      path: '/projects/just-park'
    },
    {
      id: 2,
      title: 'HasthiRaksha',
      description: 'MERN platform with SMS alerts for elephant sightings, real-time map tracking, and community reporting to aid conflict mitigation.',
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&h=600',
      category: 'web',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      githubUrl: 'https://github.com/Seneshperera/project-save-elephants.git',
      liveUrl: '#',
      path: '/projects/hasthi-raksha'
    },
    {
      id: 3,
      title: 'Cinemax.lk',
      description: 'Theatre ticket snack booking system with seat selection, snack orders, and admin schedule management.',
      image: 'https://images.unsplash.com/photo-1489599735734-79b4ba6a1403?auto=format&fit=crop&w=800&h=600',
      category: 'web',
      technologies: ['React.js', 'Spring Boot', 'MongoDB'],
      githubUrl: 'https://github.com/Seneshperera/Theater-Seat-Booking-System.git',
      liveUrl: '#',
      path: '/projects/cinemax'
    },
    {
      id: 4,
      title: 'Gaman.lk',
      description: 'Real-time bus and train delay notification system with AI-powered WhatsApp chatbot and driver update dashboard.',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f5?auto=format&fit=crop&w=800&h=600',
      category: 'web',
      technologies: ['React.js', 'Tailwind CSS', 'n8n', 'Node.js'],
      githubUrl: '#',
      liveUrl: '#',
      path: '/projects/gaman'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, featuring full-stack applications
            and innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-secondary/50 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel group hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={project.path}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
