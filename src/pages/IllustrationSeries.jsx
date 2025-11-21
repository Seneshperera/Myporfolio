import { useEffect, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import illust1 from '../components/assets/illustrate/WhatsApp Image 2025-11-22 at 03.17.24 (1).jpeg';
import illust2 from '../components/assets/illustrate/WhatsApp Image 2025-11-22 at 03.17.24.jpeg';
import illust3 from '../components/assets/illustrate/WhatsApp Image 2025-11-22 at 03.17.25.jpeg';

const IllustrationSeries = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    illust1,
    illust2,
    illust3
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
          <h1 className="text-4xl font-bold mb-4">Illustration Series</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Custom digital illustrations for marketing materials and product branding.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Illustration</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Series Overview</h2>
            <p className="text-muted-foreground mb-4">
              This illustration series features custom digital artwork created for various
              marketing materials and branding purposes, showcasing creativity and artistic style.
            </p>
            <h3 className="text-lg font-semibold mb-2">Illustration Types:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Character illustrations</li>
              <li>Product visualizations</li>
              <li>Brand mascots</li>
              <li>Icon sets</li>
              <li>Marketing graphics</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Artistic Approach</h2>
            <p className="text-muted-foreground mb-4">
              Each illustration was crafted with attention to detail, color theory,
              and composition to create engaging and memorable visual content.
            </p>
            <h3 className="text-lg font-semibold mb-2">Techniques Used:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Digital painting</li>
              <li>Vector illustration</li>
              <li>Character design</li>
              <li>Color palette development</li>
              <li>Style consistency</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Illustration Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Illustration ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm">View Illustration</span>
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
              alt="Selected Illustration"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default IllustrationSeries;
