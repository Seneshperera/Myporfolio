import { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bookingConfirmationImg from '../components/assets/justpark/Bookingconfirmation.png';
import homeImg from '../components/assets/justpark/Home.png';
import landownersImg from '../components/assets/justpark/landowners.png';
import municipalCouncilImg from '../components/assets/justpark/Municipalcouncil.png';
import signUpImg from '../components/assets/justpark/sign up.png';

const JustPark = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    homeImg,
    bookingConfirmationImg,
    landownersImg,
    municipalCouncilImg,
    signUpImg
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
          <h1 className="text-4xl font-bold mb-4">Just Park.lk</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Smart cloud-based parking system revolutionizing urban parking management with real-time availability and secure payments.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React.js", "Node.js", "MySQL", "IoT", "Postman"].map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Seneshperera/justparkfull.git"
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
            <h3 className="text-xl font-semibold mb-2">Just Park.lk - Smart Parking Revolution</h3>
            <p className="text-muted-foreground">
              Transforming urban parking challenges with intelligent cloud-based solutions and IoT integration.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Overview & Solution</h2>
            <p className="text-muted-foreground mb-4">
              Just Park.lk addresses the growing problem of inefficient parking systems in urban areas by providing a comprehensive cloud-based platform that connects drivers with available parking spaces in real-time. The solution leverages IoT sensors for accurate space monitoring and integrates secure payment processing to streamline the entire parking experience.
            </p>
            <p className="text-muted-foreground mb-4">
              Built as a MERN-stack application with React.js frontend and Node.js backend, the system includes municipal approval workflows and admin dashboards for comprehensive parking management. This approach ensures scalability, real-time updates, and seamless user experience across devices.
            </p>
            <p className="text-muted-foreground">
              Key benefits include reduced traffic congestion from searching for parking, increased revenue for parking operators through efficient space utilization, and enhanced user convenience with mobile-first design and instant booking capabilities.
            </p>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Features & Contributions</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Real-time Parking Availability:</strong> IoT sensor integration for live space monitoring and instant updates (UI Designer, Frontend Developer)</li>
            <li><strong>Secure Payment Processing:</strong> Integrated payment gateway with transaction security and receipt generation (Backend Developer)</li>
            <li><strong>Admin Dashboard:</strong> Comprehensive management interface for parking operators with analytics and reporting (Full Stack Development)</li>
            <li><strong>Municipal Approval Workflows:</strong> Automated approval processes for new parking facilities and compliance tracking (Backend Developer)</li>
            <li><strong>Responsive Web Interface:</strong> Mobile-optimized React.js frontend with intuitive user experience (UI Designer, Frontend Developer)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Technology Stack:</strong> React.js, Node.js, MySQL, IoT, Postman
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
                  alt={`Just Park Screenshot ${index + 1}`}
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

export default JustPark;
