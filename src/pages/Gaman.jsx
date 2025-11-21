import { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gaman = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    "https://images.unsplash.com/photo-1474487548417-781cb71495f5?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600"
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
          <h1 className="text-4xl font-bold mb-4">Gaman.lk</h1>
          <p className="text-xl text-muted-foreground mb-6">
            AI-powered transportation platform delivering real-time bus and train delay notifications through intelligent WhatsApp chatbot and driver dashboards.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React.js", "Tailwind CSS", "n8n", "Node.js"].map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Project Title & Tagline</h2>
            <h3 className="text-xl font-semibold mb-2">Gaman.lk - Smart Travel, Stress-Free Journey</h3>
            <p className="text-muted-foreground">
              Revolutionizing public transportation with AI-driven delay notifications and seamless communication between passengers and operators.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Overview & Solution</h2>
            <p className="text-muted-foreground mb-4">
              Gaman.lk solves the persistent problem of unreliable public transportation information by providing real-time delay notifications and status updates through an intelligent WhatsApp chatbot. The platform addresses passenger frustration and planning difficulties caused by unpredictable bus and train schedules.
            </p>
            <p className="text-muted-foreground mb-4">
              Powered by n8n for AI automation and built with React.js and Tailwind CSS, the system features a driver dashboard for real-time updates and an automated chatbot that delivers personalized notifications. The Node.js backend ensures reliable message processing and data management for thousands of concurrent users.
            </p>
            <p className="text-muted-foreground">
              Key advantages include reduced passenger wait times, improved transportation reliability, enhanced user satisfaction through proactive communication, and valuable operational insights for transport authorities to optimize service delivery.
            </p>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Features & Contributions</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>AI-Powered WhatsApp Chatbot:</strong> Intelligent conversational interface for delay notifications and travel queries (AI Chatbot Logic, Front/Backend Integration)</li>
            <li><strong>Real-time Delay Tracking:</strong> Live monitoring system for bus and train schedules with automatic notifications (Dashboard Development, Backend Integration)</li>
            <li><strong>Driver Update Dashboard:</strong> Intuitive interface for drivers to report delays and status updates (Front/Backend Integration, Dashboard Development)</li>
            <li><strong>Automated Notification System:</strong> Smart alerts based on user preferences and location (AI Chatbot Logic, Node.js Backend)</li>
            <li><strong>Responsive Web Interface:</strong> Mobile-optimized platform for seamless user experience across devices (React.js, Tailwind CSS)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Technology Stack:</strong> React.js, Tailwind CSS, n8n (AI Automation), Node.js
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
                  alt={`Gaman Screenshot ${index + 1}`}
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

export default Gaman;
