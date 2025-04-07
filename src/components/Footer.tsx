
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-16 bg-gradient-to-b from-transparent to-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <a href="#home" className="text-xl font-bold text-gradient mb-4 inline-block">
              Senesh<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground mb-4 text-sm">
              A full-stack developer & UI/UX designer passionate about creating 
              exceptional digital experiences that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Seneshperera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/seneshperera-24b7a426b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:seneshperera2000@gmail.com" 
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Me</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2 text-primary" />
                seneshperera2000@gmail.com
              </li>
              <li className="flex items-center text-muted-foreground">
                <Linkedin size={16} className="mr-2 text-primary" />
                <a 
                  href="https://www.linkedin.com/in/seneshperera-24b7a426b/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  LinkedIn <ExternalLink size={10} className="ml-1" />
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Github size={16} className="mr-2 text-primary" />
                <a 
                  href="https://github.com/Seneshperera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  GitHub <ExternalLink size={10} className="ml-1" />
                </a>
              </li>
            </ul>
            
            <div className="glass-panel p-3 rounded-lg mt-6">
              <p className="text-xs text-muted-foreground">
                Information technology Student at University of Moratuwa (ITUM)
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Designed & Built with <Heart size={16} className="mx-1 text-primary" /> by Senesh Perera
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
