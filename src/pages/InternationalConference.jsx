import { useEffect, useState } from 'react';
import { ExternalLink, Github, ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InternationalConference = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=600"
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
          <h1 className="text-4xl font-bold mb-4">International Research Conference</h1>
          <p className="text-xl text-muted-foreground mb-6">
            A responsive website built for an International research conference with modern design and functionality.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {["React", "Tailwind CSS", "Framer Motion"].map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/Seneshperera/International-conference-24.git"
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
              This responsive website was created for an international research conference, providing
              a platform for researchers, academics, and professionals to connect, share knowledge,
              and collaborate on cutting-edge research topics.
            </p>
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Conference schedule and agenda</li>
              <li>Speaker profiles and presentations</li>
              <li>Registration system integration</li>
              <li>Responsive design for all devices</li>
              <li>Interactive elements with Framer Motion</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
            <p className="text-muted-foreground mb-4">
              Developed using React and styled with Tailwind CSS, featuring smooth animations
              powered by Framer Motion for an engaging user experience.
            </p>
            <h3 className="text-lg font-semibold mb-2">Technologies Used:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Frontend: React with component-based architecture</li>
              <li>Styling: Tailwind CSS for utility-first design</li>
              <li>Animations: Framer Motion for smooth transitions</li>
              <li>Responsive: Mobile-first design approach</li>
              <li>Performance: Optimized for fast loading</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img
                  src={image}
                  alt={`International Conference Screenshot ${index + 1}`}
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
    </div>
  );
};

export default InternationalConference;
