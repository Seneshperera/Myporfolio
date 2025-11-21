
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer & UI/UX Designer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
        setInterval(() => {
          setShowCursor(show => !show);
        }, 500);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20">
      <div className="text-center">
        <p className="text-lg mb-4">Hello, I'm</p>
        <h1 className="text-4xl font-bold mb-4">Senesh Perera</h1>
        <h2 className="text-xl mb-6">
          {text}
          {showCursor && <span>|</span>}
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Blending creativity with technical expertise to craft impactful digital experiences.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="px-6 py-3 bg-blue-500 text-white rounded-lg">
            Get in Touch
          </a>
          <a href="#projects" className="px-6 py-3 border border-gray-300 rounded-lg">
            View Projects
          </a>
        </div>
      </div>
      <button onClick={scrollToAbout} className="mt-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l3 3 7-7"></path>
          <path d="M7 6l3 3 7-7"></path>
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
