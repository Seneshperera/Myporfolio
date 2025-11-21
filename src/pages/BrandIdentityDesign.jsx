import { useEffect, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import branding1 from '../components/assets/branding/WhatsApp Image 2025-11-22 at 03.18.15.jpeg';
import branding2 from '../components/assets/branding/WhatsApp Image 2025-11-22 at 03.18.16.jpeg';
import branding3 from '../components/assets/branding/WhatsApp Image 2025-11-22 at 03.18.17.jpeg';
import branding4 from '../components/assets/branding/WhatsApp Image 2025-11-22 at 03.18.18.jpeg';
import branding5 from '../components/assets/branding/WhatsApp Image 2025-11-22 at 03.18.19 (1).jpeg';
import branding6 from '../components/assets/branding/WhatsApp Image 2025-11-22 at 03.18.19.jpeg';

const BrandIdentityDesign = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    branding1,
    branding2,
    branding3,
    branding4,
    branding5,
    branding6
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
          <h1 className="text-4xl font-bold mb-4">Brand Identity Design</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Complete brand identity package including logo, color palette, typography, and brand guidelines.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Branding</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Design Overview</h2>
            <p className="text-muted-foreground mb-4">
              This comprehensive brand identity design creates a cohesive visual language
              that represents the brand's values, personality, and positioning in the market.
            </p>
            <h3 className="text-lg font-semibold mb-2">Deliverables:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Logo design (primary and secondary versions)</li>
              <li>Color palette with brand colors</li>
              <li>Typography guidelines</li>
              <li>Brand usage guidelines</li>
              <li>Brand application examples</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Design Process</h2>
            <p className="text-muted-foreground mb-4">
              The design process involved research, concept development, and refinement
              to create a memorable and versatile brand identity.
            </p>
            <h3 className="text-lg font-semibold mb-2">Tools Used:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Adobe Illustrator for logo design</li>
              <li>Adobe Photoshop for mockups</li>
              <li>Figma for brand guidelines</li>
              <li>Color theory and typography research</li>
              <li>Brand strategy consultation</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Design Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Brand Identity Design ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm">View Design</span>
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
              alt="Selected Design"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandIdentityDesign;
