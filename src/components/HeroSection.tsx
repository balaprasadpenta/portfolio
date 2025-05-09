
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-16 pb-8 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
          <span className="block">Hello, I'm</span>
          <span className="text-5xl md:text-7xl block mt-2">Frontend Developer</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          I build responsive, user-friendly web applications with modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="px-8 py-6 text-lg"
            onClick={scrollToProjects}
          >
            View My Work
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg"
            asChild
          >
            <a href="#about">Contact Me</a>
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => {
              document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
