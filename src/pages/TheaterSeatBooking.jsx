import { useEffect } from 'react';
import { ExternalLink, Github, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TheaterSeatBooking = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    "https://images.unsplash.com/photo-1489599735734-79b4ba6a1403?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600"
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
          <h1 className="text-4xl font-bold mb-4">Theater Seat Booking System</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A full-stack Theater seat booking application with seat booking, upcoming movies, and trailers.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Node.js", "MongoDB", "Stripe"].map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Seneshperera/Theater-Seat-Booking-System.git"
              className="px-6 py-3 border border-muted hover:border-primary rounded-lg transition-all duration-300 hover:text-primary flex items-center"
            >
              <Github size={20} className="mr-2" />
              View Source Code
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-muted-foreground mb-4">
              This comprehensive theater seat booking system allows users to browse movies,
              select seats, and complete secure payments for their cinema experience.
            </p>
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Interactive seat selection</li>
              <li>Movie listings and trailers</li>
              <li>Secure payment processing</li>
              <li>User account management</li>
              <li>Booking history and receipts</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
            <p className="text-muted-foreground mb-4">
              Built with modern web technologies, featuring a responsive React frontend,
              Node.js backend, and MongoDB database for robust performance.
            </p>
            <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Frontend: React with responsive design</li>
              <li>Backend: Node.js and Express</li>
              <li>Database: MongoDB for data storage</li>
              <li>Payments: Stripe integration</li>
              <li>State Management: React hooks</li>
            </ul>
          </div>
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
                  alt={`Theater Booking Screenshot ${index + 1}`}
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

export default TheaterSeatBooking;
