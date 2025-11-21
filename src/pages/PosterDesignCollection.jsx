import { useEffect, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PosterDesignCollection = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=600"
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
          <h1 className="text-4xl font-bold mb-4">Poster Design Collection</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Set of promotional posters for events and marketing campaigns with bold typography and imagery.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Print Design</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Collection Overview</h2>
            <p className="text-muted-foreground mb-4">
              This poster collection showcases various promotional designs created for different
              events and marketing campaigns, each with unique visual concepts and messaging.
            </p>
            <h3 className="text-lg font-semibold mb-2">Poster Types:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Event promotion posters</li>
              <li>Product launch announcements</li>
              <li>Seasonal campaign posters</li>
              <li>Brand awareness posters</li>
              <li>Call-to-action designs</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Design Approach</h2>
            <p className="text-muted-foreground mb-4">
              Each poster was designed with attention to typography hierarchy, color psychology,
              and visual impact to effectively communicate the intended message.
            </p>
            <h3 className="text-lg font-semibold mb-2">Design Elements:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Bold typography and layouts</li>
              <li>High-impact imagery</li>
              <li>Strategic color usage</li>
              <li>Print-ready specifications</li>
              <li>Brand-consistent styling</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Poster Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Poster Design ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm">View Poster</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterDesignCollection;
