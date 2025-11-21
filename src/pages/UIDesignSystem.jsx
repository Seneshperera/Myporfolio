import { useEffect, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ui1 from '../components/assets/UI design/WhatsApp Image 2025-11-22 at 03.06.16.jpeg';
import ui2 from '../components/assets/UI design/WhatsApp Image 2025-11-22 at 03.06.17 (1).jpeg';
import ui3 from '../components/assets/UI design/WhatsApp Image 2025-11-22 at 03.06.17.jpeg';
import ui4 from '../components/assets/UI design/WhatsApp Image 2025-11-22 at 03.06.18.jpeg';
import ui5 from '../components/assets/UI design/WhatsApp Image 2025-11-22 at 03.07.37.jpeg';

const UIDesignSystem = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    ui1,
    ui2,
    ui3,
    ui4,
    ui5
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
          <h1 className="text-4xl font-bold mb-4">UI Design System</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Comprehensive UI design system with reusable components for web and mobile applications.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">UI Design</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">System Overview</h2>
            <p className="text-muted-foreground mb-4">
              This comprehensive UI design system provides a complete set of reusable components,
              patterns, and guidelines for creating consistent and scalable user interfaces.
            </p>
            <h3 className="text-lg font-semibold mb-2">Components Included:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Buttons and form controls</li>
              <li>Navigation components</li>
              <li>Cards and containers</li>
              <li>Typography and spacing</li>
              <li>Color palette and themes</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Design Principles</h2>
            <p className="text-muted-foreground mb-4">
              The system follows modern design principles ensuring accessibility,
              consistency, and usability across all platforms and devices.
            </p>
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Responsive design patterns</li>
              <li>Accessibility compliance</li>
              <li>Dark and light mode support</li>
              <li>Component documentation</li>
              <li>Design token system</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">UI Components Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`UI Design System Component ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm">View Component</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIDesignSystem;
