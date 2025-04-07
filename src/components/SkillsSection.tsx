
import { useEffect, useRef } from 'react';
import { 
  Code, Figma, Database, Terminal, 
  Server, MonitorSmartphone, Palette, 
  FileJson, Layers, Wind
} from 'lucide-react';

// Skill data with categories
const skillCategories = [
  {
    name: "Frontend Development",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      { name: "React.js", progress: 90 },
      { name: "Tailwind CSS", progress: 95 },
      { name: "JavaScript", progress: 85 },
      { name: "TypeScript", progress: 80 },
      { name: "HTML/CSS", progress: 90 }
    ]
  },
  {
    name: "Backend Development",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Node.js", progress: 85 },
      { name: "MongoDB", progress: 80 },
      { name: "Express.js", progress: 85 },
      { name: "RESTful APIs", progress: 85 },
      { name: "Java", progress: 90 }
    ]
  },
  {
    name: "Design & Tools",
    icon: <Figma className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Figma", progress: 90 },
      { name: "Adobe XD", progress: 85 },
      { name: "UI/UX Design", progress: 85 },
      { name: "Graphic Design", progress: 90 },
      { name: "Git & GitHub", progress: 80 }
    ]
  }
];

// Tech stack icons
const techStack = [
  { name: "React", icon: <Layers className="h-12 w-12" /> },
  { name: "JavaScript", icon: <FileJson className="h-12 w-12" /> },
  { name: "Tailwind", icon: <Wind className="h-12 w-12" /> },
  { name: "Node.js", icon: <Terminal className="h-12 w-12" /> },
  { name: "MongoDB", icon: <Database className="h-12 w-12" /> },
  { name: "Responsive", icon: <MonitorSmartphone className="h-12 w-12" /> },
  { name: "Design", icon: <Palette className="h-12 w-12" /> },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRefs = useRef<(HTMLSpanElement | null)[]>([]);
  
  // Reset progress refs array
  progressRefs.current = [];
  
  // Animation for skill bars
  useEffect(() => {
    const section = sectionRef.current;
    const progressBars = progressRefs.current;
    
    const handleScroll = () => {
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        // Animate each progress bar
        progressBars.forEach((bar, index) => {
          if (bar) {
            // Add staggered delay for each bar
            setTimeout(() => {
              // Find all skills from all categories
              const allSkills = skillCategories.flatMap(category => category.skills);
              const skill = allSkills[index];
              
              if (skill) {
                bar.style.width = `${skill.progress}%`;
              }
            }, index * 100);
          }
        });
        
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Add to refs collection
  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !progressRefs.current.includes(el)) {
      progressRefs.current.push(el);
    }
  };
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-container glass-panel rounded-3xl mx-4 sm:mx-8 md:mx-auto mt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 z-0"></div>
      
      <div className="relative z-10">
        <h2 className="section-title text-center">My Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-panel rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="flex items-center mb-6">
                <div className="mr-3 p-2 rounded-lg bg-secondary text-secondary-foreground">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * category.skills.length + skillIndex;
                  
                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                      </div>
                      <div className="skill-bar">
                        <span 
                          ref={addToRefs}
                          className="skill-progress" 
                          style={{ width: "0%" }}
                        ></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="my-16">
          <h3 className="text-2xl font-bold text-center mb-10">Tech Stack</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center glass-panel p-5 rounded-xl animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tech.icon}
                <span className="mt-2 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <div className="glass-panel p-4 rounded-lg inline-block">
            <h4 className="font-medium mb-1">Additional Certifications</h4>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">UI/UX for Beginners</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Graphic Design Basic</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Git & GitHub Mastery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
