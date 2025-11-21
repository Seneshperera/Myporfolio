import { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HasthiRaksha = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&h=600"
  ];

  return (
    <div className="min-h-screen text-foreground relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="floating-dots absolute top-10 left-10"></div>
        <div className="floating-dots absolute top-20 right-20" style={{ animationDelay: '2s' }}></div>
        <div className="floating-dots absolute bottom-20 left-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="floating-dots absolute top-1/3 right-1/3" style={{ animationDelay: '6s' }}></div>
        <div className="floating-dots absolute bottom-10 right-10" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>

        <div className="glass-panel rounded-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">HasthiRaksha</h1>
          <p className="text-xl text-muted-foreground mb-6">
            MERN platform combating human-elephant conflict through SMS alerts, real-time tracking, and community-driven reporting for wildlife conservation.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React.js", "Node.js", "Express.js", "MongoDB", "Twilio"].map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Seneshperera/project-save-elephants.git"
              className="px-6 py-3 border border-muted hover:border-primary rounded-lg transition-all duration-300 hover:text-primary flex items-center"
            >
              <Github size={20} className="mr-2" />
              View Code on GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Project Title & Tagline</h2>
            <h3 className="text-xl font-semibold mb-2">HasthiRaksha - Protecting Lives, Preserving Heritage</h3>
            <p className="text-muted-foreground">
              Innovative technology solution bridging wildlife conservation and community safety through intelligent monitoring and rapid response systems.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Overview & Solution</h2>
            <p className="text-muted-foreground mb-4">
              HasthiRaksha addresses the critical human-elephant conflict in Sri Lanka by providing a comprehensive platform that enables real-time monitoring, instant alerts, and community participation in wildlife conservation efforts. The system tackles the challenge of delayed response to elephant sightings that often result in property damage and loss of life.
            </p>
            <p className="text-muted-foreground mb-4">
              Built as a full-stack MERN application with Twilio integration for SMS alerts, the platform features an interactive map for real-time elephant tracking and a community reporting system. The Express.js backend ensures reliable data processing and alert distribution to affected communities and wildlife authorities.
            </p>
            <p className="text-muted-foreground">
              Key benefits include significantly reduced human-elephant conflicts, enhanced community awareness and participation, improved response times for wildlife authorities, and valuable data collection for conservation research and policy development.
            </p>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Features & Contributions</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>SMS Alert System:</strong> Instant notifications to communities about elephant sightings using Twilio integration (Full Stack Development, API Integration)</li>
            <li><strong>Real-time Map Tracking:</strong> Interactive visualization of elephant movements and conflict zones (UI Design, Frontend Development)</li>
            <li><strong>Community Reporting Portal:</strong> User-friendly interface for citizens to report sightings and contribute to conservation (Full Stack Development, UI Design)</li>
            <li><strong>Admin Dashboard:</strong> Comprehensive management system for wildlife authorities to monitor and respond to incidents (Backend Development, API Integration)</li>
            <li><strong>Data Analytics:</strong> Insights and reporting tools for conservation research and policy making (MongoDB Integration, Backend Development)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Technology Stack:</strong> React.js, Node.js, Express.js, MongoDB, Twilio
          </p>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`HasthiRaksha Screenshot ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm">View Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Selected Screenshot"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HasthiRaksha;
