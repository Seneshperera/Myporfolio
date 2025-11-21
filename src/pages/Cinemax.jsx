import { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bookingImg from '../components/assets/cinemax/Booking.png';
import booking2Img from '../components/assets/cinemax/Booking2.png';
import homeImg from '../components/assets/cinemax/Home.png';
import loginImg from '../components/assets/cinemax/Login.png';
import paymentSuccessImg from '../components/assets/cinemax/PaymentSuccess.png';

const Cinemax = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    homeImg,
    bookingImg,
    booking2Img,
    loginImg,
    paymentSuccessImg
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
          <h1 className="text-4xl font-bold mb-4">Cinemax.lk</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Comprehensive theatre ticket and snack booking system streamlining cinema experiences with seamless seat selection and order management.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React.js", "Spring Boot", "MongoDB", "Postman"].map((tag, index) => (
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
              View Code on GitHub
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Project Title & Tagline</h2>
            <h3 className="text-xl font-semibold mb-2">Cinemax.lk - Cinema Experience Reimagined</h3>
            <p className="text-muted-foreground">
              Revolutionizing movie theatre bookings with integrated seat selection, snack ordering, and streamlined administrative controls.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Overview & Solution</h2>
            <p className="text-muted-foreground mb-4">
              Cinemax.lk solves the fragmented cinema booking experience by providing a unified platform where moviegoers can select seats, purchase tickets, and order snacks in one seamless workflow. The system addresses common pain points like seat availability confusion and long concession lines through an intuitive web interface.
            </p>
            <p className="text-muted-foreground mb-4">
              Developed using React.js frontend with Spring Boot backend and MongoDB database, the platform offers real-time seat availability, integrated payment processing, and comprehensive admin tools for theatre management. The microservices architecture ensures high performance and scalability for busy cinema operations.
            </p>
            <p className="text-muted-foreground">
              Key advantages include reduced wait times at venues, increased customer satisfaction through convenient pre-booking, improved operational efficiency for theatre staff, and enhanced revenue opportunities through integrated snack ordering and upselling features.
            </p>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Features & Contributions</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Interactive Seat Selection:</strong> Visual seat map with real-time availability and selection locking (Frontend Development)</li>
            <li><strong>Snack Ordering System:</strong> Integrated menu with customization options and order tracking (Frontend Development, Seat/Order Logic Implementation)</li>
            <li><strong>Admin Schedule Management:</strong> Comprehensive dashboard for managing showtimes, pricing, and theatre operations (Backend Development)</li>
            <li><strong>Payment Integration:</strong> Secure payment processing with multiple gateway options and transaction history (Backend Development)</li>
            <li><strong>Mobile-Responsive Interface:</strong> Optimized design for seamless booking experience across all devices (Frontend Development)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Technology Stack:</strong> React.js, Spring Boot, MongoDB, Postman
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
                  alt={`Cinemax Screenshot ${index + 1}`}
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

export default Cinemax;
